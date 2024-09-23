'use client';
import { useTranslations } from 'next-intl';
import LocalizedLink from '~/components/Common/LocalizedLink';
import { ActiveLink } from '~/components/Common/ActiveLink';
import LanguageSelector from '~/components/Common/LanguageSelector';
import styles from './index.module.css';
import type { FC } from 'react';

const RIGHT_LINKS = [
  {
    href: '/about',
  },
  {
    href: '/projects',
  },
  {
    href: '/blog',
  },
];

const TopNav: FC = () => {
  const t = useTranslations('components.sections.topNav');

  return (
    <nav className={styles.topNav}>
      <LocalizedLink href="/" className={styles.home}>
        Augustin M.
      </LocalizedLink>
      <ul className={styles.rightLinks}>
        <li>
          <LanguageSelector />
        </li>
        {RIGHT_LINKS.map(item => (
          <li key={item.href}>
            <ActiveLink href={item.href} activeClassName={styles.active}>
              {t(item.href.replace('/', ''))}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
