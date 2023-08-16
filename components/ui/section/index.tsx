'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  classes?: string[];
}

export default function Section({ children, classes }: SectionProps) {
  let styles = 'mx-10';

  if (classes) {
    styles = `${styles} ${classes.join(' ')}`;
  }

  return <section className={styles}>{children}</section>;
}
