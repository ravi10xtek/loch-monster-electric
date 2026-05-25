/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from the CMS (Payload)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'loch-monster-electric-cms.vercel.app',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: '*.lochmonsterelectric.com',
        pathname: '/**',
      },
    ],
  },

  // 301 redirects — preserve SEO equity from old /journal URLs
  async redirects() {
    return [
      {
        source: '/journal',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/journal/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ]
  },

  // Allow the Payload CMS admin to embed /preview/* routes in an iframe
  async headers() {
    return [
      {
        source: '/preview/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "frame-ancestors 'self'",
              'http://localhost:3001',
              'https://loch-monster-electric-cms.vercel.app',
            ].join(' '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
