import { useFormatter } from 'next-intl';
import type { DateTimeFormatOptions } from 'next-intl';
import type { FC } from 'react';

type FormattedTimeProps = {
  date: string | Date;
  format?: DateTimeFormatOptions;
};

const FormattedTime: FC<FormattedTimeProps> = ({ date, format }) => {
  const formatter = useFormatter();

  const dateObject = new Date(date);

  return (
    <time dateTime={dateObject.toISOString()}>
      {formatter.dateTime(
        dateObject,
        format ?? {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      )}
    </time>
  );
};

export default FormattedTime;
