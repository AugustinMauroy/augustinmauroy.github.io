'use client';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Dropdown from '~/components/Common/Dropdown';
import { availableLocales } from '~/lib/i18n/config.ts';

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useParams().locale ?? 'en';
  const t = useTranslations('components.common.languageSelector');

  const handleLocaleChange = (newLocale: string) => {
    const newLocaleCode = availableLocales.find(
      locale => locale.name === newLocale
    )?.code;
    const url =
      pathname === '/'
        ? `/${newLocaleCode}`
        : pathname.replace(`/${locale}`, `/${newLocaleCode}`);
    router.push(url);
  };

  return (
    <Dropdown
      trigger={<LanguageIcon aria-label={t('ariaLabel')} />}
      triggerAriaLabel={t('ariaLabel')}
      options={availableLocales.map(locale => locale.name)}
      activeOption={locale[0]}
      onOptionSelect={handleLocaleChange}
    />
  );
};

export default LanguageSelector;
