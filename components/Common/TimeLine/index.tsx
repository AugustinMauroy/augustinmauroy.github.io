import type { FC, ReactNode } from 'react';

type TimelineProps = {
  events: Array<{
    date: string;
    title: string;
    description?: ReactNode;
  }>;
};

const Timeline: FC<TimelineProps> = ({ events }) => (
  <ol className="relative my-4 list-none border-s border-black dark:border-white">
    {events.map(event => (
      <li key={event.date} className="mb-5 ms-4">
        <div
          className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-black bg-teal-100 shadow-neo-brutalism-sm-black dark:border-white dark:bg-teal-500 dark:shadow-neo-brutalism-sm-white"
          aria-hidden="true"
          role="presentation"
        />
        <time className="mb-1 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">
          {event.date}
        </time>
        <h3 className="text-lg font-semibold text-neutral dark:text-white">
          {event.title}
        </h3>
        {event.description && (
          <p className="mb-4 text-base font-normal">{event.description}</p>
        )}
      </li>
    ))}
  </ol>
);

export default Timeline;
