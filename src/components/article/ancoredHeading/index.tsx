import Link from 'next/link';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type AnchorHeadingProps = PropsWithChildren<{
  level: HeadingLevel;
  id?: string;
}>;

const AncoredHeading: FC<AnchorHeadingProps> = ({ level, children }) => {
  const HeadingLevelTag = `h${level}` as any;

  if (children == null)
    throw new Error('children is required in AncoredHeading');

  const id = children.toString().toLowerCase().replace(/\s/g, '-');

  return (
    <Link href={`#${id}`} id={id} className={styles.link} scroll={false}>
      <HeadingLevelTag>{children}</HeadingLevelTag>
    </Link>
  );
};

export default AncoredHeading;
