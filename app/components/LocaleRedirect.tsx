"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const supportedLocales = ['en', 'fr'];
const defaultLocale = 'en';

function getLocaleFromNavigator(): string {
  const navigatorLanguage = navigator.language.toLowerCase();
  if (navigatorLanguage.startsWith('fr')) {
    return 'fr';
  }
  return defaultLocale;
}

export default function LocaleRedirect() {
  const pathname = usePathname() || '/';
  const router = useRouter();

  useEffect(() => {
    // Skip if already a locale path
    if (supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) {
      return;
    }

    // Skip non-app paths
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
      return;
    }

    // Detect locale
    const locale = getLocaleFromNavigator();

    // Redirect root to /locale
    if (pathname === '/') {
      router.replace(`/${locale}`);
      return;
    }

    // Redirect other root paths to /locale/path
    const newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
    // Use hard redirect to avoid showing a 404 while Next transitions
    window.location.replace(newPath);
  }, [pathname, router]);

  return null;
}
