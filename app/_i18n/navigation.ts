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
  '/blog/1': '/blog/1',
  '/services/online-stores': '/services/online-stores',
  '/services/web-development': '/services/web-development',
  '/services/social-media': '/services/social-media',
  '/services/programs-and-systems': '/services/programs-and-systems',
  '/services/seo': '/services/seo',
  '/learnings': '/learnings',
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
  | '/blog/1'
  | '/services/online-stores'
  | '/services/web-development'
  | '/services/social-media'
  | '/services/programs-and-systems'
  | '/services/seo'
  | '/learnings'
