import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import { act, renderHook } from '@testing-library/react';
import useCopyToClipboard from '../useCopyToClipboard.ts';

describe('useCopyToClipboard', () => {
  it('should return initial state as false', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [copied] = result.current;
    assert.strictEqual(copied, false);
  });

  it('should copy text to clipboard and set copied to true', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText('Hello World');
    });

    const [copied] = result.current;
    assert.strictEqual(copied, true);
  });

  it('should reset copied to false after 1 seconds', () => {
    const { result } = renderHook(() => useCopyToClipboard(1000));
    const [, copyText] = result.current;

    act(() => {
      copyText('Hello World');
    });

    mock.timers.enable();
    act(() => {
      mock.timers.tick(1000);
    });
    mock.timers.reset();

    const [copied] = result.current;
    assert.strictEqual(copied, false);
  });

  it('should not copy text if value is undefined', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText(undefined);
    });

    const [copied] = result.current;
    assert.strictEqual(copied, false);
  });

  it('should handle clipboard write failure', async () => {
    const originalClipboard = { ...global.navigator.clipboard };
    global.navigator.clipboard.writeText = async () => {
      throw new Error('Clipboard write failed');
    };

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copyText] = result.current;

    await act(async () => {
      await copyText('Hello World');
    });

    const [copied] = result.current;
    assert.strictEqual(copied, false);

    global.navigator.clipboard.writeText = originalClipboard.writeText;
  });
});
