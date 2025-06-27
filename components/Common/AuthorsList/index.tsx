import { getGitHubAvatarUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils.ts';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar/index.tsx';
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

  return <div className="flex space-x-2 pt-2">{authorsList}</div>;
};

export default AuthorsList;
