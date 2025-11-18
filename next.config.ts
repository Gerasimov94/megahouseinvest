import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.regru.cloud',
        pathname: '/megahouseinvest-s3/**',
      },
    ],
  },
};

export default nextConfig;
