'use client';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';

export default function Management() {
  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>Management</H1>
      <div className='text-inherit sm:w-[50rem]'>
        <p className='text-lg mb-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          at accusantium, aperiam reprehenderit eaque qui esse porro quidem
          eveniet beatae odio. Dicta numquam modi laborum dolore eligendi
          necessitatibus sed! Deleniti.
        </p>
      </div>
    </Section>
  );
}
