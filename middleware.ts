import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
