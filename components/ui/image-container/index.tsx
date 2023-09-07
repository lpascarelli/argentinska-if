'use client';

import { CustomTagProps } from '@/interfaces';

export default function ImageContainer({
  children,
  className,
}: CustomTagProps) {
  const styles = 'relative';

  return <div className={`${styles} ${className}`}>{children}</div>;
}
