'use client';

import { ReactNode } from 'react';

interface ImageContainerProps {
  children: ReactNode;
  classes?: string[];
}

export default function ImageContainer({
  children,
  classes,
}: ImageContainerProps) {
  let styles = 'relative';

  if (classes) {
    styles = `${styles} ${classes.join(' ')}`;
  }

  return <div className={styles}>{children}</div>;
}
