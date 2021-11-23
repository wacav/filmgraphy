module.exports = {
  extends: ['eslint:recommended', 'prettier', 'next'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-document-import-in-page': 'off',
  },
  globals: {
    React: true,
  },
};
