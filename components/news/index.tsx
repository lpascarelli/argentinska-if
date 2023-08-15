'use client';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';

interface NewsProps {
  title: string;
  description: string;
}

export default function News({ title, description }: NewsProps) {
  return (
    <Section>
      <H1>{title}</H1>
      <p className='text-center'>{description}</p>
    </Section>
  );
}
