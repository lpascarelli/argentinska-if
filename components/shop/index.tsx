'use client';

import Anchor from '@/components/ui/anchor';
import H1 from '@/components/ui/h1';
import Section from '@/components/ui/section';

export default function Shop() {
  return (
    <Section>
      <H1>Under construction</H1>
      <p className='text-center'>
        This section is currently under construction. Use the following{' '}
        <Anchor
          href='https://www.stadium.se/foreningar/2207203'
          className='text-underline'
          target='_blank'
        >
          link
        </Anchor>{' '}
        to shop our products.
      </p>
    </Section>
  );
}
