import { Link, Route } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
interface ServiceCardProps {
  name: string
  className?: string
  link: Route
  children: React.ReactNode
}
export default function ServiceCard({
  name,
  className,
  link,
  children,
}: ServiceCardProps) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <Link href={link} className={className}>
      <div className="*:mx-auto *:h-20 *:w-12 *:sm:h-32 *:sm:w-24 *:md:w-32 *:lg:w-28">
        {children}
      </div>
      <div>
        <h3 className="text-md mt-2 font-bold sm:text-xl md:text-2xl">
          {t(`services.${name}.subHeading`)}
        </h3>
        <p className="text-sm font-normal mt-1 sm:mt-6 sm:text-base">
          {t(`services.${name}.caption`)}
        </p>
      </div>
      <span className="mt-8 hidden sm:block">
        {t(`services.${name}.readMore`)}
        <span
          className={`mr-2 inline-block ${
            locale === 'en' ? 'ml-2' : 'mr-2 rotate-180'
          }`}
        >
          &#10140;
        </span>
      </span>
    </Link>
  )
}
