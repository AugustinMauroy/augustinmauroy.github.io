import { githubProfileAvatarUrl } from './gitHubUtils';

export const getAcronymFromString = (str: string) =>
  [...(str.trim().match(/\b(\w)/g) || 'NA')].join('').toUpperCase();

export const getAuthorUrl = (author: string) => {
  // parse something:"value" => ["something:", "value"] value can be a URL
  const data = author.split(':');

  // remove the starting and ending quotes to not break the URL
  const url = data
    .slice(1)
    .join(':')
    .replace(/^"(.*)"$/, '$1');
  if (data[0] === 'github') {
    return githubProfileAvatarUrl(url);
  } else if (data[0] === 'website') {
    return url;
  } else {
    return '';
  }
};
