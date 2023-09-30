import Image from 'next/image';
import LocalizedDate from '@/components/i18n/localizedDate';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import AuthorsList from '../authorsList';
import styles from './index.module.scss';
import type { FC } from 'react';
import type { BlogMetaData } from '@/types/blog';

const BlogHeader: FC<BlogMetaData> = ({
	title,
	description,
	date,
	authors,
	thumbnail,
}) => (
	<section className={styles.header}>
		<div className={styles.text}>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>
				<LocalizedMessage id='components.blog.header.posted' />:{' '}
				<time dateTime={date.toISOString()}>
					<LocalizedDate value={date} />
				</time>
			</p>
			<AuthorsList authors={authors} />
		</div>
		{thumbnail && (
			<Image
				src={`/static/${thumbnail}`}
				alt={title}
				height={169}
				width={300}
				className={styles.thumbnail}
			/>
		)}
	</section>
);

export default BlogHeader;
