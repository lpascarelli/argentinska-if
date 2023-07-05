import Link from 'next/link';

interface NavLinksProps {
  isMobile?: boolean;
}

export default function NavLinks({ isMobile }: NavLinksProps) {
  return isMobile ? (
    <div className='flex flex-col mt-40 gap-4 text-2xl'>
      <Link href='/'>News</Link>
      <Link href='/'>The club</Link>
      <Link href='/'>Teams</Link>
      <Link href='/'>Shop</Link>
    </div>
  ) : (
    <>
      <Link href='/'>News</Link>
      <Link href='/'>The club</Link>
      <Link href='/'>Teams</Link>
      <Link href='/'>Shop</Link>
    </>
  );
}
