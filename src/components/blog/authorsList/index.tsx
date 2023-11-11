import LocalizedMessage from '@/components/i18n/localizedMessage';
import Author from './author';
import styles from './index.module.css';
import type { FC } from 'react';

type AuthorsListProps = {
  authors: string[];
};

const AuthorsList: FC<AuthorsListProps> = ({ authors }) => (
  <div className={styles.container}>
    <strong>
      <LocalizedMessage
        id={
          authors.length > 1
            ? 'components.blog.authorsList.authors'
            : 'components.blog.authorsList.author'
        }
      />{' '}
    </strong>
    <div className={styles.authors}>
      {authors.map(author => (
        <Author key={author} githubUserName={author} />
      ))}
    </div>
  </div>
);

export default AuthorsList;
