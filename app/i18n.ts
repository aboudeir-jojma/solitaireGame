import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enGlobal from '../lib/locales/en/global.js';
import frGlobal from '../lib/locales/fr/global.js';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: undefined,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    ns: ['global', 'about', 'privacy', 'terms'],
    defaultNS: 'global',
    resources: {
      en: {
        global: enGlobal,
        about: enGlobal.about,
        privacy: enGlobal.privacy,
        terms: enGlobal.terms
      },
      fr: {
        global: frGlobal,
        about: frGlobal.about,
        privacy: frGlobal.privacy,
        terms: frGlobal.terms
      }
    },
    detection: {
      order: ['navigator'],
      caches: []
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    returnNull: false,
    parseMissingKeyHandler: (key) => key, // Return key as is if missing
  });

export { i18n };
