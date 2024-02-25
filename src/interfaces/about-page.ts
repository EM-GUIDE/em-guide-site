import type StrapiImage from "./image";
import { type WysiwygComponent, type ImagesWithDecorationComponent, type ContentFeaturedContent, type SliderComponent, type TextWithSideImageComponent } from "./components";

export default interface AboutPage {
  id: number;
  attributes: {
    content: (ImagesWithDecorationComponent | WysiwygComponent | ContentFeaturedContent | SliderComponent | TextWithSideImageComponent)[];
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