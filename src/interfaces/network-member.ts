import type StrapiImage from "./image";

export default interface NetworkMember {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    url?: string;
    logo: {
      data: StrapiImage
    };
    rank: number;
    createdAt: string;
    updatedAt: string;
  };
}