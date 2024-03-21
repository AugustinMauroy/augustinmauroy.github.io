'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useMemo } from 'react';
import { getAcronymFromString } from '@/utils/stringUtils';
import Avatar from './Avatar';
import avatarstyles from './Avatar/index.module.css';
import styles from './index.module.css';
import type { FC } from 'react';

type AvatarGroupProps = {
  avatars: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
  limit?: number;
};

const AvatarGroup: FC<AvatarGroupProps> = ({ avatars, limit = 10 }) => {
  const [showMore, setShowMore] = useState(false);

  const renderAvatars = useMemo(
    () => avatars.slice(0, showMore ? avatars.length : limit),
    [showMore, avatars, limit]
  );

  return (
    <div className={styles.avatarGroup}>
      {renderAvatars.map((avatar, index) =>
        avatar.href ? (
          <Link href={avatar.href} key={index}>
            <Avatar src={avatar.src} alt={getAcronymFromString(avatar.alt)} />
          </Link>
        ) : (
          <Avatar
            src={avatar.src}
            alt={getAcronymFromString(avatar.alt)}
            key={index}
          />
        )
      )}

      {avatars.length > limit && (
        <span
          onClick={() => setShowMore(!showMore)}
          className={classNames(avatarstyles.avatarRoot, 'cursor-pointer')}
        >
          <span className={avatarstyles.avatar}>
            {`${showMore ? '-' : '+'}${avatars.length - limit}`}
          </span>
        </span>
      )}
    </div>
  );
};

export default AvatarGroup;
