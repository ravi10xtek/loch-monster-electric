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
}

module.exports = nextConfig
