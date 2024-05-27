import About from '@/components/About'
import BlogSection from '@/components/BlogSection'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'
import Features from '@/components/Features'
import Home from '@/components/Home'
import HowWeWork from '@/components/HowWeWork'
import Newsletter from '@/components/Newsletter'
import ServicesSection from '@/components/ServicesSection'
import { Metadata } from 'next'
const arabicMetadata: Metadata = {
  title: 'أثر - نقدم خدمات تسويق وحلول برمجية متكاملة',
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
  metadataBase: new URL('https://athr-ksa.com/images/images/'),
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}
const englishMetadata: Metadata = {
  title:
    'ATHR - We Provide Marketing Services and Integrated Software Solutions',
  keywords: [
    'Athar digital marketing agency',
    'web design',
    'SEO',
    'UI/UX design',
    'app design',
    'web development',
    'e-commerce',
    'app development',
    'custom development',
    'digital marketing',
    'advertising',
    'SEO optimization',
    'marketing content',
    'advertising content',
    'exclusive content',
    'motion graphics',
    'brand identities',
    'accounting software',
    'accounting systems',
  ],
  description:
    'We provide you with the best e-commerce strategies and solutions from the best digital marketing company that helps you manage your business activities accurately and achieve your goals and the plan set to ensure increased sales and acquiring new customers for the growth of your business.',
  metadataBase: new URL('https://athr-ksa.com/images/images/'),
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}
export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return params.locale === 'ar' ? arabicMetadata : englishMetadata
}
export default async function Page() {
  return (
    <main>
      <Home />
      <About />
      <ServicesSection />
      <Features />
      <BlogSection />
      <HowWeWork />
      <Clients />
      <FAQsSection name="FAQsSection" />
      <Contact />
      <Newsletter />
    </main>
  )
}
