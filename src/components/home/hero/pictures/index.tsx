'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import hero_bg from './hero-bg.svg';
import styles from './index.module.css';
import type { FC } from 'react';

const PICTURES_NUMBER = 4;

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
    <div className={styles.container}>
      <Image
        className={styles.pictures}
        src={`/static/images/me-${currentImage}.webp`}
        alt="picture of me"
        onClick={changeImage}
        width={384}
        height={384}
        quality={100}
        onError={() =>
          setCurrentImage(
            currentImage === PICTURES_NUMBER ? 1 : currentImage + 1
          )
        }
      />
      <Image
        className={styles.background}
        src={hero_bg}
        alt="hero background"
        width={384}
        height={384}
        quality={100}
      />
    </div>
  );
};

export default Pictures;
