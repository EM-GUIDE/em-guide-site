import type StrapiImage from "./image";
import { type WysiwygComponent, type ImagesWithDecorationComponent, type ContentPreviewGridComponent, type ContentFeaturedContent, type SliderComponent, type TextWithSideImageComponent } from "./components";

export default interface HomePage {
  id: number;
  attributes: {
    content: (ImagesWithDecorationComponent | WysiwygComponent | ContentPreviewGridComponent | ContentFeaturedContent | SliderComponent | TextWithSideImageComponent)[];
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