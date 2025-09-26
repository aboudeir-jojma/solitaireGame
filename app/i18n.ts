import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: undefined,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    ns: ['global'],
    defaultNS: 'global',
    detection: {
      order: ['navigator'],
      caches: []
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    returnNull: false,
    parseMissingKeyHandler: (key) => key, // Return key as is if missing
  });

export { i18n };
