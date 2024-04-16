import Featured from '@/components/Featured'
import Filters from '@/components/Filters'
import ArticleCard from '@/components/ArticleCard'
import { Metadata } from 'next'
import Articles from '@/components/Articles'
export const metadata: Metadata = {
  title: 'المدونة - أثر',
  keywords: [
    'مؤسسة اثر للتسويق الرقمي',
    'مدونة أثر',
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
    'في مدونة أثر، نشاركك أحدث الأفكار والمقالات حول التسويق الرقمي، تصميم وبرمجة المواقع، تصميم التطبيقات، والكثير من المواضيع الأخرى المتعلقة بالتكنولوجيا والتسويق الرقمي.',
}
export default function Page() {
  return <Articles />
}
