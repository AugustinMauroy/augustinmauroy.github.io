'use client';
import { useTranslations } from 'next-intl';
import useCopyToClipboard from '~/hooks/useCopyToClipboard.ts';
import Button from '../Button/index.tsx';
import type { FC } from 'react';

type CopyButtonProps = {
  text: string;
  className?: string;
};

const CopyButton: FC<CopyButtonProps> = ({ text, className }) => {
  const [copied, copy] = useCopyToClipboard();
  const t = useTranslations('components.common.copyButton');

  return (
    <Button onClick={() => copy(text)} className={className}>
      {copied ? t('copied') : t('copy')}
    </Button>
  );
};

export default CopyButton;
