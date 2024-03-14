import { useTranslations } from 'next-intl'
import { GlobalEdit, KeyboardOpen, Mobile, StatusUp } from 'iconsax-react'
// import NavLink from './NavLink'
import { Link } from '@/i18n/navigation'

interface DropMenuProps {
  handleMenuDown?: () => void
}
export default function DropMenu({ handleMenuDown }: DropMenuProps) {
  const t = useTranslations()
  return (
    <ul className="flex w-max flex-col rounded-3xl bg-white child:mt-2 child:child:inline-block child:cursor-pointer child:transition-all sm:top-full sm:block sm:gap-4 sm:px-4 sm:py-10 sm:shadow-lg">
      <li onClick={handleMenuDown}>
        <Link
          href="/services/online-stores"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <StatusUp variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op1')}</p>
        </Link>
      </li>
      <li onClick={handleMenuDown}>
        <Link
          href="/services/web-development"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <GlobalEdit variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op2')}</p>
        </Link>
      </li>
      <li className="w-full" onClick={handleMenuDown}>
        <Link
          href="/services/social-media"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <Mobile variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op3')}</p>
        </Link>
      </li>
      <li className="w-full" onClick={handleMenuDown}>
        <Link
          href="/services/programs-and-systems"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <KeyboardOpen variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op4')}</p>
        </Link>
      </li>
    </ul>
  )
}
