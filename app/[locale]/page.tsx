import { cookies } from 'next/headers';

import Home from '@/components/home';
import { LOCALES } from '@/constants/languages';
import { ContentfulImage } from '@/interfaces';
import {
  CarouselSkeleton,
  OurValuesSkeleton,
} from '@/interfaces/contentful-api';
import { OurValues } from '@/interfaces/home/our-values';
import { getOrCreateClient } from '@/utils';

export default async function HomePage() {
  const locale = cookies().get('NEXT_LOCALE');
  const client = getOrCreateClient();
  const carouselSkeleton = await client.getEntries<CarouselSkeleton>({
    content_type: 'carousel',
  });
  const ourValuesSkeleton = await client.getEntries<OurValuesSkeleton>({
    content_type: 'ourValues',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });

  const carousel = carouselSkeleton.items[0].fields
    .carousel as ContentfulImage[];

  const ourValues: OurValues = {
    title: ourValuesSkeleton.items[0].fields.title,
    mission: ourValuesSkeleton.items[0].fields.mission,
    vision: ourValuesSkeleton.items[0].fields.vision,
    values: ourValuesSkeleton.items[0].fields.values.content,
  };

  return <Home carousel={carousel} ourValues={ourValues} />;
}
