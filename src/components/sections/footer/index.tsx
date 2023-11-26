import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import type { FC } from 'react';

const Header: FC = () => {
  const t = useTranslations('components.sections.footer');

  return (
    <footer className={styles.footer}>
      <p>{t('title')}</p>
    </footer>
  );
};

export default Header;
