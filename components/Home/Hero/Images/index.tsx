'use client';
import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const MAX_IMAGES = 3;

const Images: FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(MAX_IMAGES).fill(false),
  );

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const promises = Array.from({ length: MAX_IMAGES }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            setImagesLoaded((prev) => {
              const newLoaded = [...prev];
              newLoaded[i] = true;
              return newLoaded;
            });
            resolve();
          };
          img.onerror = () => resolve(); // Still resolve on error to not block
          img.src = `/static/hero-${i + 1}.jpeg`;
        });
      });
      await Promise.all(promises);
    };

    preloadImages();

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative size-80">
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          alt="Augustin"
          className={classNames(
            'absolute inset-0 size-80 rounded-full border-2 border-black object-cover shadow-neo-brutalism-xl-black transition-all duration-500 hover:shadow-neo-brutalism-2xl-black dark:border-white dark:shadow-neo-brutalism-xl-white dark:hover:shadow-neo-brutalism-2xl-white',
            {
              'opacity-0 z-0': i !== selectedImage || !imagesLoaded[i],
              'opacity-100 z-10': i === selectedImage && imagesLoaded[i],
            },
          )}
          height={320}
          key={`${i}-hero`}
          loading="eager"
          onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
          priority={i === 0}
          src={`/static/hero-${i + 1}.jpeg`}
          width={320}
        />
      ))}
    </div>
  );
};

export default Images;
