'use client';

import { ChangeEvent, useTransition } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';

import Select from '@/components/ui/select';
import { LANGUAGES } from '@/constants/languages';
import { THECLUB } from '@/constants';

interface NavLinksProps {
  isMobile?: boolean;
  onHandleShowBar?: () => void;
}

export default function NavLinks({ isMobile, onHandleShowBar }: NavLinksProps) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('NavLinks');

  const theClub = Object.values(THECLUB) as string[];
  const classes = isMobile
    ? 'flex flex-col mt-40 gap-5 text-2xl'
    : 'flex gap-5';

  function closeSideBarHandler() {
    if (onHandleShowBar) {
      onHandleShowBar();
    }
  }

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    if (onHandleShowBar) {
      onHandleShowBar();
      setTimeout(() => {
        startTransition(() => {
          router.replace(pathname, { locale: nextLocale });
        });
      }, 1000);
    } else {
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    }
  }

  function handleTheClubChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    if (onHandleShowBar) {
      onHandleShowBar();
    }

    if (!theClub.includes(value) || value === THECLUB.TheClub) {
      return router.push('/', { locale });
    }

    return router.push(`/${value}`, { locale });
  }

  return (
    <div className={`${classes}`}>
      <Link href='/news' locale={locale} onClick={closeSideBarHandler}>
        {t('news')}
      </Link>
      <Select
        options={theClub}
        translationKey='TheClub'
        onSelectChange={handleTheClubChange}
      />
      <Link href='/teams' locale={locale} onClick={closeSideBarHandler}>
        {t('teams')}
      </Link>
      <Link href='/shop' locale={locale} onClick={closeSideBarHandler}>
        {t('shop')}
      </Link>
      <Select
        options={LANGUAGES}
        translationKey='Languages'
        defaultValue={locale}
        disabled={isPending}
        onSelectChange={handleLanguageChange}
      />
    </div>
  );
}
