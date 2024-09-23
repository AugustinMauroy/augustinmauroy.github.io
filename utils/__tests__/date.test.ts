import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { getAge } from '../date';

describe('getAge', () => {
  const mockDate = new Date('2023-10-10T00:00:00Z');

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should return 0 for a date that is today', () => {
    const today = new Date('2023-10-10T00:00:00Z');
    expect(getAge(today)).toBe(0);
  });

  it('should return 1 for a date that is exactly 1 year ago', () => {
    const oneYearAgo = new Date('2022-10-10T00:00:00Z');
    expect(getAge(oneYearAgo)).toBe(1);
  });

  it('should return 30 for a date that is exactly 30 years ago', () => {
    const thirtyYearsAgo = new Date('1993-10-10T00:00:00Z');
    expect(getAge(thirtyYearsAgo)).toBe(30);
  });

  it('should handle a date in the future gracefully', () => {
    const futureDate = new Date('2024-10-10T00:00:00Z');
    expect(getAge(futureDate)).toBe(-1);
  });
});
