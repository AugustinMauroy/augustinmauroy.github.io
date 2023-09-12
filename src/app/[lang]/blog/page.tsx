import Link from 'next/link';
import { FaRss } from 'react-icons/fa6';
import { getBlogMetadata } from '@/lib/getcontent';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import BlogCard from '@/components/blog/blogcard';
import styles from './page.module.scss';
import type { FC } from 'react';
import type { BlogParams } from '@/types/blog';

type PageProps = {
	params: BlogParams;
};

const metadata = {
	title: 'Blog',
	description: 'My blog',
};

const Page: FC<PageProps> = async ({ params }) => {
	const metaDataBlog = await getBlogMetadata(params.lang);
	return (
		<div className={styles.container}>
			<header>
				<h1>
					<LocalizedMessage id='app.blog.tilte' />
				</h1>
				<Link href='/feed/blog.xml' passHref>
					<FaRss />
				</Link>
			</header>
			{metaDataBlog.length === 0 ? (
				<LocalizedMessage id='app.blog.empty' />
			) : (
				<>
					<section>
						<h2>
							<LocalizedMessage id='app.blog.recents' />
						</h2>
						<div className={styles.cardContainer}>
							{metaDataBlog.map((data, index) => {
								if (index < 3) {
									return (
										<BlogCard
											key={data.slug}
											slug={data.slug}
											title={data.title}
											lang={params.lang}
											thumbnail={data.thumbnail}
										/>
									);
								}
							})}
						</div>
					</section>
					{metaDataBlog.length > 3 && (
						<section>
							<h2>
								<LocalizedMessage id='app.blog.olders' />
							</h2>
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

export { metadata };
export default Page;
