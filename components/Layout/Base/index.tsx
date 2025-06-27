import classNames from 'classnames';
import Footer from '~/components/Sections/Footer/index.tsx';
import TopNav from '~/components/Sections/TopNav/index.tsx';
import type { FC, PropsWithChildren } from 'react';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
}>;

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => (
  <>
    <TopNav />
    <main className={classNames('flex-1', className)}>{children}</main>
    <Footer />
  </>
);

export default BaseLayout;
