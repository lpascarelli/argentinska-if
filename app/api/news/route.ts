import { NextResponse } from 'next/server';

import { getEntry } from '@/contentful-client';
import { NewsSkeleton } from '@/interfaces/contentful-api';

export async function GET() {
  const newsSkeleton = await getEntry<NewsSkeleton>('news');

  if (!newsSkeleton.ok) {
    return NextResponse.json({ status: 500 });
  }

  const { newsTitle, description } = newsSkeleton.data.items[0].fields;
  const news = { title: newsTitle, description };

  return NextResponse.json({ news });
}
