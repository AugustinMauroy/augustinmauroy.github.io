import { Code } from 'bright';
import CopyButton from './copyButton';
import styles from './index.module.css';
import type { FC } from 'react';

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
  lightSelector: '[data-theme="light"]',
};

type CodeBoxProps = {
  codeData: {
    props: {
      className: string;
      children: string;
    };
  };
};

const replaceLabelLanguages = (language: string) =>
  language.replace(/console/i, 'bash').replace('language-', '');

const replaceLanguages = (language: string) =>
  language
    .replace(/mjs|cjs|javascript/i, 'js')
    .replace(/console|shell/i, 'bash')
    .replace('language-', '');

const CodeBox: FC<CodeBoxProps> = ({ codeData }) => (
  <div className={styles.codeBox}>
    <div className={styles.codeLabel}>
      <strong className={styles.label}>
        {replaceLabelLanguages(codeData.props.className)}
      </strong>
      <CopyButton code={codeData.props.children} />
    </div>
    <Code
      className={styles.code}
      lang={replaceLanguages(codeData.props.className)}
    >
      {codeData.props.children}
    </Code>
  </div>
);

export default CodeBox;
