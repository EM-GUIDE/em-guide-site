import type Publication from "./publication";

export default interface Tag {
  id: number;
  attributes: {
    title: string;
    slug: string;
    publications: {
      data: Publication[];
    }
    posts: {
      data: Publication[];
    }
    createdAt: string;
    updatedAt: string;
  };
}