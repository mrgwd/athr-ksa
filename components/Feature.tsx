import { useTranslations } from 'next-intl'

interface FeatureProps {
  feature: string
  children: React.ReactNode
}
export default function Feature({ feature, children }: FeatureProps) {
  const t = useTranslations()
  return (
    <div>
      <div className="*:mx-auto *:size-12 text-wd-service *:md:size-20">
        {children}
      </div>
      <div className="text-center">
        <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
          {t(`features.${feature}.subHeading`)}
        </h4>
        <p className="mx-auto text-xs font-normal text-main-dark sm:text-sm md:text-base lg:max-w-xs">
          {t(`features.${feature}.caption`)}
        </p>
      </div>
    </div>
  )
}
