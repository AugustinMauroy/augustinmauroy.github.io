import i18nconfig from '@/../i18n/config.json';

type Locale = (typeof i18nconfig)[0];

function availableLocales(): Locale[] {
	let locales: Locale[] = [];
	i18nconfig.forEach((item) => {
		item.enabled ? locales.push(item) : null;
	});
	return locales;
}

function getLabel() {
	// getLabel of all enabled locales
	let labels: string[] = [];
	i18nconfig.forEach((item) => {
		item.enabled ? labels.push(item.localName) : null;
	});
	return labels;
}

export { availableLocales, getLabel };
