'use client'
import { useTranslations } from 'next-intl'
import img1 from '@/public/images/blog/1.jpg'
import Featured from '@/components/Featured'
import { useEffect, useState } from 'react'
import Filters from '@/components/Filters'
import ArticleCard from '@/components/ArticleCard'
const articles = [
  {
    id: '1',
    img: img1,
  },
  {
    id: '2',
    img: img1,
  },
  {
    id: '3',
    img: img1,
  },
  {
    id: '1',
    img: img1,
  },
  {
    id: '3',
    img: img1,
  },
  {
    id: '1',
    img: img1,
  },
  {
    id: '2',
    img: img1,
  },
  {
    id: '1',
    img: img1,
  },
  {
    id: '3',
    img: img1,
  },
  {
    id: '1',
    img: img1,
  },
  {
    id: '3',
    img: img1,
  },
  {
    id: '1',
    img: img1,
  },
]
export default function Page() {
  const t = useTranslations('blog')
  const [filters, setFilters] = useState<number[]>([0])
  const [sortedArticles, setSortedArticles] = useState(articles)
  console.log(sortedArticles)
  useEffect(() => {
    const filteredArticles = filters.map((filter) =>
      articles.filter(
        (article) =>
          t(`explore.filters.${filter}`) ===
          t(`articles.${article.id}.category`),
      ),
    )
    setSortedArticles(
      filters.length === 1 && filters[0] === 0
        ? articles
        : filteredArticles.flat(),
    )
  }, [filters, t])
  const handleAddFilter = (index: number) => {
    if (index === 0) {
      setFilters([0])
    } else {
      const newFilters = filters.filter((f) => f !== 0)
      newFilters.push(index)
      setFilters(newFilters)
    }
  }
  const handleRemoveFilter = (index: number) => {
    const newFilters = filters.filter((f) => f !== index)
    if (newFilters.length === 0) {
      newFilters.push(0)
    }
    setFilters(newFilters)
  }
  console.log(filters)
  return (
    <div className="container mx-auto my-16 px-4 transition duration-500 md:mt-20">
      <div className="my-8">
        <h2 className="text-main-color font-medium text-3xl lg:text-5xl">
          {t('heading')}
        </h2>
        <p className="mt-4">{t('subHeading')}</p>
      </div>
      <Featured featuredArticles={articles} />
      <hr className="my-12" />
      <div className="my-8 flex flex-col gap-6">
        <h2 className="text-main-color font-medium text-3xl lg:text-5xl">
          {t('explore.heading')}
        </h2>
        <Filters
          filters={filters}
          handleAddFilter={handleAddFilter}
          handleRemoveFilter={handleRemoveFilter}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
          {sortedArticles.map((article, index) => (
            <ArticleCard
              key={index}
              img={article.img}
              articleID={article.id}
              variant="default"
              removeShadow={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
