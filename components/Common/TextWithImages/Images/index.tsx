'use client';
import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';

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
      height: (ratioHeight / ratioWidth) * 100,
      width: (ratioWidth / ratioHeight) * 100,
    };
  }, [images, selectedImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
    }, 2000);

    return () => clearInterval(interval);
  }, [MAX_IMAGES]);

  return (
    <div>
      {Array.from({ length: MAX_IMAGES }, (_, i) => (
        <Image
          alt="Augustin"
          className={classNames(
            'h-auto w-80 rounded-xl border-2 border-black object-cover shadow-neo-brutalism-black transition-shadow hover:shadow-neo-brutalism-xl-black dark:border-white dark:shadow-neo-brutalism-white dark:hover:shadow-neo-brutalism-xl-white',
            {
              block: i === selectedImage,
              hidden: i !== selectedImage,
            },
          )}
          fetchPriority={i === selectedImage ? 'high' : 'low'}
          height={height}
          hidden={i !== selectedImage}
          key={`${i}-text-with-images ${crypto.randomUUID()}`}
          onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
          src={images[i].src}
          width={width}
        />
      ))}
    </div>
  );
};

export default Images;
