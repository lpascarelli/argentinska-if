import Image from 'next/image';

import NavBar from './nav-bar/nav-bar';

export default function MainHeader() {
  return (
    <header className='argentinska-bg h-20 flex justify-between items-center p-5'>
      <div className='mt-10'>
        <Image
          src='/images/argentinska-logo.png'
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
