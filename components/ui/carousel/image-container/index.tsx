import { PropsWithChildren } from 'react';

export default function ImageContainer({ children }: PropsWithChildren) {
  return (
    <div className='relative h-[20rem] sm:h-[35rem] flex-[0_0_100%]'>
      {children}
    </div>
  );
}
