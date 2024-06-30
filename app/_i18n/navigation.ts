import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'
export const locales = ['en', 'ar'] as const
export const localePrefix = 'always' // Default
const arPrefix = '/ar'
const enPrefix = '/en'
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',
  '/services/online-stores': '/services/online-stores',
  '/services/web-development': '/services/web-development',
  '/services/social-media': '/services/social-media',
  '/services/programs-and-systems': '/services/programs-and-systems',
  '/services/seo': '/services/seo',
  '/learnings': '/learnings',
  // If locales use different paths, you can
  // specify each external path per locale.
  // '/': {
  //   en: '/en',
  //   ar: '/ar',
  // },
  // '/blog': {
  //   en: '/en/blog',
  //   ar: '/ar/blog',
  // },
  // '/services/online-stores': {
  //   en: '/en/services/online-stores',
  //   ar: '/ar/services/online-stores',
  // },
  // '/services/web-development': {
  //   en: '/en/services/web-development',
  //   ar: '/ar/services/web-development',
  // },
  // '/services/social-media': {
  //   en: '/en/services/social-media',
  //   ar: '/ar/services/social-media',
  // },
  // '/services/programs-and-systems': {
  //   en: '/en/services/programs-and-systems',
  //   ar: '/ar/services/programs-and-systems',
  // },
  // '/services/seo': {
  //   en: '/en/services/seo',
  //   ar: '/ar/services/seo',
  // },
  // '/learnings': {
  //   en: '/en/learnings',
  //   ar: '/ar/learnings',
  // },
} satisfies Pathnames<typeof locales>
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
export type Route =
  | '/'
  | '/blog'
  | '/services/online-stores'
  | '/services/web-development'
  | '/services/social-media'
  | '/services/programs-and-systems'
  | '/services/seo'
  | '/learnings'
