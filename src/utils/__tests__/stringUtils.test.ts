import { getAcronymFromString, getAuthorUrl } from '../stringUtils';

describe('String utils', () => {
  // getAcronymFromString
  it('getAcronymFromString returns the correct acronym', () => {
    expect(getAcronymFromString('John Doe')).toBe('JD');
  });

  it('getAcronymFromString returns the correct acronym for a single word', () => {
    expect(getAcronymFromString('John')).toBe('J');
  });

  it('getAcronymFromString if the string is empty, it returns NA', () => {
    expect(getAcronymFromString('')).toBe('NA');
  });

  // getAuthorUrl
  it('getAuthorUrl returns the correct URL for a github profile', () => {
    expect(getAuthorUrl('github:"AugustinMauroy"')).toBe(
      'https://avatars.githubusercontent.com/AugustinMauroy'
    );
  });
  it('getAuthorUrl returns the correct URL for a website', () => {
    expect(getAuthorUrl('website:"https://augustinmauroy.github.io"')).toBe(
      'https://augustinmauroy.github.io'
    );
  });
});
