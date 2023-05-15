/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nb',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
