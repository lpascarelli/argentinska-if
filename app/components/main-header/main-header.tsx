import Image from 'next/image';

import NavBar from './nav-bar';

import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={`${classes.header} h-20 flex justify-between items-center p-5`}>
      <div className='mt-10'>
        <Image 
          src='/images/argentinska-logo.png'
          width={200}
          height={200} 
          alt='logo'
        />
      </div>
      <div className='flex'>
        <NavBar />
      </div>
    </header>
  );
}