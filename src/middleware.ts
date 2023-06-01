import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { i18n } from './i18n-config';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales: string[] = Array.from(i18n.locales);
  return matchLocale(languages, locales, i18n.defaultLocale);
}

let APIURL: string | null = 'tlp-site-eid-dev.digdir.no/';

const setAPIURL = (request: NextRequest) => {
  if (typeof request.headers.get('host') === 'string') {
    APIURL = request.headers.get('host');
  }
};

export function getAPIURL() {
  return APIURL;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  setAPIURL(request);

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('host', APIURL)

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    if (locale) {
      if (!request.nextUrl.pathname.startsWith('/img/')) {
        return NextResponse.redirect(
          new URL(`/${locale}/${pathname}`, request.url),
        );
      }
    }
  }
  return NextResponse.next({
    request: {

      headers: requestHeaders,
    },
  })
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
