import Link from '@/app/_i18n/Link'
import { Route } from '@/app/_i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

interface DropDownMenuLinkProps {
  index: number
  children: React.ReactNode
  route: Route
}
export default function DropDownMenuLink({
  index,
  children,
  route,
}: DropDownMenuLinkProps) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <Link
      href={route}
      className="rounded-xl flex px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service"
    >
      <div className={locale === 'ar' ? 'ml-3 w-min' : 'mr-3'}>{children}</div>
      <p>{t(`nav.profile.op${index}`)}</p>
    </Link>
  )
}
