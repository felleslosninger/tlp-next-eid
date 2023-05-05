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
  void i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: resources,
      lng: 'nb', // if you're using a language detector, do not define the lng option
      fallbackLng: 'nb',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};

const changeLanguage = (language: string) => {
  void i18next.changeLanguage(language);
};

export { initializeLocalization, changeLanguage };
