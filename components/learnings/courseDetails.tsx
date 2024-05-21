'use client'
import { useTranslations } from 'next-intl'
interface CourseDetailsProps {
  children: React.ReactNode
  data: {
    name: string
    number: number
  }
}
export default function CourseDetails({ children, data }: CourseDetailsProps) {
  const t = useTranslations('learnings.courses')
  return (
    <div className="flex gap-1 text-main-dark max-sm:text-sm">
      <div className="text-main-color">{children}</div>
      <p className="text-nowrap">
        {t(`1.details.${data.name}`)} {data.number}
      </p>
    </div>
  )
}
