export const DEFAULT_LOCALE = 'ka';
export const ROUTED_LOCALES = ['en', 'ru'] as const;

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
