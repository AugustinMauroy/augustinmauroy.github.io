import { getAcronymFromString } from '../stringUtils';

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
});
