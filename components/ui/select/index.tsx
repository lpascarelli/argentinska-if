'use client';

import { ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';

interface SelectProps {
  options: string[];
  translationKey: string;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export default function Select({
  options,
  translationKey,
  onSelectChange,
  className,
  disabled,
  defaultValue,
}: SelectProps) {
  const t = useTranslations(translationKey);
  const styles = 'bg-transparent';

  return (
    <select
      className={`${styles} ${className}`}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onSelectChange}
    >
      {options.map((option, index) => (
        <option key={`${option}-${index}`} value={option}>
          {t(`${option}`)}
        </option>
      ))}
    </select>
  );
}
