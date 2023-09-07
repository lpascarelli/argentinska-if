'use client';

import { OurValues } from '@/interfaces/home/our-values';

interface OurValuesProps {
  ourValues: OurValues;
}

export default function OurValues({ ourValues }: OurValuesProps) {
  console.log(ourValues);
  return <div>Hello world</div>;
}
