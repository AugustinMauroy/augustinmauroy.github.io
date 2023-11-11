'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import type { FC } from 'react';

const PICTURES_NUMBER = 3;

const Pictures: FC = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const changeImage = () => {
    const nextImage = currentImage === PICTURES_NUMBER ? 1 : currentImage + 1;
    setCurrentImage(nextImage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = currentImage === PICTURES_NUMBER ? 1 : currentImage + 1;
      setCurrentImage(nextImage);
    }, 20000); // 20 seconds in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <Image
      className={styles.pictures}
      src={`/static/images/me-${currentImage}.jpeg`}
      alt="picture of me"
      onClick={changeImage}
      width={384}
      height={384}
      quality={100}
      blurDataURL="author-placeholder.jpg"
      onError={() =>
        setCurrentImage(currentImage === PICTURES_NUMBER ? 1 : currentImage + 1)
      }
    />
  );
};

export default Pictures;
