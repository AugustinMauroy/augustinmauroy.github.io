import type { FC } from 'react';
import Hero from '~/components/Home/Hero/index.tsx';
import SocialMediaList from '~/components/Home/SocialMediaList/index.tsx';
import WithEventsCard from '~/components/Logic/WithEventsCard.tsx';

const LandingPage: FC = () => (
  <>
    <Hero />
    <WithEventsCard />
    <SocialMediaList />
  </>
);

export default LandingPage;
