import type Tag from "./tag";

export default interface Publication {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText?: string;
          caption?: string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            },
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            }
          }
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          createdAt: string;
          updatedAt: string;
        }
      }
    }
    tags: {
      data: Tag[]
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}