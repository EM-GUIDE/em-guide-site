import type StrapiImage from "./image";
import { SlideItem } from "./components";
import { type WysiwygComponent, type ImagesWithDecorationComponent, type ContentPreviewGridComponent, type ContentFeaturedContent } from "./components";

export default interface HomePage {
  id: number;
  attributes: {
    slide?: SlideItem[]
    content: (ImagesWithDecorationComponent | WysiwygComponent | ContentPreviewGridComponent | ContentFeaturedContent)[];
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