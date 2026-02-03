import { MetadataRoute } from 'next';
import portfolioData from '../data/portfolio.json';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = portfolioData.seo.url;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
