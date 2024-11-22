import Images from './Images/index.tsx';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type TextWithImagesProps = {
  description: ReactNode;
  images: Array<{
    src: string;
    alt?: string;
    ratio?: string;
  }>;
};

const TextWithImages: FC<TextWithImagesProps> = ({ description, images }) => (
  <section className={styles.container}>
    <div className={styles.content}>{description}</div>
    <Images images={images} />
  </section>
);

export default TextWithImages;
