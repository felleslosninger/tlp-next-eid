import { getDictionary } from '../get-dictionary';

export const validateAndGetLang = async (lng: string) => {
  if (lng !== 'nb' && lng !== 'en' && lng !== 'se') {
    throw new Error(`invalid languagecode: ${lng}`);
  } else {
    const dictionary = await getDictionary(lng);
    return dictionary;
  }
};
