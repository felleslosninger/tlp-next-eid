//import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nb: () => import('./dictionaries/nb.json').then((module) => module.default),
  se: () => import('./dictionaries/se.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
