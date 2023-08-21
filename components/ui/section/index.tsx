'use client';

import { CustomTagProps } from '@/interfaces';

export default function Section({ children, className }: CustomTagProps) {
  let styles = 'mx-10';

  if (className) {
    styles = `${styles} ${className}`;
  }

  return <section className={styles}>{children}</section>;
}
