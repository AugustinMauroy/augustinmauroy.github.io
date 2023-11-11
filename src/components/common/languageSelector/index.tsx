'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { FaLanguage } from 'react-icons/fa6';
import { useIntl } from 'react-intl';
import { availableLocales } from '@/utils/i18n';
import Dropdown from '../dropDown';
import type { FC } from 'react';

const Language: FC = () => {
  const { lang } = useParams();
  const pathname = usePathname();
  const rooter = useRouter();
  const intl = useIntl();

  const options: string[] = availableLocales().map(locale => {
    return locale.localName;
  });

  const currentLang = availableLocales().find(locale => {
    return locale.code === lang;
  });

  const getCode = (localName: string) => {
    return availableLocales().find(locale => {
      return locale.localName === localName;
    });
  };

  return (
    <Dropdown
      title={
        <FaLanguage
          aria-label={intl.formatMessage({
            id: 'components.common.languageSelector.language',
          })}
        />
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
