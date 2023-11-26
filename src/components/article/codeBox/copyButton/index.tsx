'use client';
import { useTranslations } from 'next-intl';
import Button from '@/components/common/button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import type { FC, MouseEvent } from 'react';

type copyButtoProps = {
  code: string;
};

const CopyButton: FC<copyButtoProps> = ({ code }) => {
  const t = useTranslations('components.article.codeBox');
  const [copied, copyText] = useCopyToClipboard();

  const handleCopyCode = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    copyText(code);
  };

  return <Button onClick={handleCopyCode}>{t('copy', { copied })}</Button>;
};

export default CopyButton;
