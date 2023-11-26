import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cloneElement } from 'react';
import {
  FaGithub,
  FaTwitch,
  FaXTwitter,
  FaMastodon,
  FaLinkedin,
} from 'react-icons/fa6';
import styles from './index.module.css';
import type { FC, ReactElement } from 'react';

const iconify = (icon: ReactElement, title: string): ReactElement =>
  cloneElement(icon, {
    alt: title,
    ariaLabel: title,
    title,
  });

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
    icon: <FaXTwitter />,
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

const FindMe: FC = () => {
  const t = useTranslations('components.home.findme');

  return (
    <section className={styles.findMe}>
      <h2>{t('title')}</h2>
      <div className={styles.links}>
        {metaData.map(({ icon, link, title }) => (
          <Link
            key={title}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={title}
          >
            {iconify(icon, title)}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default FindMe;
