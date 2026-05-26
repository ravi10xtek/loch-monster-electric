const BASE = process.env.SITE_URL || 'https://www.lochmonsterelectric.com'

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
