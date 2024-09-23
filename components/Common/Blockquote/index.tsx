import styles from './index.module.css';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

type BlockquoteProps = ComponentProps<'blockquote'>;

const Blockquote: FC<PropsWithChildren<BlockquoteProps>> = ({ children }) => (
  <blockquote className={styles.wrapper}>{children}</blockquote>
);

export default Blockquote;
