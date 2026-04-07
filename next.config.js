/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  ...(isGithubActions ? { output: 'export', basePath: '/funnel_project' } : {}),
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
