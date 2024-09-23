import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import useCopyToClipboard from '../useCopyToClipboard';

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('should return initial state as false', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [copied] = result.current;
    expect(copied).toBe(false);
  });

  it('should copy text to clipboard and set copied to true', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText('Hello, World!');
    });

    const [copied] = result.current;
    expect(copied).toBe(true);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello, World!');
  });

  it('should reset copied to false after 3 seconds', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText('Hello, World!');
    });

    let [copied] = result.current;
    expect(copied).toBe(true);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    [copied] = result.current;
    expect(copied).toBe(false);

    vi.useRealTimers();
  });

  it('should handle copy failure and set copied to false', async () => {
    navigator.clipboard.writeText = vi
      .fn()
      .mockRejectedValue(new Error('Failed to copy'));

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText('Hello, World!');
    });

    const [copied] = result.current;
    expect(copied).toBe(false);
  });

  it('should not attempt to copy if text is undefined', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText(undefined);
    });

    expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
  });
});
