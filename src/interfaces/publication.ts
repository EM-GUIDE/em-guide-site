import type Tag from "./tag";
import type StrapiImage from "./image";
import { type WysiwygComponent, type ImagesWithDecorationComponent, type TextWithSideImageComponent } from "./components";

export default interface Publication {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    seo: any;
    content: (ImagesWithDecorationComponent | WysiwygComponent | TextWithSideImageComponent)[];
    featuredImage: {
      data: StrapiImage
    }
    useDefaultImageOverlay: boolean;
    tags: {
      data: Tag[]
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}