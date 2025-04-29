import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASE_URL,
  assetPrefix: process.env.BASE_URL,
  trailingSlash: true,
};

export default nextConfig;
