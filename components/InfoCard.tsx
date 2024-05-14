'use client'
import { Verify } from 'iconsax-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
interface InfoCardProps {
  name: string
  variant?: 'list' | 'default'
}
export default function InfoCard({ name, variant = 'default' }: InfoCardProps) {
  const t = useTranslations(`${name}`)
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-20">
      <Image
        src={`/images/images/${name.split('.')[0]}.webp`}
        alt="About"
        className="object-contain mt-12 lg:mt-0 w-[20rem] lg:w-[22rem] xl:w-[26rem]"
        width={384}
        height={384}
      />

      <div className="max-w-xl xl:max-w-2xl">
        <h3 className="mb-4 font-bold md:text-xl text-wd-service 2xl:text-2xl">
          {t('subHeading')}
        </h3>

        <div>
          {variant === 'list' ? (
            <ul className="list-disc list-inside">
              {[...Array(Number(t('count')))].map((item, index) => (
                <li
                  key={index}
                  className="text-main-dark mb-2 flex items-start gap-2 2xl:text-lg list-none"
                >
                  <Verify
                    className="min-w-6 mt-0.5 text-wd-service"
                    variant="Bulk"
                  />
                  <p>{t(`list.${index}`)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="lg:max-w-xlg text-justify text-main-dark 2xl:text-lg">
              {t('p2')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
