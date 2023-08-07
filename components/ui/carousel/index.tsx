'use client';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren } from 'react';

type CarouselProps = PropsWithChildren & EmblaOptionsType;

export default function Carousel({ children, ...options }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex'>{children}</div>
    </div>
  );
}
