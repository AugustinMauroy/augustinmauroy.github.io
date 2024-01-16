import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  //images: { unoptimized: true },
  trailingSlash: false,
  optimizePackageImports: ['@radix-ui/react-avatar', 'tailwindcss'],
};

const nextWithIntl = withNextIntl('./src/utils/i18n/config.ts')(nextConfig);

export default nextWithIntl;
