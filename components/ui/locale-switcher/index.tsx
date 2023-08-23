'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';

import Select from '@/components/ui/select';
import { LANGUAGES } from '@/constants/languages';

interface LocaleSwitcherProps {
  onHandleShowBar?: () => void;
}

export default function LocaleSwitcher({
  onHandleShowBar,
}: LocaleSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <Select
      options={LANGUAGES}
      translationKey='LocaleSwitcher'
      defaultValue={locale}
      disabled={isPending}
      onSelectChange={handleLanguageChange}
    />
  );
}
