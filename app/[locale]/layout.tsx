import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContactButton from './components/FloatingContactButton'

const readex_pro = Readex_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Athr - أثر',
  description:
    'Athr is a digital agency for web development, marketing and social media services',
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
          <FloatingContactButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
