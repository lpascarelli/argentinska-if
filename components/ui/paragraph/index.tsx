'use client';

import { CustomTagProps } from '@/interfaces';

export default function Text({ children, className }: CustomTagProps) {
  const styles = 'text-lg mb-4';

  return <p className={`${styles} ${className}`}>{children}</p>;
}
