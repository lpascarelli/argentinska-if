import { NextResponse } from 'next/server';

import { getEntry } from '@/contentful-client';
import {
  AboutUsSkeleton,
  ManagementSkeleton,
} from '@/interfaces/contentful-api';
import { getYear } from '@/helpers';
import { History, Management } from '@/interfaces/the-club';

export async function loadAboutUsData() {
  const [aboutUsSkeleton, managementSkeleton] = await Promise.all([
    getEntry<AboutUsSkeleton>('theClub'),
    getEntry<ManagementSkeleton>('management'),
  ]);

  if (!aboutUsSkeleton.ok || !managementSkeleton.ok) {
    return NextResponse.json({ status: 500 });
  }

  const history: History = {
    title: aboutUsSkeleton.data.items[0].fields.historyTitle,
    image:
      aboutUsSkeleton.data.items[0].fields.historyContent.content[0].data
        .target,
    textNodes:
      aboutUsSkeleton.data.items[0].fields.historyContent.content.slice(1),
  };

  const management: Management[] = managementSkeleton.data.items.map((item) => {
    return {
      name: item.fields.title,
      year: getYear(item.fields.dateOfBirth),
      introduction: item.fields.introduction.toString(),
      avatar: item.fields.manager,
    };
  });

  return NextResponse.json({ history, management }, { status: 200 });
}
