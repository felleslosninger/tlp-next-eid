module.exports = {
  locales: ['nb', 'en', 'sa'],
  defaultLocale: 'nb',
  app: {
    '/[lang]/': ['page'], // app/page.tsx
    '/[lang]/[...slug]/': ['page'], // app/second-page/page.tsx
  },
};
