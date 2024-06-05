import { getTranslations } from '@/app/_i18n'

interface StatisticProps {
  name: string
  locale: string
}
export default async function Statistic({ name, locale }: StatisticProps) {
  const t = await getTranslations({ locale, namespace: name })
  return (
    <p className="text-main-dark font-medium text-base lg:text-xl">
      <span className="text-main-color font-bold text-3xl">{t('number')}</span>
      <br />
      {t('text')}
    </p>
  )
}
