import assert from 'node:assert/strict';
import { describe, it, mock, beforeEach, afterEach } from 'node:test';
import { isInRange, isToday, isBirthday } from '../date.ts';

describe('isInRange', () => {
  it('should return true if the date is within the range', () => {
    assert.strictEqual(
      isInRange('2023-10-10', '2023-10-01', '2023-10-20'),
      true
    );
  });

  it('should return false if the date is before the range', () => {
    assert.strictEqual(
      isInRange('2023-09-30', '2023-10-01', '2023-10-20'),
      false
    );
  });

  it('should return false if the date is after the range', () => {
    assert.strictEqual(
      isInRange('2023-10-21', '2023-10-01', '2023-10-20'),
      false
    );
  });

  it('should return true if the date is exactly the start date', () => {
    assert.strictEqual(
      isInRange('2023-10-01', '2023-10-01', '2023-10-20'),
      true
    );
  });

  it('should return true if the date is exactly the end date', () => {
    assert.strictEqual(
      isInRange('2023-10-20', '2023-10-01', '2023-10-20'),
      true
    );
  });
});

describe('isToday', () => {
  const mockDate = new Date('2023-10-10T00:00:00Z');

  beforeEach(() => {
    mock.timers.enable({ now: mockDate, apis: ['Date'] });
  });

  afterEach(() => {
    mock.timers.reset();
  });

  it('should return true if the date is today', () => {
    assert.strictEqual(isToday('2023-10-10'), true);
  });

  it('should return false if the date is not today', () => {
    assert.strictEqual(isToday('2023-10-09'), false);
  });
});

describe('isBirthday', () => {
  const mockDate = new Date('2023-10-10T00:00:00Z');

  beforeEach(() => {
    mock.timers.enable({ now: mockDate, apis: ['Date'] });
  });

  afterEach(() => {
    mock.timers.reset();
  });

  it('should return true if today is the birthday', () => {
    assert.strictEqual(isBirthday('2023-10-10'), true);
  });

  it('should return true if today is within 3 days after the birthday', () => {
    assert.strictEqual(isBirthday('2023-10-09'), true);
  });

  it('should return false if today is more than 3 days after the birthday', () => {
    assert.strictEqual(isBirthday('2023-10-06'), false);
  });

  it('should return false if today is before the birthday', () => {
    assert.strictEqual(isBirthday('2023-10-11'), false);
  });
});
