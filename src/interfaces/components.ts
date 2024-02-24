import type StrapiImage from './image'

export interface WysiwygComponent {
  id: number
  __component: 'static.wysiwyg'
  content: string
}

export interface ImagesWithDecorationComponent {
  id: number
  __component: 'static.images-with-decoration';
  images: {
    data: StrapiImage[]
  }
  decoration: string
}

interface ContentPreviewItem {
  id: number;
  tag?: string;
  title: string;
  link: string;
}
export interface ContentPreviewGridComponent {
  id: number
  __component: 'static.content-preview-grid',
  contentPreviewItem: ContentPreviewItem[]
}

export interface SlideItem {
  id: number;
  url?: string;
  text?: string;
  image: {
    data: StrapiImage;
  }
}