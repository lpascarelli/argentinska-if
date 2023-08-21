'use client';

import Image from 'next/image';
import { TopLevelBlock, Text } from '@contentful/rich-text-types';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';
import ImageContainer from '@/components/ui/image-container';
import { removeOpacityHandler } from '@/helpers';
import { ContentfulImage } from '@/interfaces';

interface TheClubProps {
  mainTitle: string;
  image: ContentfulImage;
  textNodes: TopLevelBlock[];
}

export default function TheClub({ mainTitle, image, textNodes }: TheClubProps) {
  const paragraphs = [];
  const classes = ['h-[15rem]', 'w-[20rem]', 'sm:w-[25rem]', 'mb-4'];

  for (let i = 0; i < textNodes.length; i++) {
    let content = textNodes[i].content[0] as Text;

    paragraphs.push(
      <p key={i} className='text-lg mb-4'>
        {content.value}
      </p>
    );
  }

  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>{mainTitle}</H1>
      <ImageContainer classes={classes}>
        <Image
          fill
          priority
          src={`https:${image.fields.file.url}`}
          alt={image.fields.file.fileName}
          className='transition-opacity opacity-0 duration-[1s] rounded-2xl'
          onLoadingComplete={removeOpacityHandler}
        />
      </ImageContainer>
      <div className='text-inherit sm:w-[50rem]'>{paragraphs}</div>
    </Section>
  );
}
