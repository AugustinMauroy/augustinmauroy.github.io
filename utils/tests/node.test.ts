import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isNodeError } from '../node.ts';

describe('isNodeError', () => {
  it('should return true for a NodeJS.ErrnoException', () => {
    const error = {
      code: 'ENOENT',
      errno: -2,
      message: 'File not found',
      path: '/some/path',
      syscall: 'open',
    };

    assert.strictEqual(isNodeError(error), true);
  });

  it('should return false for a non-NodeJS.ErrnoException object', () => {
    const error = {
      message: 'Something went wrong',
      stack: 'Error: Something went wrong\n    at ...',
    };

    assert.strictEqual(isNodeError(error), false);
  });

  it('should return false for a null value', () => {
    const error = null;

    assert.strictEqual(isNodeError(error), false);
  });

  it('should return false for a non-object value', () => {
    const error = 'An error occurred';

    assert.strictEqual(isNodeError(error), false);
  });

  it('should return false for an object without a code property', () => {
    const error = {
      message: 'Something went wrong',
    };

    assert.strictEqual(isNodeError(error), false);
  });

  it('should return false for an object with a non-string code property', () => {
    const error = {
      code: 123,
      message: 'Something went wrong',
    };

    assert.strictEqual(isNodeError(error), false);
  });
});
