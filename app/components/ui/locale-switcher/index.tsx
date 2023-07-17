'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';
import { LANGUAGES } from '@/app/constants/languages';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={`text-white ${
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      }`}
    >
      <select
        className='bg-transparent'
        defaultValue={locale}
        disabled={isPending}
        onChange={handleLanguageChange}
      >
        {LANGUAGES.map((selectedLanguage) => (
          <option key={selectedLanguage} value={selectedLanguage}>
            {t(`${selectedLanguage}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
