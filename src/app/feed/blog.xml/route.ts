import { getRssData } from '@/lib/getcontent';

export async function GET(request: Request) {
	try {
		const rssData = await getRssData();

		const xmlItems = rssData
			.map(
				(item) => `
            <item>
                <title xml:lang="${item.lang}">${item.title}</title>
                <link>https://augustinmauroy.github.io/${item.lang}/blog/${
									item.slug
								}</link>
                <pubDate>${item.date.toUTCString()}</pubDate>
                <description xml:lang="${item.lang}">${
									item.description
								}</description>
            </item>
        `,
			)
			.join('\n');

		const rssContent = `
            <?xml version="1.0" encoding="UTF-8"?>
            <rss version="2.0">
                <channel>
                    <title>Votre titre de flux RSS</title>
                    <link>https://augustinmauroy.github.io/blog</link>
                    <description>Votre description de flux RSS</description>
                    ${xmlItems}
                </channel>
            </rss>
        `;

		return new Response(rssContent, {
			headers: {
				'content-type': 'application/xml;charset=UTF-8',
			},
		});
	} catch (error) {
		return new Response('error', {
			status: 500,
		});
	}
}
