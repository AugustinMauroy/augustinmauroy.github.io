import { githubProfileAvatarUrl } from '../gitHubUtils';

describe('Github utils', () => {
  it('githubProfileAvatarUrl returns the correct URL', () => {
    expect(githubProfileAvatarUrl('octocat')).toBe(
      'https://avatars.githubusercontent.com/octocat'
    );
  });
});
