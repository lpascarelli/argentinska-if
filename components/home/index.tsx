'use client';

import Image from 'next/image';

import Carousel from '@/components/ui/carousel';
import Section from '@/components/ui/section';
import ImageContainer from '@/components/ui/image-container';
import { ContentfulImage } from '@/interfaces';
import { removeOpacityHandler } from '@/helpers';

interface HomeProps {
  carousel: ContentfulImage[];
}

export default function Home({ carousel }: HomeProps) {
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
    <Section>
      <div className='sm:w-[60rem] mx-auto'>
        <Carousel loop>{carouselUI}</Carousel>
      </div>
    </Section>
  );
}
