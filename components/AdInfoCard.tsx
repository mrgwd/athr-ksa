'use client'
import { useTranslations } from 'next-intl'
interface InfoCardProps {
  plan: string
  features: string[]
}
export default function AdInfoCard({ plan, features }: InfoCardProps) {
  const t = useTranslations()
  return (
    <div className="relative flex flex-col justify-between gap-4 rounded-3xl bg-wd-service/10 p-4 text-center text-wd-service sm:items-center sm:rounded-3xl md:p-6 lg:gap-6 xl:gap-8 xl:p-8">
      <div>
        <h2 className="text-start text-lg font-medium sm:text-center lg:text-xl">
          <span className="text-3xl sm:hidden">
            {t(`SD.sponsors.${plan}.heading`)}
          </span>{' '}
          {t(`SD.sponsors.heading`)}
        </h2>
        <p className="hidden text-4xl font-semibold sm:block lg:text-4xl">
          {t(`SD.sponsors.${plan}.heading`)}
        </p>
      </div>
      <div className="text-start">
        <div className="info-card flex w-full items-start gap-6 text-center">
          {features.map((_, index: number) => (
            <>
              <div key={Math.random()}>
                <h3>{t(`SD.sponsors.${plan}.subHeadings.s${index + 1}`)}</h3>
                <div className="flex flex-col gap-1">
                  <p>{t(`SD.sponsors.google.i0u.s0u`)}</p>
                  <p>{t(`SD.sponsors.${plan}.i${index}u.s0u`)}</p>
                  <p>{t(`SD.sponsors.${plan}.i${index}u.s1u`)}</p>
                  <p>{t(`SD.sponsors.${plan}.i${index}u.s2u`)}</p>
                  <p>{t(`SD.sponsors.${plan}.i${index}u.s3u`)}</p>
                  <p>{t(`SD.sponsors.${plan}.i${index}u.s4u`)}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
