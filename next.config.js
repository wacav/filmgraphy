/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
};

module.exports = config;
