import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/test/',
    },
    sitemap: 'https://smartbrandly.com/sitemap.xml',
  };
}
