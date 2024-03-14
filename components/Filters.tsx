import { useTranslations } from 'next-intl'

interface FiltersProps {
  filters: number[]
  handleAddFilter: (filter: number) => void
  handleRemoveFilter: (filter: number) => void
}
export default function Filters({
  filters,
  handleAddFilter,
  handleRemoveFilter,
}: FiltersProps) {
  const t = useTranslations('blog.explore.filters')
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
      ))}
    </div>
  )
}
