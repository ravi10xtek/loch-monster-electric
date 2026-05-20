const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/preview/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
