import { getImage } from "astro:assets";
import sharp from "sharp";

const CMS_BASE = import.meta.env.PUBLIC_ASSET_URL as string;

function isCmsUrl(src: string): boolean {
  return src.startsWith(CMS_BASE) || src.startsWith("/uploads/");
}

function toFullUrl(src: string): string {
  return src.startsWith("/") ? `${CMS_BASE}${src}` : src;
}

function parseSrcset(srcset: string): Array<{ url: string; descriptor: string }> {
  return srcset.split(",").map((entry) => {
    const parts = entry.trim().split(/\s+/);
    return { url: parts[0], descriptor: parts.slice(1).join(" ") };
  });
}

/**
 * Fetch a CMS image once, generate a tiny LQIP and return its localized URL.
 * Running both operations from the same buffer avoids a second network round-trip.
 */
async function fetchAndProcess(
  cmsSrc: string
): Promise<{ local: string; lqip: string | undefined }> {
  const fullUrl = toFullUrl(cmsSrc);

  // Fetch the raw bytes once; use for LQIP. getImage() fetches internally too
  // but caches, so this is at most 2 hits per unique URL at build time.
  let lqip: string | undefined;
  try {
    const res = await fetch(fullUrl);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      const tiny = await sharp(buf)
        .resize(32, null, { fit: "inside" })
        .webp({ quality: 20 })
        .toBuffer();
      lqip = `data:image/webp;base64,${tiny.toString("base64")}`;
    }
  } catch (e) {
    console.warn(`[localizeHtml] LQIP failed for ${cmsSrc}:`, e);
  }

  const result = await getImage({ src: fullUrl, inferSize: true, format: "webp" });
  return { local: result.src, lqip };
}

/**
 * Rewrites CMS <img> src/srcset URLs in an HTML string to build-time-localized
 * assets and adds a sharp-generated LQIP placeholder for the unlazy pattern.
 * Call only in Astro component frontmatter (requires the astro:assets build context).
 */
export async function localizeWysiwygImages(html: string): Promise<string> {
  if (!html) return html;

  // Collect all unique CMS URLs from src and srcset attributes
  const cmsUrls = new Set<string>();
  const imgTagPattern = /<img([^>]*)>/gi;
  let m: RegExpExecArray | null;
  while ((m = imgTagPattern.exec(html)) !== null) {
    const attrs = m[1];
    const srcMatch = /\ssrc="([^"]+)"/.exec(attrs);
    if (srcMatch && isCmsUrl(srcMatch[1])) cmsUrls.add(srcMatch[1]);
    const srcsetMatch = /\ssrcset="([^"]+)"/.exec(attrs);
    if (srcsetMatch) {
      for (const { url } of parseSrcset(srcsetMatch[1])) {
        if (isCmsUrl(url)) cmsUrls.add(url);
      }
    }
  }

  if (cmsUrls.size === 0) return html;

  // Determine which URLs are main src (need LQIP) vs srcset-only (localize only)
  imgTagPattern.lastIndex = 0;
  const mainSrcs = new Set<string>();
  while ((m = imgTagPattern.exec(html)) !== null) {
    const srcMatch = /\ssrc="([^"]+)"/.exec(m[1]);
    if (srcMatch && isCmsUrl(srcMatch[1])) mainSrcs.add(srcMatch[1]);
  }

  // Localize main src URLs (with LQIP generation) and srcset-only URLs (without)
  const urlMap = new Map<string, { local: string; lqip: string | undefined }>();
  await Promise.all(
    Array.from(cmsUrls).map(async (src) => {
      try {
        if (mainSrcs.has(src)) {
          urlMap.set(src, await fetchAndProcess(src));
        } else {
          const result = await getImage({ src: toFullUrl(src), inferSize: true, format: "webp" });
          urlMap.set(src, { local: result.src, lqip: undefined });
        }
      } catch (e) {
        console.warn(`[localizeHtml] Failed to localize ${src}:`, e);
      }
    })
  );

  // Rewrite img tags
  imgTagPattern.lastIndex = 0;
  return html.replace(/<img([^>]*)>/gi, (imgTag, attrs: string) => {
    const srcMatch = /src="([^"]+)"/.exec(attrs);
    if (!srcMatch) return imgTag;
    const src = srcMatch[1];
    const entry = urlMap.get(src);
    if (!entry) return imgTag;

    const { local, lqip } = entry;
    let newAttrs = attrs;

    // Rewrite src — with LQIP use unlazy pattern, otherwise plain local src
    if (lqip) {
      newAttrs = newAttrs.replace(/src="[^"]+"/, `src="${lqip}" data-src="${local}"`);
    } else {
      newAttrs = newAttrs.replace(/src="[^"]+"/, `src="${local}"`);
    }

    // Rewrite srcset — localize each URL; move to data-srcset when using LQIP
    newAttrs = newAttrs.replace(/srcset="([^"]+)"/, (_, srcsetVal: string) => {
      const newSrcset = parseSrcset(srcsetVal)
        .map(({ url, descriptor }) => {
          const localUrl = urlMap.get(url)?.local ?? url;
          return descriptor ? `${localUrl} ${descriptor}` : localUrl;
        })
        .join(", ");
      return lqip ? `data-srcset="${newSrcset}"` : `srcset="${newSrcset}"`;
    });

    if (!/loading=/.test(newAttrs)) newAttrs += ' loading="lazy"';
    return `<img${newAttrs}>`;
  });
}
