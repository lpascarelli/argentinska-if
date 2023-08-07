import { PropsWithChildren } from 'react';

export default function ImageContainer({ children }: PropsWithChildren) {
  return (
    <div className='relative md:h-[30rem] flex-[0_0_100%]'>{children}</div>
  );
}
