import classNames from 'classnames';
import Footer from '~/components/Sections/Footer';
import TopNav from '~/components/Sections/TopNav';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
}>;

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => (
  <>
    <TopNav />
    <main className={classNames(className, styles.main)}>{children}</main>
    <Footer />
  </>
);

export default BaseLayout;
