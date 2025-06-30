import type { FC, ReactNode } from 'react';
import Images from './Images/index.tsx';

type TextWithImagesProps = {
  description: ReactNode;
  images: Array<{
    src: string;
    alt?: string;
  }>;
};

const TextWithImages: FC<TextWithImagesProps> = ({ description, images }) => (
  <section className="my-4 flex flex-row flex-wrap justify-between gap-4">
    <div className="my-auto h-full w-1/2">{description}</div>
    <Images images={images} />
  </section>
);

export default TextWithImages;
