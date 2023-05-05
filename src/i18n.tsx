import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglish from './Translations/English/en.json';
import translationNorwegian from './Translations/Norwegian/nb.json';
import translationSami from './Translations/Sami/sa.json';

//---Using different namespaces
const resources = {
  en: {
    main: translationEnglish,
  },
  nb: {
    main: translationNorwegian,
  },
  sa: {
    main: translationSami,
  },
};

const initializeLocalization = () => {
  void i18next.use(initReactI18next).init({
    resources: resources,
    lng: 'nb',
    fallbackLng: 'nb',

    interpolation: {
      escapeValue: false,
    },
  });
};

const changeLanguage = (language: string) => {
  void i18next.changeLanguage(language);
};

export { initializeLocalization, changeLanguage };
