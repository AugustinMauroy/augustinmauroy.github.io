import { DocumentIcon } from '@heroicons/react/24/outline';
import { isValidElement } from 'react';
import { codeToHtml } from 'shiki/bundle/web';
import CopyButton from '../CopyButton/index.tsx';
import type { FC, ReactNode } from 'react';

type CodeboxProps = {
  children: ReactNode;
  fileName?: string;
  className?: string;
};

const Codebox: FC<CodeboxProps> = async props => {
  if (!isValidElement(props.children)) return null;

  // @ts-ignore
  const code = props.children.props.children.trim();
  const lang =
    // @ts-ignore
    props.children.props?.className
      ?.replace('language-', '')
      ?.replace('mjs', 'js') ?? 'plaintext';

  const html = await codeToHtml(code, {
    theme: 'vitesse-dark',
    lang,
  });

  return (
    <div className="mt-2 mb-4 rounded-md border-2 border-neutral-700 bg-neutral-800">
      <div className="flex w-full items-center justify-between border-b-2 dark:border-b-white">
        <span className="min-w-20 border-r-2 border-r-white px-4 py-2 text-center font-extrabold uppercase bg-violet-500">
          {lang}
        </span>
        {props?.fileName && (
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm truncate font-bold">
            {props.fileName} <DocumentIcon className="size-5" />
          </span>
        )}
      </div>
      <div className="relative p-4">
        <pre
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: html.match(/<code>(.+?)<\/code>/s)![1],
          }}
        />
        <CopyButton className="absolute bottom-2 right-2" text={code} />
      </div>
    </div>
  );
};

export default Codebox;
