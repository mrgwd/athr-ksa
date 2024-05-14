import { Metadata } from 'next'

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
  metadataBase: new URL('https://athr-ksa.com/images/images/'),
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
