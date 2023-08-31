import Link from 'next/link';
import {
	FaGithub,
	FaTwitch,
	FaTwitter,
	FaMastodon,
	FaLinkedin,
} from 'react-icons/fa';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import styles from './index.module.scss';
import type { FC } from 'react';

const metaData = [
	{
		icon: <FaGithub />,
		link: 'https://github.com/AugustinMauroy',
		title: 'AugustinMauroy',
	},
	{
		icon: <FaTwitch />,
		link: 'https://www.twitch.tv/augustin_ma',
		title: 'augustin_ma',
	},
	{
		icon: <FaTwitter />,
		link: 'https://twitter.com/_August1_',
		title: '@_August1_',
	},
	{
		icon: <FaMastodon />,
		link: 'https://mastodon.social/@augustin_mauroy',
		title: '@augustin_mauroy@mastodon.social',
	},
	{
		icon: <FaLinkedin />,
		link: 'https://www.linkedin.com/in/augustin-mauroy/',
		title: 'Augustin Mauroy',
	},
];

const FindMe: FC = () => (
	<section className={styles.findMe}>
		<h2>
			<LocalizedMessage id='components.home.findme.title' />
		</h2>
		<div className={styles.links}>
			{metaData.map(({ icon, link, title }) => (
				<Link
					key={title}
					className={styles.link}
					href={link}
					rel='noopener noreferrer'
					target='_blank'
				>
					{icon}
					{title}
				</Link>
			))}
		</div>
	</section>
);

export default FindMe;
