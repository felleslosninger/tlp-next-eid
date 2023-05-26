/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: { appDir: true },
};

module.exports = nextTranslate(nextConfig);
