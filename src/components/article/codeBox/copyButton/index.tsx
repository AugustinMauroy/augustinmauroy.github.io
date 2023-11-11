'use client';
import { FormattedMessage } from 'react-intl';
import Button from '@/components/common/button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import type { FC, MouseEvent } from 'react';

type copyButtoProps = {
  code: string;
};

const CopyButton: FC<copyButtoProps> = ({ code }) => {
  const [copied, copyText] = useCopyToClipboard();

  const handleCopyCode = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    copyText(code);
  };

  return (
    <Button onClick={handleCopyCode}>
      <FormattedMessage
        id="components.article.codeBox.copy"
        values={{ copied }}
      />
    </Button>
  );
};

export default CopyButton;
