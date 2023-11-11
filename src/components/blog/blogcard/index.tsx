'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';
import type { FC } from 'react';

type BlogCardProps = {
  title: string;
  thumbnail?: string;
  slug: string;
  lang: string;
};

const BlogCard: FC<BlogCardProps> = ({ title, thumbnail, slug, lang }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(
    thumbnail ? `/static/${thumbnail}` : '/static/blog-thumbnail.svg'
  );

  return (
    <div className={styles.card}>
      <Image
        src={thumbnailUrl}
        alt={title}
        // 19:9 aspect ratio
        width={2000}
        height={1060}
        quality={100}
        onError={() => setThumbnailUrl('/static/blog-thumbnail.svg')}
      />
      <Link href={`/${lang}/blog/${slug}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default BlogCard;
