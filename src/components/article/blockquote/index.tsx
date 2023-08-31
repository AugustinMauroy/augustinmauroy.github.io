import styles from './index.module.scss';
import type { FC, PropsWithChildren } from 'react';

const Blockquote: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.blockquote}>{children}</div>
);

export default Blockquote;
