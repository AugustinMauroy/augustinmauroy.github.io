import LocalizedMessage from '@/components/i18n/localizedMessage';
import styles from './index.module.css';
import type { FC } from 'react';

const Header: FC = () => (
  <footer className={styles.footer}>
    <p>
      <LocalizedMessage id="component.sections.footer.title" />
    </p>
  </footer>
);

export default Header;
