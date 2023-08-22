import { TopLevelBlock } from '@contentful/rich-text-types';

import { ContentfulImage } from '@/interfaces';

export interface History {
  title: string;
  image: ContentfulImage;
  textNodes: TopLevelBlock[];
}

export interface Management {
  name: string;
  year: number;
  introduction: string;
  avatar: ContentfulImage;
}
