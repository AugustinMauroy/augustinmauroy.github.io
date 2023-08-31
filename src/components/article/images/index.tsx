import Image from 'next/image';
import styles from './index.module.scss';
import type { FC } from 'react';

// image from mdx
type ImagesProps = {
	src?: string;
	alt?: string;
};

const Images: FC<ImagesProps> = ({ src, alt }) => (
	// in this case we can specify width and height
	// eslint-disable-next-line @next/next/no-img-element
	<img
		className={styles.image}
		src={src || '/static/placeholders-16-9.png'}
		alt={alt || 'image'}
	/>
);

export default Images;
