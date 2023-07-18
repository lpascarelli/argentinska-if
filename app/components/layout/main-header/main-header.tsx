import Image from 'next/image';

import NavBar from './nav-bar/nav-bar';
import argentinskaLogo from '@/public/images/argentinska-logo.png';

export default function MainHeader() {
  return (
    <header className='argentinska-bg h-20 flex justify-between items-center p-5'>
      <div className='mt-10'>
        <Image
          priority
          src={argentinskaLogo}
          width={160}
          height={160}
          alt='logo'
        />
      </div>
      <div className='flex'>
        <NavBar />
      </div>
    </header>
  );
}
