import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { FC } from 'react';
import LandingPage from '~/components/Home/index.tsx';
import BaseLayout from '~/components/Layout/Base/index.tsx';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.home.metadata');

  return {
    description: t('description'),
    title: t('title'),
  };
};

const Page: FC = () => (
  <BaseLayout>
    <LandingPage />
  </BaseLayout>
);

export default Page;
