import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'fr'];
const defaultLocale = 'en';

function getLocaleFromRequest(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLocales = acceptLanguage.split(',').map((lang) => {
    const match = lang.match(/^\s*(.+?)(?:-([a-zA-Z]+))?(?:;\s*q=(.+))?$/);
    if (match) {
      const [, primary, secondary, q = '1'] = match;
      const locale = secondary ? `${primary}-${secondary.toLowerCase()}` : primary.toLowerCase();
      return { locale, q: parseFloat(q) };
    }
    return { locale: lang.toLowerCase(), q: 1 };
  }).sort((a, b) => b.q - a.q);

  for (const { locale } of preferredLocales) {
    if (supportedLocales.includes(locale)) {
      return locale;
    }
    if (locale.startsWith('fr')) {
      return 'fr';
    }
  }
  return defaultLocale;
}

function isLocalePath(pathname: string): boolean {
  return supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already a locale path
  if (isLocalePath(pathname)) {
    return NextResponse.next();
  }

  // Skip non-app paths
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Detect locale
  const locale = getLocaleFromRequest(request);

  // Redirect root to /locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Redirect other root paths to /locale/path (e.g., /about -> /en/about)
  const newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(new URL(newPath, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
