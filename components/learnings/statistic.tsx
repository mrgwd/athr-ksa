'use client'
import { useTranslations } from 'next-intl'

interface StatisticProps {
  name: string
}
export default function Statistic({ name }: StatisticProps) {
  const t = useTranslations(name)
  return (
    <p className="text-main-dark font-medium text-base lg:text-xl">
      <span className="text-main-color font-bold text-3xl">{t('number')}</span>
      <br />
      {t('text')}
    </p>
  )
}
