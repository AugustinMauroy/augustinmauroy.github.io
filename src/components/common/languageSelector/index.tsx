'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { IoLanguage } from 'react-icons/io5';
import { useIntl } from 'react-intl';
import { availableLocales } from '@/utils/i18n';
import Dropdown from '../dropDown';
import type { FC } from 'react';

type CustomLinkProps = {
	LocaleName: string;
	localeCode: string;
};

const CustomLink: FC<CustomLinkProps> = ({ LocaleName, localeCode }) => {
	const pathname = usePathname();
	const currentPath = pathname.split('/').slice(2).join('/');

	return <Link href={`/${localeCode}/${currentPath}`}>{LocaleName}</Link>;
};

const Language: FC = () => {
	const { lang } = useParams();
	const intl = useIntl();

	const options: string[] = availableLocales().map((locale) => {
		return locale.localName;
	});

	const currentLang = availableLocales().find((locale) => {
		return locale.code === lang;
	});

	const getCode = (localName: string) => {
		return availableLocales().find((locale) => {
			return locale.localName === localName;
		});
	};

	return (
		<Dropdown
			title={
				<IoLanguage
					aria-label={intl.formatMessage({
						id: 'components.common.languageSelector.language',
					})}
				/>
			}
			options={options}
			activeItem={currentLang?.localName}
			customChildren={({ children }) => {
				if (typeof children !== 'string') {
					throw new Error('children must be a string on language dropdown');
				} else if (getCode(children) === undefined) {
					throw new Error(
						'children must be a valid locale name on language dropdown',
					);
				} else {
					return (
						<CustomLink
							// @ts-ignore Typescript is not smart enough to understand that getCode(children) is not undefined
							localeCode={getCode(children)?.code}
							LocaleName={children}
						/>
					);
				}
			}}
		/>
	);
};

export default Language;
