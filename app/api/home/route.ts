import { NextResponse } from "next/server";

import { getEntry } from "@/contentful-client";
import {
  CarouselSkeleton,
  OurValuesSkeleton,
} from '@/interfaces/contentful-api';
import { ContentfulImage } from '@/interfaces';
import { OurValues } from '@/interfaces/home/our-values';

export async function GET() {
  try {
    const [carouselSkeleton, ourValuesSkeleton] = await Promise.all([
      getEntry<CarouselSkeleton>('carousel'),
      getEntry<OurValuesSkeleton>('ourValues'),
    ]);
  
    if (!carouselSkeleton.ok || !ourValuesSkeleton.ok) {
      throw new Error();
    }
  
    const carousel = carouselSkeleton.data.items[0].fields
      .carousel as ContentfulImage[];
    const ourValues: OurValues = {
      title: ourValuesSkeleton.data.items[0].fields.title,
      mission: ourValuesSkeleton.data.items[0].fields.mission,
      vision: ourValuesSkeleton.data.items[0].fields.vision,
      values: ourValuesSkeleton.data.items[0].fields.values.content,
    };
  
    return NextResponse.json({ carousel, ourValues }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}