'use client';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { ARGENTINSKA_FB, ARGENTINSKA_IG } from '@/constants/urls';

export default function Footer() {
  return (
    <footer className='mt-auto argentinska-bg text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <div className='flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between'>
        <div className='mr-12 hidden lg:block'>
          <span className='text-white'>
            Get connected with us on social networks:
          </span>
        </div>
        <div className='flex justify-center'>
          <a href={`${ARGENTINSKA_FB}`} className='mr-6' target='__blank'>
            <FaFacebook size={28} className='text-white' />
          </a>
          <a href={`${ARGENTINSKA_IG}`} className='mr-6' target='__blank'>
            <FaInstagram size={28} className='text-white' />
          </a>
        </div>
      </div>
      <div className='argentinska-bg p-6 text-center text-white'>
        <span>© 2023 Copyright: </span>
        <span className='font-semibold text-white'>Argentinska IF</span>
      </div>
    </footer>
  );
}
