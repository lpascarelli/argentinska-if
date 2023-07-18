'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';

import NavLinks from './nav-links';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => setShowNav((prevState) => !prevState);

  return (
    <>
      <nav className='hidden md:flex text-white'>
        <NavLinks />
      </nav>
      {showNav ? (
        <HiX
          className='md:hidden text-white z-50 w-10 h-8'
          onClick={handleShowNav}
        />
      ) : (
        <GiHamburgerMenu
          className='md:hidden text-white w-10 h-8'
          onClick={handleShowNav}
        />
      )}
      <nav
        className={`argentinska-bg h-[100vh] fixed top-[0px] flex flex-col items-center w-full md:hidden duration-1000 text-white ${
          showNav ? 'right-[0px]' : 'right-[-100vw]'
        } `}
      >
        <NavLinks isMobile onHandleShowBar={handleShowNav} />
      </nav>
    </>
  );
}
