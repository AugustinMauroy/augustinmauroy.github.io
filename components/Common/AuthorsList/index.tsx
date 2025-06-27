import type { FC } from 'react';
import { getGitHubAvatarUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils.ts';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/index.tsx';

type AuthorsListProps = {
  // xxx, yyy, zzz
  authors: string;
};

const AuthorsList: FC<AuthorsListProps> = ({ authors }) => {
  const authorsList = authors.split(', ').map((author) => (
    <Avatar key={author}>
      <AvatarImage alt={author} src={getGitHubAvatarUrl(author)} />
      <AvatarFallback>{getAcronymFromString(author)}</AvatarFallback>
    </Avatar>
  ));

  return <div className="flex space-x-2 pt-2">{authorsList}</div>;
};

export default AuthorsList;
