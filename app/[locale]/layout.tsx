import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/NavBar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: 'ATHR - أثر',
  description:
    'Athr is a digital agency for web development, marketing and social media services',
}
const readex_pro = Readex_Pro({ subsets: ['latin'] })

import Providers from './providers'

const LOCALES = ['en', 'ar']

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }))
}

// Dynamically import needed messages for given locale
async function getMessages(locale: string) {
  // const messageModule = await import(
  //   `../../i18n/messages/${locale === 'en' ? 'en' : 'ar'}.json`
  // )

  // return messageModule.default

  if (locale === 'ar') {
    const messageModule = await import(`@/i18n/messages/ar.json`)
    return messageModule.default
  } else {
    const messageModule = await import(`@/i18n/messages/en.json`)
    return messageModule.default
  }
}
interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}
export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const messages = await getMessages(params.locale)
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={readex_pro.className}>
        <Providers messages={messages} locale={params.locale}>
          {/* <Suspense
          fallback={
            <div className="w-screen h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main-color"></div>
            </div>
          }
          > */}
          <NavBar />
          {children}
          <Contact />
          <Footer />
          <FloatingContactButton />
          {/* </Suspense> */}
        </Providers>
      </body>
    </html>
  )
}
