import { Verify } from 'iconsax-react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
interface PlanProps {
  price: number
  plan: string
  isPop: boolean
  features: string[]
}
export default function Plan({ price, isPop, plan, features }: PlanProps) {
  const t = useTranslations('Index')
  const locale = useLocale()
  return (
    <div
      className={`relative flex flex-col items-start justify-between gap-4 text-white ${
        plan[0] === 'O'
          ? 'bg-dm-service sm:border-dm-service sm:text-dm-service'
          : plan[0] === 'W'
          ? 'bg-wd-service sm:border-wd-service sm:text-wd-service'
          : 'bg-ma-service sm:border-ma-service sm:text-ma-service'
      } rounded-3xl p-4 sm:items-center sm:rounded-3xl sm:border-2 sm:border-solid sm:bg-white sm:text-center md:p-6 lg:gap-6 xl:gap-8 xl:p-8`}
    >
      <div>
        <h2 className="text-lg font-medium lg:text-xl">
          <span className="text-3xl sm:hidden">
            {price}
            {t('OS.plans.currency')}{' '}
          </span>
          {t(`${plan}.planType`)}
        </h2>
        <p className="hidden text-4xl font-semibold sm:block lg:text-4xl">
          {price} {t('OS.plans.currency')}
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
      <button
        className={`rounded-full bg-white py-2 ${
          plan[0] === 'O'
            ? 'text-dm-service sm:bg-dm-service sm:hover:bg-[#5162f5]'
            : plan[0] === 'W'
            ? 'sm:hover:bg text-wd-service sm:bg-wd-service'
            : 'sm:hover:bg text-ma-service sm:bg-ma-service'
        } self-stretch transition-all sm:text-white`}
      >
        {t('OS.plans.buyButton')}
      </button>
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
