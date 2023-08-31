'use client';
import { FormattedMessage } from 'react-intl';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import styles from './index.module.scss';
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
		<button
			className={styles.copyButton}
			type='button'
			onClick={handleCopyCode}
		>
			<FormattedMessage
				id='components.article.codeBox.copy'
				values={{ copied }}
			/>
		</button>
	);
};

export default CopyButton;
