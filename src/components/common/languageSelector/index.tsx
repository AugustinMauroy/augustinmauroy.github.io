'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FaLanguage } from 'react-icons/fa6';
import { availableLocales } from '@/utils/i18n';
import Dropdown from '../dropDown';
import type { FC } from 'react';

const Language: FC = () => {
  const { locale } = useParams();
  const pathname = usePathname();
  const rooter = useRouter();
  const t = useTranslations();

  const options: string[] = availableLocales.map(locale => {
    return locale.localName;
  });

  const currentLang = availableLocales.find(lang => {
    return lang.code === locale;
  });

  const getCode = (localName: string) => {
    return availableLocales.find(locale => {
      return locale.localName === localName;
    });
  };

  return (
    <Dropdown
      title={
        <FaLanguage aria-label={t('components.common.languageSelector')} />
      }
      options={options}
      activeItem={currentLang?.localName}
      onItemClick={(item: string) => {
        const code = getCode(item)?.code;
        const currentPath = pathname.split('/').slice(2).join('/');
        if (code) {
          rooter.push(`/${code}/${currentPath}`);
        }
      }}
    />
  );
};

export default Language;
