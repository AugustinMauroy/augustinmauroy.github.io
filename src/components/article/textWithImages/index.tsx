'use client';
import Image from 'next/image';
import { useState, type FC, type PropsWithChildren, useEffect } from 'react';
import styles from './index.module.css';

type TextWithImagesProps = PropsWithChildren<{
  images: string[] | string;
  alt: string;
  ratio: '16:9' | '9:16';
}>;

const calculateRatio = (ratio: string): { width: number; height: number } => {
  const [width, height] = ratio.split(':');

  return {
    width: parseInt(width) * 30,
    height: parseInt(height) * 30,
  };
};

const TextWithImages: FC<TextWithImagesProps> = ({
  children,
  images,
  alt,
  ratio,
}) => {
  if (!images) throw new Error('No images provided');
  if (!ratio) throw new Error('No ratio provided');

  const [image, setImages] = useState<string>(
    typeof images === 'string' ? images : images[0]
  );

  const { width, height } = calculateRatio(ratio || '16:9');

  useEffect(() => {
    if (typeof images === 'string') return;
    const index = images.indexOf(image);
    const nextIndex = index + 1 === images.length ? 0 : index + 1;
    const timeout = setTimeout(() => {
      setImages(images[nextIndex]);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <section className={styles.container}>
      <div className={styles.text}>{children}</div>
      <Image
        className={styles.image}
        src={`/static/${image}`}
        alt={alt || 'Illustration Image'}
        onClick={() => {
          if (typeof images === 'string') return;
          const index = images.indexOf(image);
          const nextIndex = index + 1 === images.length ? 0 : index + 1;
          setImages(images[nextIndex]);
        }}
        width={width}
        height={height}
      />
    </section>
  );
};

export default TextWithImages;
