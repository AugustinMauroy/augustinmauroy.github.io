'use client';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Dropdown from '~/components/Common/Dropdown';
import { availableLocales } from '~/lib/i18n/config.ts';
import type { FC } from 'react';

const LanguageSelector: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('components.common.languageSelector');
  const activeLocale = availableLocales.find(l => l.code === locale);

  const handleLocaleChange = (newLocaleName: string) => {
    const newLocale = availableLocales.find(l => l.localName === newLocaleName);
    if (!newLocale) return;

    // Simply replace the first segment (current locale) with the new locale
    const segments = pathname.split('/');
    segments[1] = newLocale.code;
    const newPath = segments.join('/') || '/';

    router.push(newPath);
  };

  return (
    <Dropdown
      trigger={<LanguageIcon aria-label={t('ariaLabel')} />}
      triggerAriaLabel={t('ariaLabel')}
      options={availableLocales.map(locale => locale.localName)}
      activeOption={activeLocale?.localName}
      onOptionSelect={handleLocaleChange}
    />
  );
};

export default LanguageSelector;
