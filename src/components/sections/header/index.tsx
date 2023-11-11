import Language from '@/components/common/languageSelector';
import ThemeSwitcher from '@/components/common/themeSwitcher';
import LocalizedLink from '@/components/i18n/localizedLink';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import styles from './index.module.css';
import type { FC } from 'react';

const Header: FC = () => (
  <header className={styles.header}>
    <LocalizedLink href="/">Augustin M.</LocalizedLink>
    <div className={styles.links}>
      <ThemeSwitcher />
      <Language />
      <LocalizedLink href="/about" activeClassName={styles.active}>
        <LocalizedMessage id="components.sections.header.about" />
      </LocalizedLink>
      <LocalizedLink href="/projects" activeClassName={styles.active}>
        <LocalizedMessage id="components.sections.header.projects" />
      </LocalizedLink>
      <LocalizedLink href="/blog" activeClassName={styles.active}>
        <LocalizedMessage id="components.sections.header.blog" />
      </LocalizedLink>
    </div>
  </header>
);

export default Header;
