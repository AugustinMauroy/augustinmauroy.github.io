'use client';
import Image from 'next/image';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import type { FC } from 'react';

const MAX_IMAGES = 4;

const Images: FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % MAX_IMAGES);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.images}>
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          key={i}
          className={classNames(styles.image, {
            [styles.selected]: i === selectedImage,
          })}
          src={`/static/hero-${i + 1}.webp`}
          width={320}
          height={320}
          alt="Augustin"
          fetchPriority={i === selectedImage ? 'high' : 'low'}
          onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
        />
      ))}
    </div>
  );
};

export default Images;
