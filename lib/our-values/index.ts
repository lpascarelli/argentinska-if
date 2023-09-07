import { NextResponse } from 'next/server';

import { getEntry } from '@/contentful-client';
import { OurValuesSkeleton } from '@/interfaces/contentful-api';
import { OurValues } from '@/interfaces/home/our-values';

export async function loadOurValues() {
  const ourValuesSkeleton = await getEntry<OurValuesSkeleton>('ourValues');

  if (!ourValuesSkeleton.ok) {
    return NextResponse.json({ status: 500 });
  }

  const ourValues: OurValues = {
    title: ourValuesSkeleton.data.items[0].fields.title,
    mission: ourValuesSkeleton.data.items[0].fields.mission,
    vision: ourValuesSkeleton.data.items[0].fields.vision,
    values: ourValuesSkeleton.data.items[0].fields.values.content,
  }

  return NextResponse.json({ ourValues }, { status: 200 });
}
