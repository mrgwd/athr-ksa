import { Link, Route } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
interface ServiceCardProps {
  name: string
  link: Route
  children: React.ReactNode
}
export default function ServiceCard({
  name,
  link,
  children,
}: ServiceCardProps) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <div className="rounded-2xl bg-slate-50 overflow-hidden border border-slate-100 relative">
      <div className="p-8 sm:p-12 bg-main-color/25 absolute top-full left-0 -translate-y-2/3 blur-3xl rounded-full"></div>
      <div className="size-16 min-w-16 relative *:text-main-med *:size-8 *:absolute *:top-1/2 *:left-1/2 *:-translate-y-1/2 *:-translate-x-1/2 rounded-full bg-main-color/10 block sm:inline-block ">
        {children}
      </div>
      <div>
        <h3 className="text-md text-main-dark mt-2 font-bold sm:text-xl">
          {t(`services.${name}.subHeading`)}
        </h3>
        <p className="text-slate-600 font-normal mt-1 sm:mt-6 sm:text-base">
          {t(`services.${name}.caption`)}
        </p>
      </div>
      <Link
        href={link}
        className="mt-8 group font-medium hidden text-main-med bg-main-color/10 py-2 px-5 rounded-full sm:inline-block"
      >
        {t(`services.${name}.readMore`)}
        <span
          className={`inline-block transition-all ${
            locale === 'en' ? 'ml-2  group-hover:ml-4' : 'mr-2 group-hover:mr-4'
          }`}
        >
          &#129140;
        </span>
      </Link>
    </div>
  )
}
