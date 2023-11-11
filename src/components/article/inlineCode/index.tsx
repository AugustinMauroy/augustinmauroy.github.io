import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

const InlineCode: FC<PropsWithChildren> = ({ children }) => (
  <code className={styles.inlineCode}>{children}</code>
);

export default InlineCode;
