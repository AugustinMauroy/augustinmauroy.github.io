'use client';
import { FormattedDate } from 'react-intl';
import type { FC } from 'react';

type Props = {
  value: Date;
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
};

const LocalizedDate: FC<Props> = ({ value, year, month, day, hour }) => (
  <FormattedDate
    value={value}
    year={year}
    month={month}
    day={day}
    hour={hour}
  />
);

export default LocalizedDate;
