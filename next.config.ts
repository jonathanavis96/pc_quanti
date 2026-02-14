import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    // Temporarily ignore build errors during development
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
