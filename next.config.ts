import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  experimental: {
    // A list of packages that Next.js should automatically evaluate and optimise the imports for.
    // @see https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
    optimizePackageImports: [
      '@heroicons/react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dropdown-menu',
      'shiki',
    ],
    // Execute parallel tracing of server builds
    parallelServerBuildTraces: true,
    // Execute parallel server compilation
    parallelServerCompiles: true,
    // Use Workers and Threads for webpack compilation
    webpackBuildWorker: true,
  },
  images: { unoptimized: true },
  // Static website output
  output: 'export',
  trailingSlash: false,
  transpilePackages: ['next-mdx-remote'],
  // need to be test on CI but not on building of the app
  typescript: { ignoreBuildErrors: true },
};

export default withNextIntl(nextConfig);
