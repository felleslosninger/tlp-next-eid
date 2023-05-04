import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglish from './Translations/English/translation.json';
import translationNorwegian from './Translations/Norwegian/translation.json';
import translationSami from './Translations/Sami/translation.json';

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

i18next.use(initReactI18next).init({
  resources,
  lng: 'nb', //default language
});

export default i18next;
