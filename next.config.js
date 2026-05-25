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
        // Direct Supabase storage URLs (used since the s3Storage plugin
        // was switched to disablePayloadAccessControl)
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '*.lochmonsterelectric.com',
        pathname: '/**',
      },
    ],
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
