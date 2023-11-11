import { githubProfileAvatarUrl } from '../githubUtils';

describe('Github utils', () => {
  it('githubProfileAvatarUrl returns the correct URL', () => {
    expect(githubProfileAvatarUrl('octocat')).toBe(
      'https://avatars.githubusercontent.com/octocat'
    );
  });
});
