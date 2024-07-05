'use client'

import { useEffect } from 'react'
import ArticleCard from '../common/ArticleCard'
import Section from '../common/Section'
import { useLocale } from 'next-intl'
import { Article } from '@/app/_types/articlesTypes'
import Head from 'next/head'
interface RecommendationsProps {
  arabicArticles: Article[]
  englishArticles: Article[]
}
export default function Recommendations({
  arabicArticles,
  englishArticles,
}: RecommendationsProps) {
  const lcoale = useLocale()
  const articles = lcoale === 'ar' ? arabicArticles : englishArticles
  // useEffect(() => {
  //   document.title = `${documentTitle} - مدونة أثر`
  //   // document.description = `${documentTitle} - مدونة أثر`
  // })
  return (
    <>
      <Section name="blog.recommendations">
        <div className="hidden md:grid grid-cols-1 gap-4 md:grid-cols-3">
          <ArticleCard article={articles[0]} />
          <ArticleCard article={articles[1]} />
        </div>
        <div className="md:hidden grid grid-cols-1 gap-2 md:grid-cols-3">
          <ArticleCard article={articles[0]} variant="small" removeShadow />
          <ArticleCard article={articles[1]} variant="small" removeShadow />
        </div>
      </Section>
    </>
  )
}
