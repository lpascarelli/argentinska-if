'use client';

import Image from 'next/image';

import { ContentfulImage } from '@/interfaces';
import Carousel from '@/components/ui/carousel';
import ImageContainer from '@/components/ui/image-container';
import { removeOpacityHandler } from '@/helpers';

interface HomeProps {
  carousel: ContentfulImage[];
}

export default async function Home({ carousel }: HomeProps) {
  const classes = ['h-[20rem]', 'sm:h-[35rem]', 'flex-[0_0_100%]'];
  const carouselUI = carousel.map((item) => {
    return (
      <ImageContainer key={item.fields.description} classes={classes}>
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
