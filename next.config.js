/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig;
