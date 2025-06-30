import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { FC } from 'react';
import LandingPage from '~/components/Home/index.tsx';
import BaseLayout from '~/components/Layout/Base/index.tsx';
import type { BaseParams } from '~/types/params.ts';

type PageProps = BaseParams;

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'app.home.metadata',
  });

  return {
    description: t('description'),
    title: t('title'),
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <BaseLayout>
      <LandingPage />
    </BaseLayout>
  );
};

export default Page;
