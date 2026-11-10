export const DEFAULT_LOCALE = 'ka';
export const ROUTED_LOCALES = ['en', 'ru', 'tr', 'zh-Hans', 'zh-Hant'] as const;

export type RoutedLocale = (typeof ROUTED_LOCALES)[number];

export function isRoutedLocale(locale: string): locale is RoutedLocale {
  return ROUTED_LOCALES.includes(locale as RoutedLocale);
}

export function getLocalizedHomePath(locale: string) {
  return isRoutedLocale(locale) ? `/${locale}` : '/';
}

export function getLocalizedAnchorPath(locale: string, anchor: string) {
  const hash = anchor.startsWith('#') ? anchor : `#${anchor}`;
  return `${getLocalizedHomePath(locale)}${hash}`;
}

export function getRouteLocaleFromPath(pathname: string) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment && isRoutedLocale(firstSegment) ? firstSegment : null;
}

export const ALL_LOCALES = [DEFAULT_LOCALE, ...ROUTED_LOCALES] as const;
export function localizedPath(locale: string, path: string) {
  return `${locale === DEFAULT_LOCALE ? '' : `/${locale}`}${path}`;
}
export function languageAlternates(path = '/') {
  return Object.fromEntries([...ALL_LOCALES.map(locale => [locale, `https://samebacathedral.com${localizedPath(locale, path)}`]), ['x-default', `https://samebacathedral.com${path}`]]);
}
