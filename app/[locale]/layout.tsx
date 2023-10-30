import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'

import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { notFound } from 'next/navigation'
import NavBar from './components/NavBar'
import LocaleSwitcher from './components/LocaleSwitcher'
import Contact from './components/Contact'
import Footer from './components/Footer'

const locales = ['ar', 'en']

const readex_pro = Readex_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages()
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={readex_pro.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Contact />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
