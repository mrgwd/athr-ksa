'use client'
import { useLocale, useTranslations } from 'next-intl'
import ScrollIndicator from './ScrollIndicator'
import { useEffect } from 'react'

interface PageHeaderProps {
  name: string
  children: React.ReactNode
}
// interface PageHeaderProps {
//   params: { locale: string }
//   name: string
//   children: React.ReactNode
// }
// export default async function PageHeader({
//   params: { locale },
//   name,
//   children,
// }: PageHeaderProps) {
export default function PageHeader({ name, children }: PageHeaderProps) {
  const t = useTranslations(name)
  const locale = useLocale()
  useEffect(() => {
    if (locale === 'en') document.title = 'Athr | ' + t('heading')
  }, [])
  return (
    <>
      <div className="relative bg-gradient-to-t from-[#207465] to-[#60D9D0] py-16 text-white sm:pt-32 rounded-2xl border-[6px] border-white">
        <div className="flex justify-center">{children}</div>
        <div className="absolute bottom-0 mx-auto mb-12 w-full">
          <h2 className="mb-5 text-center text-2xl font-semibold md:mb-10 lg:text-4xl">
            {t('heading')}
          </h2>
          <p className="mx-auto max-w-xl text-center font-normal">
            {t('description')}
          </p>
        </div>
      </div>
      <ScrollIndicator variant="simple" />
    </>
  )
}
