'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import ArticleCard from '../ArticleCard'
import Featured from './Featured'
import Filters from './Filters'
import { Article } from '@/app/_types/articlesTypes'

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
