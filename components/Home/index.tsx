import Hero from '~/components/Home/Hero/index.tsx';
import SocialMediaList from '~/components/Home/SocialMediaList/index.tsx';
import WithEventsCard from '~/components/Logic/WithEnventsCard.tsx';
import type { FC } from 'react';

const LandingPage: FC = () => (
  <>
    <Hero />
    <WithEventsCard />
    <SocialMediaList />
  </>
);

export default LandingPage;
