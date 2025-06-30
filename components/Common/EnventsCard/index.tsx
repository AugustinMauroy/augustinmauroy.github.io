import type { FC } from 'react';
import {
  Neobrutalism1,
  Neobrutalism2,
} from '~/components/Illustration/index.ts';

type EventsCardProps = {
  title: string;
  description: string;
};

const EventsCard: FC<EventsCardProps> = ({ title, description }) => (
  <div className="relative mx-20 mt-12 mb-20 border-2 border-black bg-white p-4 pl-10 shadow-neo-brutalism-xl-black lg:mx-auto lg:max-w-3/4 dark:border-whit dark:bg-neutral-900 dark:shadow-neo-brutalism-xl-white">
    <Neobrutalism2
      aria-hidden="true"
      className="-right-10 -top-10 absolute size-20 rotate-12 text-violet-500"
    />
    <h1 className="mb-4 font-bold text-4xl">{title}</h1>
    <p className="text-lg text-neutral-500 dark:text-neutral-400">
      {description}
    </p>
    <Neobrutalism1
      aria-hidden="true"
      className="-bottom-10 -left-10 absolute size-20 rotate-12 text-green-500"
    />
  </div>
);

export default EventsCard;
