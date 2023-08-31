import { NextResponse } from 'next/server';

import { getEntry } from '@/contentful-client';
import { NewsSkeleton } from '@/interfaces/contentful-api';

export async function GET() {
  try {
    const newsSkeleton = await getEntry<NewsSkeleton>('news');

    if (!newsSkeleton.ok) {
      throw new Error();
    }

    const { newsTitle, description } = newsSkeleton.data.items[0].fields;
    const news = { title: newsTitle, description };

    return NextResponse.json({ news });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
