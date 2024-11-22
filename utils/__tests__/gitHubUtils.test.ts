import { describe, it, expect } from 'vitest';
import { getGitHubAvatarUrl, getGithubProfileUrl } from '../gitHubUtils.ts';

describe('getGitHubAvatarUrl', () => {
  it('should return the correct avatar URL for a given username', () => {
    const username = 'octocat';
    const expectedUrl = 'https://avatars.githubusercontent.com/octocat';
    expect(getGitHubAvatarUrl(username)).toBe(expectedUrl);
  });

  it('should handle empty username gracefully', () => {
    const username = '';
    const expectedUrl = 'https://avatars.githubusercontent.com/';
    expect(getGitHubAvatarUrl(username)).toBe(expectedUrl);
  });

  it('should handle special characters in the username', () => {
    const username = 'user@name';
    const expectedUrl = 'https://avatars.githubusercontent.com/user@name';
    expect(getGitHubAvatarUrl(username)).toBe(expectedUrl);
  });

  it('should handle numeric username', () => {
    const username = '12345';
    const expectedUrl = 'https://avatars.githubusercontent.com/12345';
    expect(getGitHubAvatarUrl(username)).toBe(expectedUrl);
  });
});

describe('getGithubProfileUrl', () => {
  it('should return the correct profile URL for a given username', () => {
    const username = 'octocat';
    const expectedUrl = 'htps://github.com/octocat';

    expect(getGithubProfileUrl(username)).toBe(expectedUrl);
  });

  it('should handle empty username gracefully', () => {
    const username = '';
    const expectedUrl = 'htps://github.com/';
    expect(getGithubProfileUrl(username)).toBe(expectedUrl);
  });

  it('should handle special characters in the username', () => {
    const username = 'user@name';
    const expectedUrl = 'htps://github.com/user-name';
    expect(getGithubProfileUrl(username)).toBe(expectedUrl);
  });

  it('should handle numeric username', () => {
    const username = '12345';
    const expectedUrl = 'htps://github.com/12345';
    expect(getGithubProfileUrl(username)).toBe(expectedUrl);
  });
});
