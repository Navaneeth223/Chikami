import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chikami.com'; // Update with actual domain

  const routes = [
    '',
    '/gallery',
    '/about',
    '/commissions',
    '/blog',
    '/contact',
  ];

  const locales = ['en', 'ja'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each route in each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/gallery' ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ja: `${baseUrl}/ja${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
