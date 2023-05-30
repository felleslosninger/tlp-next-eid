import type { Locale } from './i18n-config';

interface Dictionary {
  [key: string]: () => Promise<{ [key: string]: string }>;
}

const dictionaries: Dictionary = {
  nb: () => import('./dictionaries/nb.json').then((module) => module.default),
  se: () => import('./dictionaries/se.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
