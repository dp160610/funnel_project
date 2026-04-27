/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: { optimizePackageImports: ['lucide-react'] },
};
module.exports = nextConfig;
