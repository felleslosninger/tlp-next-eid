/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
});

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

module.exports = nextConfig;
