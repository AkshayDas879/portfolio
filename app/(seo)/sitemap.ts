import { MetadataRoute } from 'next';
import portfolioData from '../data/portfolio.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = portfolioData.seo.url;

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
