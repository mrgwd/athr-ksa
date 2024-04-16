import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: 'ATHR - أثر',
  keywords: [
    'مؤسسة اثر للتسويق الرقمي',
    'تصميم مواقع',
    'تحسين محركات البحث',
    'تصميم واجهات',
    'تصميم تطبيقات',
    'برمجة مواقع',
    'برمجة متاجر',
    'برمجة تطبيقات',
    'برمجة خاصة',
    'تسويق الكتروني',
    'حملات اعلانية',
    'تهيئة لمحركات البحث',
    'محتوى تسويقي',
    'محتوى اعلانى',
    'محتوى حصري',
    'موشن جرافيك',
    'هويات تجارية',
    'برامج محاسبية',
    'انظمة محاسبية',
  ],
  description:
    'نوفر لك أفضل استراتيجيات وحلول التجارة الإلكترونية من أفضل شركة تسويق إلكتروني والتي تساعدك على إدارة نشاطك التجاري بدقة وتحقيق أهدافك والخطة الموضوعة لضمان زيادة المبيعات واكتساب عملاء جدد لنمو تجارتك.',
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
          <Footer />
          <FloatingContactButton />
          {/* </Suspense> */}
        </Providers>
      </body>
    </html>
  )
}
