import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './locales';

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

i18n.use(initReactI18next).init({
  ns,
  defaultNS,
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ),
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  compatibilityJSON: 'v3',
});

export const getCurrentLanguage = () => {
  return i18n.language;
};

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

export function translate(
  key: resources.I18nKeys,
  option?: Record<string, unknown>,
) {
  return key ? i18n.t(key, option) : '';
}

export default i18n;
