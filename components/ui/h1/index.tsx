import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
}

export default function H1({ children }: H1Props) {
  return <h1 className='text-center text-[32px] font-bold'>{children}</h1>;
}
