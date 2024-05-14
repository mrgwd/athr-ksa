import { Metadata } from 'next'
import Articles from '@/components/Articles'
import { Article } from '@/types/articlesTypes'
import { title } from 'process'
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
export default async function Page() {
  const getUserIp = async () => {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip
  }
  const userIp = await getUserIp()

  const getArabicArticles = async () => {
    const formData = new FormData()
    formData.append('ip_address', userIp)
    const res = await fetch('https://new.athr-ksa.com/api/all-artical-arabic', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    return data.data
  }
  const getEnglishArticles = async () => {
    const formData = new FormData()
    formData.append('ip_address', userIp)
    const res = await fetch(
      'https://new.athr-ksa.com/api/all-artical-english',
      {
        method: 'POST',
        body: formData,
      },
    )
    const data = await res.json()
    return data.data
  }

  const arabicArticles = await getArabicArticles()
  const englishArticles = await getEnglishArticles()

  return (
    <Articles
      arabicArticles={arabicArticles}
      englishArticles={englishArticles}
    />
  )
}
