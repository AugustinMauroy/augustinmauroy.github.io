import { unstable_setRequestLocale } from 'next-intl/server';
import FindMe from '@/components/home/findme';
import Hero from '@/components/home/hero';
import type { Params } from '@/types/params';
import type { FC } from 'react';

type PageProps = {
  params: Params;
};

const Page: FC<PageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <Hero />
      <hr />
      <FindMe />
    </>
  );
};

export default Page;
