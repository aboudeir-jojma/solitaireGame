"use client";

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../i18n';

export default function I18nProvider({ children, locale }: { children: React.ReactNode; locale?: string }) {
  useEffect(() => {
    // Change language to the provided locale if available
    if (locale) {
      i18n.changeLanguage(locale);
    }

    // Set initial lang
    document.documentElement.lang = i18n.language;

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
