import { withSentryConfig } from "@sentry/nextjs";

import type { NextConfig } from "next";

// Set to true when deploying to GitHub Pages (username.github.io/repo-name/)
// Set to false when using custom domain (pcquanti.com)
const useGitHubPages = process.env.USE_GITHUB_PAGES === 'true';
const basePath = useGitHubPages ? '/pc_quanti' : '';

// Make basePath available to the app via environment variable
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  typescript: {
    // Only ignore build errors in development, enforce type checking in production
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Source maps upload/visibility settings
  sourcemaps: {
    disable: true,
  },
});
