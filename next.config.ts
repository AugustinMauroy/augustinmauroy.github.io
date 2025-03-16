import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // need to be test on CI but not on building of the app
  typescript: { ignoreBuildErrors: true },
  // We didn't use eslint
  eslint: { ignoreDuringBuilds: true },
  // Static website output
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    // Use Workers and Threads for webpack compilation
    webpackBuildWorker: true,
    // Execute parallel tracing of server builds
    parallelServerBuildTraces: true,
    // Execute parallel server compilation
    parallelServerCompiles: true,
    // A list of packages that Next.js should automatically evaluate and optimise the imports for.
    // @see https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
    optimizePackageImports: [
      '@heroicons/react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dropdown-menu',
      'shiki',
    ],
  },
};

export default withNextIntl(nextConfig);
