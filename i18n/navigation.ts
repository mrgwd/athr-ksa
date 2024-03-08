import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'
export const locales = ['en', 'ar'] as const
export const localePrefix = 'always' // Default
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',
  '/online-stores': '/online-stores',
  '/web-development': '/web-development',
  '/social-media': '/social-media',
  '/programs-and-systems': '/programs-and-systems',
  // If locales use different paths, you can
  // specify each external path per locale.
  // '/online-stores': {
  //   en: '/en/online-stores',
  //   ar: '/ar/online-stores',
  // },
} satisfies Pathnames<typeof locales>
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
export type Route =
  | '/'
  | '/blog'
  | '/online-stores'
  | '/web-development'
  | '/social-media'
  | '/programs-and-systems'
