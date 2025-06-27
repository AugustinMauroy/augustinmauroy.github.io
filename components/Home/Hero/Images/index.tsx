'use client';
import Image from 'next/image';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
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
    <div>
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          key={i}
          className={classNames(
            'size-80 rounded-full border-2 border-black object-cover shadow-neo-brutalism-xl-black transition-shadow dark:border-white dark:shadow-neo-brutalism-xl-white hover:shadow-neo-brutalism-2xl-black dark:hover:shadow-neo-brutalism-2xl-white',
            {
              hidden: i !== selectedImage,
              block: i === selectedImage,
            }
          )}
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
