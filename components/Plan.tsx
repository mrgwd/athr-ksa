'use client'
import { Verify } from 'iconsax-react'
import { useTranslations, useLocale } from 'next-intl'
// import { useLocale } from 'next-intl'
type t = (s: string) => void
interface PlanProps {
  price: number | string
  plan: string
  isPop: boolean
  features: string[]
}
export default function Plan({ price, isPop, plan, features }: PlanProps) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <div className="relative flex flex-col items-start justify-between gap-4 text-white bg-wd-service sm:border-wd-service sm:text-wd-service rounded-3xl p-4 sm:items-center sm:rounded-3xl sm:border-2 sm:border-solid sm:bg-white sm:text-center md:p-6 lg:gap-6 xl:gap-8 xl:p-8">
      <div>
        <h2 className="text-lg font-medium lg:text-xl">
          <span className="text-3xl sm:hidden">
            {price}
            {typeof price === 'number' && t('OS.plans.currency')}{' '}
          </span>
          {t(`${plan}.planType`)}
        </h2>
        <p className="hidden text-4xl font-semibold sm:block lg:text-4xl">
          {price} {typeof price === 'number' && t('OS.plans.currency')}
        </p>
      </div>
      <div className="text-start">
        {features.map((feature: string) => (
          <div key={feature} className="flex gap-2">
            <div>
              <Verify variant="Bulk" />
            </div>
            <p>{t(`${plan}.features.${feature}`)}</p>
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className={`rounded-full bg-white py-2 sm:hover:bg text-wd-service sm:bg-wd-service self-stretch transition-all sm:text-white`}
      >
        {t('OS.plans.buyButton')}
      </a>
      <div
        className={`absolute ${
          locale === 'en' ? 'right-0 rotate-45' : 'left-0 -rotate-45'
        }  top-0 h-28 w-28 scale-90 text-center sm:right-0 sm:rotate-45 sm:scale-100 `}
      >
        <p
          className={` ${
            isPop ? '' : 'hidden'
          } rounded-full bg-main-color px-6 py-1 text-white sm:mt-0 `}
        >
          {t('OS.plans.pop')}
        </p>
      </div>
    </div>
  )
}
