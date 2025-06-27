'use client';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import EventsCard from '~/components/Common/EnventsCard/index.tsx';
import { isInRange, isToday } from '~/utils/date.ts';

type Event = {
  key: string;
  title: string;
  description: string;
  date?: string;
  startDate?: string;
  endDate?: string;
};

const EVENTS: Event[] = [
  {
    description: 'Celebrate Pride Month from June 1st to June 30th.',
    endDate: '2023-06-30',
    key: 'prideMonth',
    startDate: '2023-06-01',
    title: 'Pride Month',
  },
  {
    date: '2023-09-23',
    description: 'Celebrate Bisexuality Day on September 23rd.',
    key: 'bisexualityDay',
    title: 'Bisexuality Day',
  },
  {
    date: '2023-12-01',
    description: 'Observe World AIDS Day on December 1st.',
    key: 'aidsDay',
    title: 'AIDS Day',
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
