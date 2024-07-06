import {
  getUserIp,
  getEnglishArticles,
  getArabicArticles,
} from '@/app/_api/articles.api'
import Articles from '@/app/_components/blog/Articles'
import { Article } from '@/app/_types/articlesTypes'

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
  const userIp = await getUserIp()
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
      <Articles arabicArticles={arArticles} englishArticles={enArticles} />
    </div>
  )
}
