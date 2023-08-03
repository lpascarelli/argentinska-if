'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/ui/locale-switcher';
interface NavLinksProps {
  isMobile?: boolean;
  onHandleShowBar?: () => void;
}

export default function NavLinks({ isMobile, onHandleShowBar }: NavLinksProps) {
  const t = useTranslations('NavLinks');

  const classes = isMobile
    ? 'flex flex-col mt-40 gap-5 text-2xl'
    : 'flex gap-5';

  const closeSideBarHandler = () => {
    if (onHandleShowBar) {
      onHandleShowBar();
    }
  };

  return (
    <div className={`${classes}`}>
      <Link href='/news' onClick={closeSideBarHandler}>
        {t('news')}
      </Link>
      <Link href='/the-club' onClick={closeSideBarHandler}>
        {t('the-club')}
      </Link>
      <Link href='/teams' onClick={closeSideBarHandler}>
        {t('teams')}
      </Link>
      <Link href='/shop' onClick={closeSideBarHandler}>
        {t('shop')}
      </Link>
      <LocaleSwitcher onHandleShowBar={onHandleShowBar} />
    </div>
  );
}
