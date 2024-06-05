import { Article } from '@/app/_types/articlesTypes'

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
const arabicArticles = await getArabicArticles()

export async function generateStaticParams() {
  const articles = await arabicArticles.map(
    (article: Article) => article.category.url_name,
  )
  return articles.map((articlePageId: string) => ({
    articlePageId,
  }))
}
interface RootLayoutProps {
  children: React.ReactNode
  params: { articlePageId: string }
}
export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
