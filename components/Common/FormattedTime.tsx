import type { DateTimeFormatOptions } from 'next-intl';
import { useFormatter } from 'next-intl';
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
          day: 'numeric',
          month: 'long',
          weekday: 'long',
          year: 'numeric',
        },
      )}
    </time>
  );
};

export default FormattedTime;
