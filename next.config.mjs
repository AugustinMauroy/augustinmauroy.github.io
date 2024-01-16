import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
};

const nextWithIntl = withNextIntl('./src/utils/i18n/config.ts')(nextConfig);

export default nextWithIntl;
