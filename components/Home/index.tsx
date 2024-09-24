import Hero from '~/components/Home/Hero';
import SocialMediaList from '~/components/Home/SocialMediaList';
import WithEventsCard from '~/components/Logic/WithEnventsCard';
import type { FC } from 'react';

const LandingPage: FC = () => (
  <>
    <Hero />
    <WithEventsCard />
    <SocialMediaList />
  </>
);

export default LandingPage;
