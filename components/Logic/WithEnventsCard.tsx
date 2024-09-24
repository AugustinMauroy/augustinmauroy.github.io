'use client';
import { useTranslations } from 'next-intl';
import EventsCard from '~/components/Common/EnventsCard';
import { isToday, isInRange } from '~/utils/date';
import type { FC } from 'react';

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
    key: 'prideMonth',
    title: 'Pride Month',
    description: 'Celebrate Pride Month from June 1st to June 30th.',
    startDate: '2023-06-01',
    endDate: '2023-06-30',
  },
  {
    key: 'bisexualityDay',
    title: 'Bisexuality Day',
    description: 'Celebrate Bisexuality Day on September 23rd.',
    date: '2023-09-23',
  },
  {
    key: 'aidsDay',
    title: 'AIDS Day',
    description: 'Observe World AIDS Day on December 1st.',
    date: '2023-12-01',
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
      title={t(`${currentEvents[0]?.key}.title`) || ''}
      description={t(`${currentEvents[0]?.key}.description`) || ''}
    />
  );
};

export default WithEventsCard;
