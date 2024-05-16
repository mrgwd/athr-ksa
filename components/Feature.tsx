'use client'
import { useTranslations } from 'next-intl'

interface FeatureProps {
  feature: string
  children: React.ReactNode
}
export default function Feature({ feature, children }: FeatureProps) {
  const t = useTranslations()
  return (
    <div className="max-sm:rounded-xl max-sm:border border-slate-100 max-sm:p-4 max-sm:bg-slate-50 max-sm:flex max-sm:text-start text-center gap-2 justify-start">
      <div className="*:mx-auto *:size-12 text-wd-service *:md:size-20">
        {children}
      </div>
      <div>
        <h4 className="text-md sm:my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
          {t(`${feature}.subHeading`)}
        </h4>
        <p className="mx-auto font-normal text-main-dark sm:text-sm md:text-base lg:max-w-xs">
          {t(`${feature}.description`)}
        </p>
      </div>
    </div>
  )
}
