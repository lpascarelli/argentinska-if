'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/app/components/ui/locale-switcher';
interface NavLinksProps {
  isMobile?: boolean;
}

export default function NavLinks({ isMobile }: NavLinksProps) {
  const t = useTranslations('NavLinks');

  const classes = isMobile
    ? 'flex flex-col mt-40 gap-5 text-2xl'
    : 'flex gap-5';

  return (
    <div className={`${classes}`}>
      <Link href='/'>{t('news')}</Link>
      <Link href='/'>{t('the-club')}</Link>
      <Link href='/'>{t('teams')}</Link>
      <Link href='/'>{t('shop')}</Link>
      <LocaleSwitcher />
    </div>
  );
}
