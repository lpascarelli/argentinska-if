'use client';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren, useEffect, useState, Children } from 'react';

import Dots from '@/components/ui/carousel/dots';

type CarouselProps = PropsWithChildren & EmblaOptionsType;

export default function Carousel({ children, ...options }: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);

    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  const length = Children.count(children);

  return (
    <>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
}
