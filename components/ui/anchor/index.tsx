'use client';

import Link from 'next/link';

import { AnchorProps } from '@/interfaces';

export default function Anchor({ href, target, children }: AnchorProps) {
  const styles = 'underline';

  return (
    <Link href={href} className={`${styles}`} target={target}>
      {children}
    </Link>
  );
}
