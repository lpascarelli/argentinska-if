import Image from 'next/image';

import Carousel from '@/components/ui/carousel';
import ImageContainer from '@/components/ui/carousel/image-container';
import Loading from '../ui/loading';
import { getOrCreateClient } from '@/utils';

export default async function Home() {
  const client = getOrCreateClient();
  const { items } = await client.getEntries({ content_type: 'carousel' });
  const carousel = items[0].fields.carousel || [];

  const carouselContent = carousel.map((carouselImage) => {
    return (
      <ImageContainer key={carouselImage.sys.id}>
        <Image
          fill
          className='object-cover'
          priority
          src={`https:${carouselImage.fields.file.url}`}
          alt={`${carouselImage.fields.title}`}
        />
      </ImageContainer>
    );
  });

  return carouselContent ? (
    <div className='w-[25rem] sm:w-[60rem] mx-auto'>
      <Carousel loop>{carouselContent}</Carousel>
    </div>
  ) : (
    <div className='flex justify-center'>
      <Loading />
    </div>
  );
}
