'use client'
import { useLocale } from 'next-intl'

interface LevelBadgeProps {
  className?: string
  level: string
}
export default function LevelBadge({ className, level }: LevelBadgeProps) {
  const locale = useLocale()
  return (
    <p
      className={`${className} bg-main-color/50 font-semibold text-main-dark rounded-full flex px-2 h-3 leading-none ${
        locale === 'ar'
          ? 'items-end justify-center'
          : 'items-center justify-center'
      } w-min`}
    >
      {level}
    </p>
  )
}
