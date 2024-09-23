'use client';
import Image from 'next/image';
import classNames from 'classnames';
import { useState, useEffect, useMemo } from 'react';
import styles from './index.module.css';
import type { FC } from 'react';

type ImagesProps = {
  images: Array<{
    src: string;
    alt?: string;
    ratio?: string;
  }>;
};

const Images: FC<ImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const MAX_IMAGES = images.length;

  // calculate the width and height of the image
  const { width, height } = useMemo(() => {
    const ratio = images[selectedImage].ratio || '16:9';
    const [ratioWidth, ratioHeight] = ratio.split(':').map(Number);

    return {
      width: (ratioWidth / ratioHeight) * 100,
      height: (ratioHeight / ratioWidth) * 100,
    };
  }, [images, selectedImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % MAX_IMAGES);
    }, 2000);

    return () => clearInterval(interval);
  }, [MAX_IMAGES]);

  return (
    <div>
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          key={i}
          className={classNames(styles.image, {
            [styles.selected]: i === selectedImage,
          })}
          src={images[i].src}
          width={width}
          height={height}
          hidden={i !== selectedImage}
          alt="Augustin"
          fetchPriority={i === selectedImage ? 'high' : 'low'}
          onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
        />
      ))}
    </div>
  );
};

export default Images;
