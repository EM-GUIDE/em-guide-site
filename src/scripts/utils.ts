import type StrapiImage from "../interfaces/image";



export function generateSrcSet(image: StrapiImage, formats: ('thumbnail' | 'small' | 'medium' | 'large' | 'xlarge')[] = ['thumbnail', 'small', 'medium', 'large', 'xlarge']): string {
  const baseUrl = import.meta.env.PUBLIC_ASSET_URL;
  let srcSet = '';

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