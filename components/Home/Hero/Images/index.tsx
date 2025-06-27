'use client';
import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const MAX_IMAGES = 4;

const Images: FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          alt="Augustin"
          className={classNames(
            'size-80 rounded-full border-2 border-black object-cover shadow-neo-brutalism-xl-black transition-shadow hover:shadow-neo-brutalism-2xl-black dark:border-white dark:shadow-neo-brutalism-xl-white dark:hover:shadow-neo-brutalism-2xl-white',
            {
              block: i === selectedImage,
              hidden: i !== selectedImage,
            },
          )}
          fetchPriority={i === selectedImage ? 'high' : 'low'}
          height={320}
          key={`${i}-hero ${crypto.randomUUID()}`}
          onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
          src={`/static/hero-${i + 1}.webp`}
          width={320}
        />
      ))}
    </div>
  );
};

export default Images;
