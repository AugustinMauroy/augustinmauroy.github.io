import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['geist'],
  images: { unoptimized: true },
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextWithIntl = withNextIntl('./utils/i18n/config.ts')(nextConfig);

export default nextWithIntl;
