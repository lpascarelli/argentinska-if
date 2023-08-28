'use client';

import { CustomTagProps } from '@/interfaces';

export default function Section({ children, className }: CustomTagProps) {
  return <section className={className}>{children}</section>;
}
