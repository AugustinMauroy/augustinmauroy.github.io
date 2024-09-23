import { getGitHubAvatarUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import styles from './index.module.css';
import type { FC } from 'react';

type AuthorsListProps = {
  // xxx, yyy, zzz
  authors: string;
};

const AuthorsList: FC<AuthorsListProps> = ({ authors }) => {
  const authorsList = authors.split(', ').map(author => (
    <Avatar key={author}>
      <AvatarImage src={getGitHubAvatarUrl(author)} alt={author} />
      <AvatarFallback>{getAcronymFromString(author)}</AvatarFallback>
    </Avatar>
  ));

  return <div className={styles.wrapper}>{authorsList}</div>;
};

export default AuthorsList;
