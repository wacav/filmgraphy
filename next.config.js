/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  sassOptions: true,
  // babel
  swcMinify: false,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
};

module.exports = config;
