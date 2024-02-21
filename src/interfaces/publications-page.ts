import type StrapiImage from "./image";

export default interface PublicationsPage {
  id: number;
  attributes: {
    seo: {
      title: string;
      description: string;
      canonical: string | null;
      ogTitle: string | null;
      ogDescription: string | null;
      ogImage?: {
        data: StrapiImage;
      }
      twitterTitle: string | null;
      twitterDescription: string | null;
      twitterImage?: {
        data: StrapiImage;
      }
    },

  };
}