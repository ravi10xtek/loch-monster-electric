/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from the CMS (Payload)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/media/**',
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
