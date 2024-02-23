import type StrapiImage from "./image";
import type Tag from "./tag";

export default interface NewsPage {
  id: number;
  attributes: {
    featuredTags: {
      data: Tag[]
    },
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
    }
  };
}