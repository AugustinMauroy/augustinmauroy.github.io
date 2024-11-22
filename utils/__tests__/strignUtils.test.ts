import { describe, it, expect } from 'vitest';
import { getAcronymFromString, stringToSlug } from '../stringUtils.ts';

describe('getAcronymFromString', () => {
  it('should return the correct acronym for a multi-word string', () => {
    const input = 'Hyper Text Markup Language';
    const expected = 'HTML';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle a single word string', () => {
    const input = 'JavaScript';
    const expected = 'J';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expected = '';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle a string with leading and trailing whitespace', () => {
    const input = '   Central Processing Unit   ';
    const expected = 'CPU';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle a string with mixed case', () => {
    const input = 'hyper text MARKUP language';
    const expected = 'HTML';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle a string with special characters', () => {
    const input = 'Hyper-Text Markup Language';
    const expected = 'HTML';
    expect(getAcronymFromString(input)).toBe(expected);
  });

  it('should handle a string with numbers', () => {
    const input = '123 Hyper Text Markup Language';
    const expected = '1HTML';
    expect(getAcronymFromString(input)).toBe(expected);
  });
});

describe('stringToSlug', () => {
  it('should return the correct slug for a multi-word string', () => {
    const input = 'Hyper Text Markup Language';
    const expected = 'hyper-text-markup-language';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle a single word string', () => {
    const input = 'JavaScript';
    const expected = 'javascript';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expected = '';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle a string with leading and trailing whitespace', () => {
    const input = '   Central Processing Unit   ';
    const expected = 'central-processing-unit';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle a string with mixed case', () => {
    const input = 'hyper text MARKUP language';
    const expected = 'hyper-text-markup-language';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle a string with special characters', () => {
    const input = 'Hyper-Text Markup Language';
    const expected = 'hyper-text-markup-language';
    expect(stringToSlug(input)).toBe(expected);
  });

  it('should handle a string with numbers', () => {
    const input = '123 Hyper Text Markup Language';
    const expected = '123-hyper-text-markup-language';
    expect(stringToSlug(input)).toBe(expected);
  });
});
