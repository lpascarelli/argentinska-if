'use client';

import Image from 'next/image';

import Carousel from '@/components/ui/carousel';
import Hr from '@/components/ui/hr';
import Section from '@/components/ui/section';
import OurValues from '@/components/our-values';
import ImageContainer from '@/components/ui/image-container';
import { ContentfulImage } from '@/interfaces';
import { OurValues as OurValuesInterface } from '@/interfaces/home/our-values';
import { removeOpacityHandler } from '@/helpers';

interface HomeProps {
  carousel: ContentfulImage[];
  ourValues: OurValuesInterface;
}

export default function Home({ carousel, ourValues }: HomeProps) {
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
      <Hr />
      <OurValues ourValues={ourValues} />
    </Section>
  );
}
