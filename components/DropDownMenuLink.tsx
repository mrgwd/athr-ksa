import { Link, Route } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

interface DropDownMenuLinkProps {
  index: number
  children: React.ReactNode
  route: Route
  handleMenuDown: () => void
}
export default function DropDownMenuLink({
  index,
  children,
  route,
  handleMenuDown,
}: DropDownMenuLinkProps) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <li onClick={handleMenuDown}>
      <Link
        href={route}
        className="rounded-xl flex px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service"
      >
        <div className={locale === 'ar' ? 'ml-3 w-min' : 'mr-3'}>
          {children}
        </div>
        <p>{t(`nav.profile.op${index}`)}</p>
      </Link>
    </li>
  )
}
