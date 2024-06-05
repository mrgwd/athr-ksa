import Image from 'next/image'
import { Metadata } from 'next'
import ShareButton from '@/app/_components/shareButton'
import Recommendations from '@/app/_components/blog/Recommendations'
import Link from 'next/link'
import { Article as ArticleType, LinkInBody } from '@/app/_types/articlesTypes'

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
  const res = await fetch('https://new.athr-ksa.com/api/all-artical-english', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  return data.data
}

const arabicArticles = await getArabicArticles()
const englishArticles = await getEnglishArticles()

export async function generateStaticParams() {
  const IDs = await arabicArticles.map((article: ArticleType) => article.id)
  return IDs.map((id: string) => ({
    id: `${id}`,
  }))
}
interface Props {
  locale: 'ar' | 'en'
  id: number
}

export async function generateMetadata({
  params,
}: {
  params: Props
}): Promise<Metadata> {
  const article = (
    params.locale === 'ar' ? arabicArticles : englishArticles
  ).find((article: ArticleType) => Number(article.id) === Number(params.id))
  return {
    title: `${article.title} - ${
      params.locale === 'ar' ? 'مدونة أثر' : 'ATHR Blog'
    }`,
    description: `${article.body.slice(0, 150)}...`,
    alternates: {
      canonical: `https://athr-ksa.com/ar/blog/${article.category.url_name}/articles/${params.id}`,
      languages: {
        en: `https://athr-ksa.com/en/blog/${article.category.url_name}/articles/${params.id}`,
        'ar-SA': `https://athr-ksa.com/ar/blog/${article.category.url_name}/articles/${params.id}`,
      },
    },
    metadataBase: new URL('https://new.athr-ksa.com/'),
    openGraph: {
      images: `/${article.imge}`,
    },
  }
}
export default async function Article({ params }: { params: Props }) {
  const id = params.id as number
  const lang = params.locale

  const articles = lang === 'ar' ? arabicArticles : englishArticles

  const article = articles.find(
    (article: ArticleType) => Number(article.id) === Number(id),
  )
  let linkedBody = article.body
  const getLinks = async () => {
    const res = await fetch(
      `https://new.athr-ksa.com/api/all-${
        lang === 'ar' ? 'arabic' : 'english'
      }-links`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await res.json()
    return data.data
  }
  const links: LinkInBody[] = await getLinks()

  links.forEach((link: LinkInBody) => {
    const regex = new RegExp(link.wordToLink, 'g')
    linkedBody = linkedBody.replaceAll(
      regex,
      `<a href="${link.url}">${link.wordToLink}</a>`,
    )
  })
  console.log(articles)
  console.log('linkedBody', linkedBody)
  return (
    <div className="container mb-8 mx-auto sm:my-16 px-4 lg:px-8 transition duration-500">
      <Image
        className="rounded-xl mb-8 sm:mb-12 sm:h-96 w-full object-cover"
        src={`https://new.athr-ksa.com/${article.imge}`}
        alt={article?.title || 'title'}
        width={800}
        height={600}
      />
      <div>
        <h1 className="text-2xl font-semibold mb-2">{article?.title}</h1>
        <div className="text-gray-400 text-md mb-8 flex justify-between">
          <p>
            <Link
              href={`/${lang}/blog/${article?.category.id}`}
              className="text-main-color hover:underline"
            >
              {article?.category.name}
            </Link>{' '}
            • {article?.date}
          </p>
          <ShareButton />
        </div>
        <p
          className="max-w-4xll child:text-main-color child-hover:underline"
          dangerouslySetInnerHTML={{ __html: linkedBody }}
        ></p>
        <span className="text-main-med hover:underline"></span>
      </div>
      <hr className="mt-16" />
      <Recommendations
        arabicArticles={arabicArticles}
        englishArticles={englishArticles}
      />
    </div>
  )
}
