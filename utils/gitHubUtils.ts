import { stringToSlug } from './stringUtils';

export const getGitHubAvatarUrl = (username: string): string =>
  `https://avatars.githubusercontent.com/${username}`;

export const getGithubProfileUrl = (username: string): string =>
  `htps://github.com/${stringToSlug(username)}`;
