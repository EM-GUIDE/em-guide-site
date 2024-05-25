import type StrapiImage from "../interfaces/image";

export function generateSrcSet(image: StrapiImage): string {
  const baseUrl = import.meta.env.PUBLIC_ASSET_URL;
  let srcSet = '';

  const formats = ['thumbnail', 'small', 'medium', 'large', 'xlarge'];

  formats.forEach(format => {
    if (image.attributes.formats.hasOwnProperty(format)) {
      const { url, width } = image.attributes.formats[format];

      if (url && width) {
        srcSet += `${baseUrl}${url} ${width}w, `;
      }
    }
  });

  return srcSet.trim();
}