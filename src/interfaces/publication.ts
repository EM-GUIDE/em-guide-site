import type Tag from "./tag";
import type StrapiImage from "./image";

export default interface Publication {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: {
      data: StrapiImage
    }
    tags: {
      data: Tag[]
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}