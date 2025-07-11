/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: '/testname', // only needed if using a project subpath (not root domain)
  images: { unoptimized: true },
  }

module.exports = nextConfig;
