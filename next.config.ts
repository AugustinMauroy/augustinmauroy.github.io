import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // need to be test on CI but not on building of the app
  typescript: {
    ignoreBuildErrors: true,
  },
  // We didn't use eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static website output
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  transpilePackages: ['geist', 'next-mdx-remote'],
};

export default withNextIntl(nextConfig);
