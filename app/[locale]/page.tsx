import { getTranslations } from 'next-intl/server';
import BaseLayout from '~/components/Layout/Base';
import LandingPage from '~/components/Home';
import type { FC } from 'react';
import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.home.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const Page: FC = () => (
  <BaseLayout>
    <LandingPage />
  </BaseLayout>
);

export default Page;