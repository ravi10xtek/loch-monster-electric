const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
