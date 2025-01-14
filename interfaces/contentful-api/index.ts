import {
  EntryFieldTypes,
  EntryCollection,
  EntrySkeletonType,
} from 'contentful';

import { ContentfulImage } from '@/interfaces';

export interface AboutUsSkeleton {
  contentTypeId: 'theClub';
  fields: {
    title: EntryFieldTypes.Text;
    historyTitle: EntryFieldTypes.Text;
    historyContent: EntryFieldTypes.RichText;
  };
}

export interface CarouselSkeleton {
  contentTypeId: 'carousel';
  fields: {
    title: EntryFieldTypes.Text;
    carousel: Array<ContentfulImage>;
  };
}

export interface GetEntryResponse<T extends EntrySkeletonType> {
  ok: boolean
  data: EntryCollection<T, undefined, string>
  error?: string
}
export interface ManagementSkeleton {
  contentTypeId: 'management';
  fields: {
    title: EntryFieldTypes.Text;
    dateOfBirth: EntryFieldTypes.Text;
    introduction: EntryFieldTypes.RichText;
    manager: ContentfulImage;
  };
}

export interface NewsSkeleton {
  contentTypeId: 'news';
  fields: {
    title: EntryFieldTypes.Text;
    newsTitle: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
}

export interface OurValuesSkeleton {
  contentTypeId: 'ourValues';
  fields: {
    title: EntryFieldTypes.Text;
    mission: EntryFieldTypes.Text;
    vision: EntryFieldTypes.Text;
    values: EntryFieldTypes.RichText;
  }
}
