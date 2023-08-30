import Home from '@/components/home';
import { getEntry } from '@/contentful-client';
import { ContentfulImage } from '@/interfaces';
import {
  CarouselSkeleton,
  OurValuesSkeleton,
} from '@/interfaces/contentful-api';
import { OurValues } from '@/interfaces/home/our-values';

export default async function HomePage() {
  const [carouselSkeleton, ourValuesSkeleton] = await Promise.all([
    getEntry<CarouselSkeleton>('carousel'),
    getEntry<OurValuesSkeleton>('ourValues'),
  ]);

  if (carouselSkeleton.ok && ourValuesSkeleton.ok) {
    const carousel = carouselSkeleton.data.items[0].fields
      .carousel as ContentfulImage[];
    const ourValues: OurValues = {
      title: ourValuesSkeleton.data.items[0].fields.title,
      mission: ourValuesSkeleton.data.items[0].fields.mission,
      vision: ourValuesSkeleton.data.items[0].fields.vision,
      values: ourValuesSkeleton.data.items[0].fields.values.content,
    };

    return <Home carousel={carousel} ourValues={ourValues} />;
  }
}
