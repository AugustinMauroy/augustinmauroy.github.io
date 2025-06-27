'use client';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import useCopyToClipboard from '~/hooks/useCopyToClipboard.ts';
import Button from '../Button/index.tsx';

type CopyButtonProps = {
  text: string;
  className?: string;
};

const CopyButton: FC<CopyButtonProps> = ({ text, className }) => {
  const [copied, copy] = useCopyToClipboard();
  const t = useTranslations('components.common.copyButton');

  return (
    <Button className={className} onClick={() => copy(text)}>
      {copied ? t('copied') : t('copy')}
    </Button>
  );
};

export default CopyButton;
