'use client';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';
import Paragraph from '@/components/ui/paragraph';
import { OurValues } from '@/interfaces/home/our-values';

interface OurValuesProps {
  ourValues: OurValues;
}

export default function OurValues({ ourValues }: OurValuesProps) {
  console.log(ourValues);
  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>{ourValues.title}</H1>
      <div className='sm:w-[50rem]'>
        <Paragraph>
          <strong>Mission: </strong>
          {ourValues.mission}
        </Paragraph>
        <Paragraph>
          <strong>Vision: </strong>
          {ourValues.vision}
        </Paragraph>
      </div>
    </Section>
  );
}
