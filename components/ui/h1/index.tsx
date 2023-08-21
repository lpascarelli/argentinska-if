'use client';

import { CustomTagProps } from '@/interfaces';

export default function H1({ children, className }: CustomTagProps) {
  let styles = 'text-center text-[32px] font-bold';

  if (className) {
    styles = `${styles} ${className}`;
  }

  return <h1 className={styles}>{children}</h1>;
}
