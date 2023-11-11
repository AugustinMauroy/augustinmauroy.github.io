'use client';
import { FormattedMessage } from 'react-intl';
import type { FC, ElementType } from 'react';

type Props = {
  id: string;
  tagName?: ElementType<any>;
  values?: any;
};

const LocalizedMessage: FC<Props> = ({ id, tagName, values }) => (
  <FormattedMessage id={id} tagName={tagName} values={values} />
);

export default LocalizedMessage;
