import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { FaRss } from 'react-icons/fa6';
import BlogCard from '@/components/blog/blogcard';
import { getBlogMetadata } from '@/lib/getcontent';
import type { BlogParams } from '@/types/blog';
import styles from './page.module.css';
import type { Metadata } from 'next';
import type { FC } from 'react';

type PageProps = {
  params: BlogParams;
};

const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata.blog');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const metaDataBlog = await getBlogMetadata(params.locale);
  const t = await getTranslations('app.blog');

  return (
    <div className={styles.page}>
      <header>
        <h1>{t('title')}</h1>
        <Link href="/feed/blog.xml">
          <FaRss aria-label="RSS feed" />
        </Link>
      </header>
      {metaDataBlog.length === 0 ? (
        t('empty')
      ) : (
        <>
          <section>
            <h2>{t('recents')}</h2>
            <div className={styles.cardContainer}>
              {metaDataBlog.map((data, index) => {
                if (index < 3) {
                  return (
                    <BlogCard
                      key={data.slug}
                      slug={data.slug}
                      title={data.title}
                      lang={data.lang}
                      thumbnail={data.thumbnail}
                    />
                  );
                }
              })}
            </div>
          </section>
          {metaDataBlog.length > 3 && (
            <section>
              <h2>{t('olders')}</h2>
              <div className={styles.cardContainer}>
                {metaDataBlog.map((data, index) => {
                  if (index > 2) {
                    return (
                      <div key={data.slug}>
                        <p>{data.slug}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export { generateMetadata };
export default Page;
