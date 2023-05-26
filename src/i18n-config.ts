export const i18n = {
  defaultLocale: 'nb',
  locales: ['en', 'nb', 'se'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
