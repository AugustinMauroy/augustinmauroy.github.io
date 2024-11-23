import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getAcronymFromString, stringToSlug } from '../stringUtils.ts';

describe('getAcronymFromString', () => {
  it('should return the correct acronym for a multi-word string', () => {
    const input = 'Hyper Text Markup Language';
    const expected = 'HTML';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle a single word string', () => {
    const input = 'JavaScript';
    const expected = 'J';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expected = '';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle a string with leading and trailing whitespace', () => {
    const input = '   Central Processing Unit   ';
    const expected = 'CPU';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle a string with mixed case', () => {
    const input = 'hyper text MARKUP language';
    const expected = 'HTML';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle a string with special characters', () => {
    const input = 'Hyper-Text Markup Language';
    const expected = 'HTML';

    assert.strictEqual(getAcronymFromString(input), expected);
  });

  it('should handle a string with numbers', () => {
    const input = '123 Hyper Text Markup Language';
    const expected = '1HTML';

    assert.strictEqual(getAcronymFromString(input), expected);
  });
});

describe('stringToSlug', () => {
  it('should return the correct slug for a multi-word string', () => {
    const input = 'Hyper Text Markup Language';
    const expected = 'hyper-text-markup-language';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle a single word string', () => {
    const input = 'JavaScript';
    const expected = 'javascript';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expected = '';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle a string with leading and trailing whitespace', () => {
    const input = '   Central Processing Unit   ';
    const expected = 'central-processing-unit';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle a string with mixed case', () => {
    const input = 'hyper text MARKUP language';
    const expected = 'hyper-text-markup-language';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle a string with special characters', () => {
    const input = 'Hyper-Text Markup Language';
    const expected = 'hyper-text-markup-language';

    assert.strictEqual(stringToSlug(input), expected);
  });

  it('should handle a string with numbers', () => {
    const input = '123 Hyper Text Markup Language';
    const expected = '123-hyper-text-markup-language';

    assert.strictEqual(stringToSlug(input), expected);
  });
});
