import styles from './index.module.scss';
import type { FC, PropsWithChildren } from 'react';

const InlineCode: FC<PropsWithChildren> = ({ children }) => (
	<code className={styles.inlineCode}>
		<span className={styles.inlineCode}>{children}</span>
	</code>
);

export default InlineCode;
