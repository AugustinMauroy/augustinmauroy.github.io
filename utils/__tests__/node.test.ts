import { describe, it, expect } from 'vitest';
import { isNodeError } from '../node';

describe('isNodeError', () => {
  it('should return true for a NodeJS.ErrnoException', () => {
    const error = {
      code: 'ENOENT',
      errno: -2,
      syscall: 'open',
      path: '/some/path',
      message: 'File not found',
    };
    expect(isNodeError(error)).toBe(true);
  });

  it('should return false for a non-NodeJS.ErrnoException object', () => {
    const error = {
      message: 'Something went wrong',
      stack: 'Error: Something went wrong\n    at ...',
    };
    expect(isNodeError(error)).toBe(false);
  });

  it('should return false for a null value', () => {
    const error = null;
    expect(isNodeError(error)).toBe(false);
  });

  it('should return false for a non-object value', () => {
    const error = 'An error occurred';
    expect(isNodeError(error)).toBe(false);
  });

  it('should return false for an object without a code property', () => {
    const error = {
      message: 'Something went wrong',
    };
    expect(isNodeError(error)).toBe(false);
  });

  it('should return false for an object with a non-string code property', () => {
    const error = {
      code: 123,
      message: 'Something went wrong',
    };
    expect(isNodeError(error)).toBe(false);
  });
});
