import { DocumentIcon } from '@heroicons/react/24/outline';
import { isValidElement } from 'react';
import { codeToHtml } from 'shiki/bundle/web';
import CopyButton from '../CopyButton/index.tsx';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type CodeboxProps = {
  children: ReactNode;
  fileName?: string;
  className?: string;
};

const Codebox: FC<CodeboxProps> = async props => {
  if (!isValidElement(props.children)) return null;

  const code = props.children.props.children.trim();
  const lang = props.children.props.className
    .replace('language-', '')
    .replace('mjs', 'js');

  const html = await codeToHtml(code, {
    theme: 'vitesse-light',
    lang,
  });

  return (
    <div className={styles.codeBox}>
      <div className={styles.header}>
        <span className={styles.lang}>{lang}</span>
        {props?.fileName && (
          <span className={styles.fileName}>
            {props.fileName} <DocumentIcon />
          </span>
        )}
      </div>
      <div className={styles.codeWrapper}>
        <pre
          dangerouslySetInnerHTML={{
            __html: html.match(/<code>(.+?)<\/code>/s)![1],
          }}
        />
        <CopyButton className={styles.copyButton} text={code} />
      </div>
    </div>
  );
};

export default Codebox;
