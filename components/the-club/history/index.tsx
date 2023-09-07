'use client';

import Image from 'next/image';
import { Text } from '@contentful/rich-text-types';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';
import Paragraph from '@/components/ui/paragraph';
import ImageContainer from '@/components/ui/image-container';
import { removeOpacityHandler } from '@/helpers';
import { History } from '@/interfaces/the-club';

interface HistoryProps {
  history: History;
}

export default function History({ history }: HistoryProps) {
  const paragraphs = [];
  const { title, image, textNodes } = history;

  for (let i = 0; i < textNodes.length; i++) {
    let content = textNodes[i].content[0] as Text;

    paragraphs.push(<Paragraph key={i}>{content.value}</Paragraph>);
  }

  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>{title}</H1>
      <ImageContainer className='h-[15rem] w-[20rem] sm:w-[25rem] mb-4'>
        <Image
          fill
          priority
          src={`https:${image.fields.file.url}`}
          alt={image.fields.file.fileName}
          className='transition-opacity opacity-0 duration-[1s] rounded-2xl'
          onLoadingComplete={removeOpacityHandler}
        />
      </ImageContainer>
      <div className='sm:w-[50rem]'>{paragraphs}</div>
    </Section>
  );
}
