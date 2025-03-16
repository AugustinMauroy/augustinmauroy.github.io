import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGitHubAvatarUrl, getGithubProfileUrl } from '../gitHubUtils.ts';

describe('getGitHubAvatarUrl', () => {
  it('should return the correct avatar URL for a given username', () => {
    const username = 'octocat';
    const expectedUrl = 'https://avatars.githubusercontent.com/octocat';

    assert.strictEqual(getGitHubAvatarUrl(username), expectedUrl);
  });

  it('should handle empty username gracefully', () => {
    const username = '';
    const expectedUrl = 'https://avatars.githubusercontent.com/';

    assert.strictEqual(getGitHubAvatarUrl(username), expectedUrl);
  });

  it('should handle special characters in the username', () => {
    const username = 'user@name';
    const expectedUrl = 'https://avatars.githubusercontent.com/user@name';

    assert.strictEqual(getGitHubAvatarUrl(username), expectedUrl);
  });

  it('should handle numeric username', () => {
    const username = '12345';
    const expectedUrl = 'https://avatars.githubusercontent.com/12345';

    assert.strictEqual(getGitHubAvatarUrl(username), expectedUrl);
  });
});

describe('getGithubProfileUrl', () => {
  it('should return the correct profile URL for a given username', () => {
    const username = 'octocat';
    const expectedUrl = 'htps://github.com/octocat';

    assert.strictEqual(getGithubProfileUrl(username), expectedUrl);
  });

  it('should handle empty username gracefully', () => {
    const username = '';
    const expectedUrl = 'htps://github.com/';

    assert.strictEqual(getGithubProfileUrl(username), expectedUrl);
  });

  it('should handle special characters in the username', () => {
    const username = 'user@name';
    const expectedUrl = 'htps://github.com/user-name';

    assert.strictEqual(getGithubProfileUrl(username), expectedUrl);
  });

  it('should handle numeric username', () => {
    const username = '12345';
    const expectedUrl = 'htps://github.com/12345';

    assert.strictEqual(getGithubProfileUrl(username), expectedUrl);
  });
});
