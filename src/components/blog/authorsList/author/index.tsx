'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './index.module.scss';
import type { FC } from 'react';

type AthorProps = {
	githubUserName: string;
};

const Author: FC<AthorProps> = ({ githubUserName }) => {
	const githubLink = `https://github.com/${githubUserName}`;
	const githubImgLink = `https://github.com/${githubUserName}.png?size=240`;

	const intl = useIntl();
	const [authorImg, setAuthorImg] = useState(githubImgLink);

	const translation = intl.formatMessage(
		{ id: 'components.blog.authorsList.githubLinkLabel' },
		{ username: githubUserName },
	);

	return (
		<Link
			href={githubLink}
			aria-label={translation}
			key={githubUserName}
			target='_blank'
			rel='noopener noreferrer'
		>
			<Image
				className={styles.img}
				alt={githubUserName}
				src={authorImg}
				placeholder='blur'
				width={40}
				height={40}
				blurDataURL='/static/author-placeholder.jpg'
				onError={() => setAuthorImg('/static/author-placeholder.jpg')}
			/>
		</Link>
	);
};

export default Author;
