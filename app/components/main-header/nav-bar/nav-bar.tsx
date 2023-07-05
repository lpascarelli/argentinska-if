'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import NavLinks from './nav-links';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => setShowNav((prevState) => !prevState);

  return (
    <>
      <nav className='hidden md:flex gap-5 text-white'>
        <NavLinks />
      </nav>
      {showNav ? (
        <XMarkIcon
          className='md:hidden text-white z-50 w-10'
          onClick={handleShowNav}
        />
      ) : (
        <Bars3Icon
          className='md:hidden text-white w-10'
          onClick={handleShowNav}
        />
      )}
      <nav
        className={`argentinska-bg h-[100vh] fixed top-[0px] flex flex-col items-center w-full gap-5 md:hidden bg-white z-40 duration-1000 text-white ${
          showNav ? 'right-[0px]' : 'right-[-100vw]'
        } `}
      >
        <NavLinks isMobile />
      </nav>
    </>
  );
}
