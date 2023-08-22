'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Section from '@/components/ui/section';
import H1 from '@/components/ui/h1';
import ImageContainer from '@/components/ui/image-container';
import { Management } from '@/interfaces/the-club';
import { removeOpacityHandler } from '@/helpers';

interface ManagementProps {
  management: Management[];
}

export default function Management({ management }: ManagementProps) {
  const t = useTranslations('Management');

  const managementUI = management.map((manager, index) => {
    return (
      <div
        className='flex flex-col items-center md:flex-row md:items-stretch gap-4 mb-9'
        key={`${manager.avatar.fields.file.fileName}-${index}`}
      >
        <ImageContainer className='h-[15rem] w-[12rem] sm:w-[20rem]'>
          <Image
            fill
            priority
            src={`https:${manager.avatar.fields.file.url}`}
            alt={manager.avatar.fields.file.fileName}
            className='transition-opacity opacity-0 duration-[1s] rounded-2xl'
            onLoadingComplete={removeOpacityHandler}
          />
        </ImageContainer>
        <div className='flex flex-col'>
          <p className='text-3xl font-bold mb-2 text-center md:text-left'>
            {manager.name}
          </p>
          <p className='text-lg text-center md:text-left mb-2'>{`${t(
            'year-of-birth'
          )}: ${manager.year}`}</p>
          <p className='text-lg text-center md:text-left mb-2'>
            {manager.introduction}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Section className='flex flex-col items-center'>
      <H1 className='mb-4'>Management</H1>
      <div className='sm:w-[50rem]'>
        <p className='text-inherit text-lg mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quod adipisci error modi voluptates deserunt quisquam sint ratione,
          corrupti officia debitis nemo, et earum, laboriosam minima repudiandae
          incidunt voluptatum porro?
        </p>
        {managementUI}
      </div>
    </Section>
  );
}
