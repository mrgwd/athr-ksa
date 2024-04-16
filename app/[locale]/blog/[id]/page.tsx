import Image from 'next/image'
import arTranslation from '@/i18n/messages/ar.json'
import { Metadata } from 'next'
import { Link1, Link21 } from 'iconsax-react'
const getIDs = async () => {
  const res = await import('@/i18n/messages/en.json')
  return res.default.blog.articles
}
export async function generateStaticParams() {
  const IDs = await getIDs()
  return Object.keys(IDs).map((id) => ({
    id,
  }))
}
export const metadata: Metadata = {
  title: `${arTranslation.blog.articles['1'].title} - مدونة أثر`,
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
  description: `${arTranslation.blog.articles['1'].body.slice(0, 100)}...`,
}
export default async function Article({ params }: any) {
  const id = params.id as keyof typeof arTranslation.blog.articles
  const article = arTranslation.blog.articles[`${id}`]
  return (
    <div className="container mb-8 mx-auto sm:my-16 px-4 sm:px-10 transition duration-500">
      <Image
        className="rounded-xl mb-8 sm:mb-12 sm:h-96 w-full object-cover"
        src={`/images/blog/${id}.jpg`}
        alt={article.title}
        width={800}
        height={600}
      />
      <div>
        <h1 className="text-2xl font-semibold mb-2">{article.title}</h1>
        <div className="text-gray-400 text-md mb-8 flex justify-between">
          <p>
            <span className="text-main-color">{article.category}</span> •{' '}
            {article.date}
          </p>
          <div className="felx">
            <Link1 variant="Linear" className="inline-block" />
            <span> مشاركة</span>
          </div>
        </div>
        <p className="max-w-4xll">{article.body}</p>
      </div>
    </div>
  )
}
// const handleGetArticle = () => {
//   if (locale === 'en') {
//     const article = enTranslation.blog.articles[`1`]
//     return article
//   } else {
//     const article = arTranslation.blog.articles[`1`]
//     return article
//   }
// }
