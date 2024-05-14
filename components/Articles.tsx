'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import Featured from './Featured'
import Filters from './Filters'
import { Article } from '@/types/articlesTypes'
const articlesData = [
  {
    id: 'tech-1',
    title: 'The Best Tech Gadgets of 2021',
    category: 'tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/tech-1.jpg',
  },
  {
    id: 'tech-2',
    title: 'The Future of Tech: AI and Machine Learning',
    category: 'tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/tech-2.jpg',
  },
  {
    id: 'tech-3',
    title: 'The Best Tech Gadgets of 2021',
    category: 'tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/tech-3.jpg',
  },
  {
    id: 'tech-4',
    title: 'The Future of Tech: AI and Machine Learning',
    category: 'tech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/tech-4.jpg',
  },
  {
    id: 'design-1',
    title: 'The Best Design Trends of 2021',
    category: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/design-1.jpg',
  },
  {
    id: 'design-2',
    title: 'The Future of Design: UX and UI Trends',
    category: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Nulla facilisi. Donec pellentesque semper elit, quis aliquam nunc accumsan sit amet.',
    // image: '/images/design-2.jpg',
  },
]
interface ArticlesProps {
  arabicArticles: Article[]
  englishArticles: Article[]
}
export default function Articles({
  arabicArticles,
  englishArticles,
}: ArticlesProps) {
  const t = useTranslations('blog')
  const lcoale = useLocale()
  const articles = lcoale === 'ar' ? arabicArticles : englishArticles

  const [sortedArticles, setSortedArticles] = useState(articles)
  useEffect(() => {
    document.title = `${t('description')} - ${t('heading')}`
  }, [])

  // console.log('-> Data', arabicArticles)
  // console.log('-> Articles', articles)
  // console.log('->  Sorted Articles', sortedArticles)
  return (
    <div className="container mx-auto my-16 px-4 md:px-8 transition duration-500 md:mt-20">
      <div className="my-8">
        <h2 className="text-main-color font-medium text-3xl lg:text-5xl">
          {t('heading')}
        </h2>
        <p className="mt-4">{t('subHeading')}</p>
      </div>
      <Featured featuredArticles={articles.slice(0, 4)} />
      <hr className="my-12" />
      <div className="my-8 flex flex-col gap-6">
        <h2 className="text-main-color font-medium text-3xl lg:text-5xl">
          {t('explore.heading')}
        </h2>
        <Filters articles={articles} setSortedArticles={setSortedArticles} />
        {sortedArticles.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
            {sortedArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                variant="default"
                removeShadow={true}
              />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center">{t('noArticles')}</p>
        )}
      </div>
    </div>
  )
}
