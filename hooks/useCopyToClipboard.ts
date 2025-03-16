'use client';
import { useEffect, useState } from 'react';

const copyToClipboard = (value: string | undefined) => {
  if (!value || typeof navigator === 'undefined') {
    return Promise.resolve(false);
  }

  return navigator.clipboard
    .writeText(value)
    .then(() => true)
    .catch(() => false);
};

const useCopyToClipboard = (timeout = 3000) => {
  const [copied, setCopied] = useState(false);

  const copyText = (text: string | undefined) =>
    copyToClipboard(text).then(setCopied);

  useEffect(() => {
    if (copied) {
      const timerId = setTimeout(() => setCopied(false), timeout);

      return () => clearTimeout(timerId);
    }

    return undefined;
  }, [copied]);

  return [copied, copyText] as const;
};

export default useCopyToClipboard;
