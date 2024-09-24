import { Neobrutalism1, Neobrutalism2 } from '~/components/Illustration';
import styles from './index.module.css';
import type { FC } from 'react';

type EventsCardProps = {
  title: string;
  description: string;
};

const EventsCard: FC<EventsCardProps> = ({ title, description }) => (
  <div className={styles.card}>
    <Neobrutalism2 aria-hidden="true" className={styles.shapeTop} />
    <h1>{title}</h1>
    <p>{description}</p>
    <Neobrutalism1 aria-hidden="true" className={styles.shapeBottom} />
  </div>
);

export default EventsCard;
