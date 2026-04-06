/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'realatte.com' },
      { protocol: 'https', hostname: 'backend.realatte.com' },
    ],
  },
}

module.exports = nextConfig
