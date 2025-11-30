/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'creatormeter.com',
      },
    ],
  },
  // Disable type checking during builds temporarily
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
