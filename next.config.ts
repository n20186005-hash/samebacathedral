import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.samebacathedral.com',
          },
        ],
        destination: 'https://samebacathedral.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
