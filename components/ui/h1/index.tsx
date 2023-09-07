'use client';

import { CustomTagProps } from '@/interfaces';

export default function H1({ children, className }: CustomTagProps) {
  const styles = 'text-center text-[32px] font-bold';

  return <h1 className={`${styles} ${className}`}>{children}</h1>;
}
