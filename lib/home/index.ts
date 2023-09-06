import { NextResponse } from 'next/server';

import { getEntry } from '@/contentful-client';
import {
  CarouselSkeleton,
} from '@/interfaces/contentful-api';
import { ContentfulImage } from '@/interfaces';

export async function loadHomeData() {
  const carouselSkeleton = await getEntry<CarouselSkeleton>('carousel');

  if (!carouselSkeleton.ok) {
    return NextResponse.json({ status: 500 });
  }

  const carousel = carouselSkeleton.data.items[0].fields
    .carousel as ContentfulImage[];

  return NextResponse.json({ carousel }, { status: 200 });
}
