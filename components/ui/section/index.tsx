'use client';

import { CustomTagProps } from '@/interfaces';

export default function Section({
  children,
  className,
  replaceClasses,
}: CustomTagProps) {
  let styles = 'mx-10';

  if (replaceClasses && className) {
    styles = className;
  } else if (className) {
    styles = `${styles} ${className}`;
  }

  return <section className={styles}>{children}</section>;
}
