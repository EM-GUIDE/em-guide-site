import type StrapiImage from './image'

export interface WysiwygComponent {
  id: number
  __component: 'static.wysiwyg'
  content: string
}

export interface ImagesWithDecorationComponent {
  id: number
  __component: 'static.images-with-decoration',
  images: {
    data: StrapiImage[]
  }
  decoration: string
}

export interface SlideItem {
  id: number;
  url?: string;
  text?: string;
  image: {
    data: StrapiImage;
  } 
}