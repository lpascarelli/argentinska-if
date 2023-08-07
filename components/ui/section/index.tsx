import { PropsWithChildren } from 'react';

export default function Section({ children }: PropsWithChildren) {
  return <section className='mx-10'>{children}</section>;
}
