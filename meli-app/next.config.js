/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'http2.mlstatic.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
