import { vi, describe, it, expect, beforeAll, afterAll } from 'vitest';
import { isInRange, isToday, isBirthday } from '../date.ts';

describe('isInRange', () => {
  it('should return true if the date is within the range', () => {
    expect(isInRange('2023-10-10', '2023-10-01', '2023-10-20')).toBe(true);
  });

  it('should return false if the date is before the range', () => {
    expect(isInRange('2023-09-30', '2023-10-01', '2023-10-20')).toBe(false);
  });

  it('should return false if the date is after the range', () => {
    expect(isInRange('2023-10-21', '2023-10-01', '2023-10-20')).toBe(false);
  });

  it('should return true if the date is exactly the start date', () => {
    expect(isInRange('2023-10-01', '2023-10-01', '2023-10-20')).toBe(true);
  });

  it('should return true if the date is exactly the end date', () => {
    expect(isInRange('2023-10-20', '2023-10-01', '2023-10-20')).toBe(true);
  });
});

describe('isToday', () => {
  const mockDate = new Date('2023-10-10T00:00:00Z');

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should return true if the date is today', () => {
    expect(isToday('2023-10-10')).toBe(true);
  });

  it('should return false if the date is not today', () => {
    expect(isToday('2023-10-09')).toBe(false);
  });
});

describe('isBirthday', () => {
  const mockDate = new Date('2023-10-10T00:00:00Z');

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should return true if today is the birthday', () => {
    expect(isBirthday('2023-10-10')).toBe(true);
  });

  it('should return true if today is within 3 days after the birthday', () => {
    expect(isBirthday('2023-10-08')).toBe(true);
  });

  it('should return false if today is more than 3 days after the birthday', () => {
    expect(isBirthday('2023-10-06')).toBe(false);
  });

  it('should return false if today is before the birthday', () => {
    expect(isBirthday('2023-10-11')).toBe(false);
  });
});
