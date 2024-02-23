import type StrapiImage from "./image";
import { SlideItem } from "./components";

export default interface HomePage {
  id: number;
  attributes: {
    slide?: SlideItem[]
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