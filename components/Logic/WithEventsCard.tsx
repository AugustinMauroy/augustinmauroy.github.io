'use client';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import EventsCard from '~/components/Common/EnventsCard/index.tsx';
import { isInRange, isToday } from '~/utils/date.ts';

type Event = {
  key: string;
  date?: string;
  startDate?: string;
  endDate?: string;
};

const EVENTS: Event[] = [
  {
    endDate: '2023-06-30',
    key: 'prideMonth',
    startDate: '2023-06-01',
  },
  {
    date: '2023-09-23',
    key: 'bisexualityDay',
  },
  {
    date: '2023-12-01',
    key: 'aidsDay',
  },
];

const WithEventsCard: FC = () => {
  const t = useTranslations('events');
  const currentDate = new Date().toISOString();
  const currentEvents = EVENTS.filter(({ date, startDate, endDate }) => {
    if (date) return isToday(date);
    else if (startDate && endDate)
      return isInRange(currentDate, startDate, endDate);

    return false;
  });

  if (currentEvents.length === 0) return null;

  return (
    <EventsCard
      description={t(`${currentEvents[0]?.key}.description`) || ''}
      title={t(`${currentEvents[0]?.key}.title`) || ''}
    />
  );
};

export default WithEventsCard;
