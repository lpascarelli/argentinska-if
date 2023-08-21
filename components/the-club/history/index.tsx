'use client';

import Image from 'next/image';
import { TopLevelBlock, Text } from '@contentful/rich-text-types';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';
import ImageContainer from '@/components/ui/image-container';
import { removeOpacityHandler } from '@/helpers';
import { ContentfulImage } from '@/interfaces';

interface TheClubProps {
  historyTitle: string;
  historyImage: ContentfulImage;
  historyTextNodes: TopLevelBlock[];
}

export default function History({
  historyTitle,
  historyImage,
  historyTextNodes,
}: TheClubProps) {
  const paragraphs = [];

  for (let i = 0; i < historyTextNodes.length; i++) {
    let content = historyTextNodes[i].content[0] as Text;

    paragraphs.push(
      <p key={i} className='text-lg mb-4'>
        {content.value}
      </p>
    );
  }

  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>{historyTitle}</H1>
      <ImageContainer className='h-[15rem] w-[20rem] sm:w-[25rem] mb-4'>
        <Image
          fill
          priority
          src={`https:${historyImage.fields.file.url}`}
          alt={historyImage.fields.file.fileName}
          className='transition-opacity opacity-0 duration-[1s] rounded-2xl'
          onLoadingComplete={removeOpacityHandler}
        />
      </ImageContainer>
      <div className='text-inherit sm:w-[50rem]'>{paragraphs}</div>
    </Section>
  );
}
