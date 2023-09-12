import { CustomTagProps } from '@/interfaces';

export default function Card({ children, className }: CustomTagProps) {
  const styles = 'sm:w-[50rem]';

  return <div className={`${styles} ${className}`}>{children}</div>;
}
