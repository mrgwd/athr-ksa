'use client'
import { useEffect, useState } from 'react'
import ArticleCard from '../common/ArticleCard'
import { StaticImageData } from 'next/image'
import { Article } from '@/app/_types/articlesTypes'

interface FeaturedProps {
  featuredArticles: Article[]
}

export default function Featured({ featuredArticles }: FeaturedProps) {
  const [current, setCurrent] = useState<number>(0)

  const sortedArticles = [
    featuredArticles[current],
    ...featuredArticles.filter((_, index) => index !== current),
  ]
  const next = () => {
    setCurrent((prev) => (prev < featuredArticles.length - 1 ? prev + 1 : 0))
  }
  useEffect(() => {
    const interval = setInterval(next, 8000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="md:hidden child:my-2">
        {sortedArticles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            variant={index === 0 ? 'default' : 'small'}
            removeShadow={true}
          />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-20 xl:gap-32">
        {featuredArticles.map(
          (article, index) =>
            index === current && (
              <ArticleCard
                key={index}
                article={article}
                variant={index === current ? 'default' : 'small'}
                removeShadow={true}
              />
            ),
        )}
        <div className="flex flex-col gap-4 child:pp-4 child-hover:bgg-gray-100">
          {featuredArticles.map(
            (article, index) =>
              index !== current && (
                <ArticleCard
                  key={index}
                  article={article}
                  variant={index === current ? 'default' : 'small'}
                  removeShadow={true}
                />
              ),
          )}
        </div>
      </div>
    </>
  )
}
