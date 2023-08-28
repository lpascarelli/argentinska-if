'use client';

import Image from 'next/image';

import { ContentfulImage } from '@/interfaces';
import Carousel from '@/components/ui/carousel';
import Section from '@/components/ui/section';
import ImageContainer from '@/components/ui/image-container';
import { removeOpacityHandler } from '@/helpers';

interface HomeProps {
  carousel: ContentfulImage[];
}

export default async function Home({ carousel }: HomeProps) {
  const carouselUI = carousel.map((item) => {
    return (
      <ImageContainer
        key={item.fields.description}
        className='h-[20rem] sm:h-[35rem] flex-[0_0_100%]'
      >
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
    <Section className='sm:w-[60rem] mx-auto mb-4'>
      <Carousel loop>{carouselUI}</Carousel>
    </Section>
  );
}
