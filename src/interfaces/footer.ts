// import { type WysiwygComponent, type ImagesWithDecorationComponent, type ContentPreviewGridComponent, type ContentFeaturedContent, type SliderComponent, type TextWithSideImageComponent } from "./components";

interface Link {
  id: number
  text: string
  url: string
  newPage?: boolean
}

export default interface HomePage {
  id: number;
  attributes: {
    links: Link[]
  }
};