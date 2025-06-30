'use client';
import classNames from 'classnames';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

type ImagesProps = {
  images: Array<{
    src: string;
    alt?: string;
  }>;
};

const Images: FC<ImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const MAX_IMAGES = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
    }, 4000);

    return () => clearInterval(interval);
  }, [MAX_IMAGES]);

  return (
    <div
      className={classNames(
        'relative size-96 flex flex-col',
        'items-center justify-center md:items-end md:justify-end',
      )}
    >
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        // biome-ignore lint/performance/noImgElement: don't care we don't know size of images
        <img
          alt={images[i].alt || 'Image'}
          className={classNames(
            'absolute top-0 left-0 h-96 w-auto rounded-xl border-2 border-black object-cover shadow-neo-brutalism-black transition-opacity duration-500 dark:border-white dark:shadow-neo-brutalism-white ',
            {
              'opacity-0': i !== selectedImage,
              'opacity-100': i === selectedImage,
            },
          )}
          fetchPriority={i === selectedImage ? 'high' : 'low'}
          key={`${i}-text-with-images ${crypto.randomUUID()}`}
          src={images[i].src}
        />
      ))}
    </div>
  );
};

export default Images;
