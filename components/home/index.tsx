'use client';

import Image from 'next/image';

import { ContentfulImage } from '@/interfaces';
import Carousel from '@/components/ui/carousel';
import ImageContainer from '@/components/ui/carousel/image-container';

interface HomeProps {
  carousel: ContentfulImage[];
}

export default async function Home({ carousel }: HomeProps) {
  function removeOpacityHandler(image: HTMLImageElement) {
    image.classList.remove('opacity-0');
  }

  const carouselUI = carousel.map((item) => {
    return (
      <ImageContainer key={item.fields.description}>
        <Image
          priority
          fill
          className='transition-opacity opacity-0 duration-[1s] object-cover'
          src={`https:${item.fields.file.url}`}
          alt={item.fields.file.fileName}
          onLoadingComplete={removeOpacityHandler}
        />
      </ImageContainer>
    );
  });

  return (
    <div className='w-[25rem] sm:w-[60rem] mx-auto'>
      <Carousel loop>{carouselUI}</Carousel>
    </div>
  );
}
