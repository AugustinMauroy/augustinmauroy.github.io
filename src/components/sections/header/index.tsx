import { useTranslations } from 'next-intl';
import Language from '@/components/common/languageSelector';
import ThemeSwitcher from '@/components/common/themeSwitcher';
import LocalizedLink from '@/components/i18n/localizedLink';
import styles from './index.module.css';
import type { FC } from 'react';

const Header: FC = () => {
  const t = useTranslations('components.sections.header');

  return (
    <header className={styles.header}>
      <LocalizedLink href="/" className="text-xl font-bold">
        Augustin M.
      </LocalizedLink>
      <div className={styles.links}>
        <ThemeSwitcher />
        <Language />
        <LocalizedLink href="/about" activeClassName={styles.active}>
          {t('about')}
        </LocalizedLink>
        <LocalizedLink href="/projects" activeClassName={styles.active}>
          {t('projects')}
        </LocalizedLink>
        <LocalizedLink href="/blog" activeClassName={styles.active}>
          {t('blog')}
        </LocalizedLink>
      </div>
    </header>
  );
};

export default Header;
