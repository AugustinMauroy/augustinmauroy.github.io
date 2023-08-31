import type { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		host: 'https://augustinmauroy.github.io',
	};
}

export default robots;
