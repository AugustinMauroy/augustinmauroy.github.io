import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

const Blockquote: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.blockquote}>{children}</div>
);

export default Blockquote;
