import { getImage } from "astro:assets";
import sharp from "sharp";

const CMS_BASE = import.meta.env.PUBLIC_ASSET_URL as string;

function isCmsUrl(src: string): boolean {
  return src.startsWith(CMS_BASE) || src.startsWith("/uploads/");
}

function toFullUrl(src: string): string {
  return src.startsWith("/") ? `${CMS_BASE}${src}` : src;
}

async function generateLqip(fullUrl: string): Promise<string | undefined> {
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) return undefined;
    const buffer = Buffer.from(await response.arrayBuffer());
    const tiny = await sharp(buffer)
      .resize(32, null, { fit: "inside" })
      .webp({ quality: 20 })
      .toBuffer();
    return `data:image/webp;base64,${tiny.toString("base64")}`;
  } catch {
    return undefined;
  }
}

/**
 * Rewrites CMS <img> tags in an HTML string to use build-time-localized URLs
 * with a sharp-generated LQIP placeholder for the unlazy lazy-load pattern.
 * Call only in Astro component frontmatter (requires the astro:assets build context).
 */
export async function localizeWysiwygImages(html: string): Promise<string> {
  if (!html) return html;

  const cmsUrls = new Set<string>();
  const imgSrcPattern = /\ssrc="([^"]+)"/gi;
  let m: RegExpExecArray | null;
  while ((m = imgSrcPattern.exec(html)) !== null) {
    if (isCmsUrl(m[1])) cmsUrls.add(m[1]);
  }

  if (cmsUrls.size === 0) return html;

  const urlMap = new Map<string, { local: string; lqip: string | undefined }>();
  await Promise.all(
    Array.from(cmsUrls).map(async (src) => {
      const fullUrl = toFullUrl(src);
      try {
        const [result, lqip] = await Promise.all([
          getImage({ src: fullUrl, inferSize: true, format: "webp" }),
          generateLqip(fullUrl),
        ]);
        urlMap.set(src, { local: result.src, lqip });
      } catch (e) {
        console.warn(`[localizeHtml] Failed to localize ${src}:`, e);
      }
    })
  );

  return html.replace(/<img([^>]*)>/gi, (imgTag, attrs: string) => {
    const srcMatch = /src="([^"]+)"/.exec(attrs);
    if (!srcMatch) return imgTag;

    const src = srcMatch[1];
    const entry = urlMap.get(src);
    if (!entry) return imgTag;

    if (entry.lqip) {
      let newAttrs = attrs.replace(
        /src="[^"]+"/,
        `src="${entry.lqip}" data-src="${entry.local}"`
      );
      if (!/loading=/.test(newAttrs)) newAttrs += ' loading="lazy"';
      return `<img${newAttrs}>`;
    }

    return imgTag.replace(/src="[^"]+"/, `src="${entry.local}"`);
  });
}
