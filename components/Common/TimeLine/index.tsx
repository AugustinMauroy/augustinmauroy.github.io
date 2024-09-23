import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type TimelineProps = {
  events: Array<{
    date: string;
    title: string;
    description?: ReactNode;
  }>;
};

const Timeline: FC<TimelineProps> = ({ events }) => (
  <ol className={styles.timeline}>
    {events.map(event => (
      <li key={event.date}>
        <div className={styles.dot} aria-hidden="true" role="presentation" />
        <time>{event.date}</time>
        <h3>{event.title}</h3>
        {event.description && <p>{event.description}</p>}
      </li>
    ))}
  </ol>
);

export default Timeline;
