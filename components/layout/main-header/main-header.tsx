'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useLocale } from 'next-intl';

import NavBar from './nav-bar/nav-bar';
import argentinskaLogo from '@/public/images/argentinska-logo.png';

export default function MainHeader() {
  const locale = useLocale();

  return (
    <header className='argentinska-bg h-20 flex justify-between items-center p-5'>
      <div className='mt-10'>
        <Link href={`/${locale}`}>
          <Image
            priority
            src={argentinskaLogo}
            width={160}
            height={160}
            alt='logo'
          />
        </Link>
      </div>
      <div className='flex'>
        <NavBar />
      </div>
    </header>
  );
}
