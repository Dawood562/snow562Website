import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects/',
        destination: '/projects',
      },
    ]
  },
  output: "export",
  poweredByHeader: false
};

module.exports = nextConfig;