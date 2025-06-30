import type { FC, ReactNode } from 'react';

type TimelineProps = {
  events: Array<{
    date: string;
    title: string;
    description?: ReactNode;
  }>;
};

const Timeline: FC<TimelineProps> = ({ events }) => (
  <ol className="relative my-4 list-none border-black border-s dark:border-white">
    {events.map((event) => (
      <li className="ms-4 mb-5" key={event.date}>
        <div
          aria-hidden="true"
          className="-start-1.5 absolute mt-1.5 size-3 rounded-full border border-black bg-teal-100 shadow-neo-brutalism-sm-black dark:border-white dark:bg-teal-500 dark:shadow-neo-brutalism-sm-white"
          role="presentation"
        />
        <time className="mb-1 font-normal text-neutral-500 text-sm leading-none dark:text-neutral-400">
          {event.date}
        </time>
        <h3 className="font-semibold text-lg text-neutral dark:text-white">
          {event.title}
        </h3>
        {event.description && (
          <p className="mb-4 font-normal text-base">{event.description}</p>
        )}
      </li>
    ))}
  </ol>
);

export default Timeline;
