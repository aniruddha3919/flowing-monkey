import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the default website domain. Under Next.js dynamic sitemaps, this can be customized easily if changed.
  const baseUrl = 'https://flowingmonkey.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
