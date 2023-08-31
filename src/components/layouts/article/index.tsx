import styles from './index.module.scss';
import type { FC, PropsWithChildren } from 'react';

type ArticleLayoutProps = PropsWithChildren<{
	title: string;
	description: string;
}>;

const ArticleLayout: FC<ArticleLayoutProps> = ({
	title,
	description,
	children,
}) => (
	<div className={styles.article}>
		<section>
			<h1>{title}</h1>
			<p>{description}</p>
		</section>
		<article>{children}</article>
	</div>
);

export default ArticleLayout;
