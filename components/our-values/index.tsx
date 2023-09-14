'use client';

import { Text } from '@contentful/rich-text-types';

import Card from '@/components/ui/card';
import H1 from '@/components/ui/h1';
import Paragraph from '@/components/ui/paragraph';
import Section from '@/components/ui/section';
import ValueBox from '@/components/our-values/value-box';
import { ourValuesBlockIcons } from '@/constants';
import { OurValues } from '@/interfaces/home/our-values';

interface OurValuesProps {
  ourValues: OurValues;
}

export default function OurValues({ ourValues }: OurValuesProps) {
  const ourValuesBlocks = ourValues.values.map((item, index) => {
    const text = item.content[0] as Text;
    const icon = ourValuesBlockIcons[index];

    return <ValueBox key={index} text={text.value} icon={icon} />;
  });

  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>{ourValues.title}</H1>
      <Card className='mb-4'>
        <Paragraph>
          <strong>Mission: </strong>
          {ourValues.mission}
        </Paragraph>
        <Paragraph>
          <strong>Vision: </strong>
          {ourValues.vision}
        </Paragraph>
      </Card>
      <Card className='flex flex-wrap justify-between gap-4'>
        {ourValuesBlocks}
      </Card>
    </Section>
  );
}
