import Link from 'next/link';

interface NavLinksProps {
  isMobile?: boolean;
}

export default function NavLinks({ isMobile }: NavLinksProps) {
  const classes = isMobile
    ? 'flex flex-col mt-40 gap-5 text-2xl'
    : 'flex gap-5';

  return (
    <div className={`${classes}`}>
      <Link href='/'>News</Link>
      <Link href='/'>The club</Link>
      <Link href='/'>Teams</Link>
      <Link href='/'>Shop</Link>
    </div>
  );
}
