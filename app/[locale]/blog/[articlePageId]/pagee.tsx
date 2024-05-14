import Articles from '@/components/Articles'
import { Article } from '@/types/articlesTypes'

const ids = [
  'tech',
  'design',
  'Marketing',
  'marketing',
  'development',
  'web',
  'mobile',
  'flutter',
]
export async function generateStaticParams() {
  return ids.map((articlePageId) => ({
    articlePageId,
  }))
}

export default async function Page({
  params,
}: {
  params: { articlePageId: string; locale: string }
}) {
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

  const englishArticles = await getEnglishArticles()
  const arabicArticles = await getArabicArticles()

  const arArticles = arabicArticles.filter(
    (article: Article) => article.category.id === Number(params.articlePageId),
  )
  const enArticles = englishArticles.filter(
    (article: Article) => article.category.id === Number(params.articlePageId),
  )
  return (
    <div>
      {/* <Articles arabicArticles={arArticles} englishArticles={enArticles} /> */}
    </div>
  )
}
