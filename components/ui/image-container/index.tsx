'use client';

import { CustomTagProps } from '@/interfaces';

export default function ImageContainer({
  children,
  className,
}: CustomTagProps) {
  let styles = 'relative';

  if (className) {
    styles = `${styles} ${className}`;
  }

  return <div className={styles}>{children}</div>;
}
