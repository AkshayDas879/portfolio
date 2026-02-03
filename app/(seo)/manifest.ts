import { MetadataRoute } from 'next';
import portfolioData from '../data/portfolio.json';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: portfolioData.personal.name,
        short_name: "Akshay",
        description: portfolioData.seo.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/icon?size=192',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon?size=512',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
