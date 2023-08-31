// not-found doesn't work with i18n
import LocalizedLink from '@/components/i18n/localizedLink';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import styles from './page.module.scss';
import { FC } from 'react';

const metadata = {
	title: '404',
};

const NotFound: FC = () => (
	<div className={styles.container}>
		<h1>
			<LocalizedMessage id='app.notFound.title' />
		</h1>
		<p>
			<LocalizedMessage id='app.notFound.description' />
		</p>
		<LocalizedLink href='/'>
			<LocalizedMessage id='app.notFound.home' />
		</LocalizedLink>
	</div>
);

export { metadata };
export default NotFound;
