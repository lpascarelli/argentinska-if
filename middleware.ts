import createMiddleware from 'next-intl/middleware';
import { LANGUAGES } from './constants/languages';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LANGUAGES,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
