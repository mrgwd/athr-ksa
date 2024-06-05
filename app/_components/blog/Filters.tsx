'use client'
import { useTranslations } from 'next-intl'
import arTranslations from '@/app/_i18n/messages/ar.json'
import { useEffect, useState } from 'react'
import { Article } from '@/app/_types/articlesTypes'
interface FiltersProps {
  articles: Article[]
  setSortedArticles: (articles: Article[]) => void
  // filters: number[]
  // handleAddFilter: (filter: number) => void
  // handleRemoveFilter: (filter: number) => void
}

// interface category {
//   id: number
//   name: string
//   created_at: string
//   updated_at: string
// }
export default function Filters({ articles, setSortedArticles }: FiltersProps) {
  const t = useTranslations('blog.explore.filters')
  const [filters, setFilters] = useState<number[]>([0])
  useEffect(() => {
    const filteredArticles = filters.map((filter) =>
      articles.filter(
        (article) => t(`${filter}`) === article.category.name?.toLowerCase(),
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
    <div className="flex flex-wrap gap-3 mb-8">
      {Array.from({ length: 7 }).map((_, i) => (
        <button
          key={i}
          className={`rounded-lg px-3 py-1.5 transition-all ${
            filters.includes(i)
              ? 'text-main-color bg-main-color/15 hover:bg-main-color/25'
              : 'text-gray-400 bg-gray-100 hover:bg-gray-200'
          } `}
          onClick={
            filters.includes(i)
              ? () => handleRemoveFilter(i)
              : () => handleAddFilter(i)
          }
        >
          {t(`${i}`)}
        </button>
        // <div key={i}></div>
      ))}
    </div>
  )
}
