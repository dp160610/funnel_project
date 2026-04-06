/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/funnel_project',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'realatte.com' },
      { protocol: 'https', hostname: 'backend.realatte.com' },
    ],
  },
}

module.exports = nextConfig
