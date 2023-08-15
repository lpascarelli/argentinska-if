import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
  classes?: string[];
}

export default function H1({ children, classes }: H1Props) {
  let styles = 'text-center text-[32px] font-bold';

  if (classes) {
    styles = `${styles} ${classes.join(' ')}`;
  }

  return <h1 className={styles}>{children}</h1>;
}
