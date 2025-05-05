import type StrapiImage from './image'

export interface WysiwygComponent {
  id: number
  __component: 'static.wysiwyg'
  content: string
  hide: boolean | null
}

export interface ImagesWithDecorationComponent {
  id: number
  __component: 'static.images-with-decoration';
  images: {
    data: StrapiImage[]
  }
  decoration: string
  hide: boolean | null
}

interface ContentPreviewItem {
  id: number;
  tag?: string;
  title: string;
  link: string;
}

export interface ContentPreviewGridComponent {
  id: number
  __component: 'static.content-preview-grid'
  contentPreviewItem: ContentPreviewItem[]
  hide: boolean | null
}

export interface ContentFeaturedContent {
  id: number
  __component: 'static.featured-content'
  title?: string;
  description?: string;
  image: {
    data: StrapiImage
  }
  button?: {
    id: number;
    label: string;
    url: string;
    newPage?: boolean | null;
  }
  hide: boolean | null
}

export interface SliderComponent {
  id: number
  __component: 'interactive.slider'
  slides: SlideItem[]
  hide: boolean | null
}


export interface SlideItem {
  id: number;
  url?: string;
  text?: string;
  textMobileOverwrite?: string;
  image: {
    data: StrapiImage;
  }
}

export interface TextWithSideImageComponent {
  id: number;
  __component: 'static.text-with-side-image';
  text: string;
  image: {
    data: StrapiImage;
  }
  hide: boolean | null
}

// export type ContentFromComponents = (ImagesWithDecorationComponent | WysiwygComponent | ContentPreviewGridComponent | ContentFeaturedContent)[];