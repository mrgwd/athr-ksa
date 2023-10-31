import { useTranslations } from 'next-intl'
import { GlobalEdit, KeyboardOpen, Mobile, StatusUp } from 'iconsax-react'
import NavLink from './NavLink'

interface DropMenuProps {
  handleMenuDown?: () => void
}
export default function DropMenu({ handleMenuDown }: DropMenuProps) {
  const t = useTranslations('Index')
  return (
    <ul className="flex w-max flex-col rounded-3xl bg-white child:mt-2 child:child:inline-block child:cursor-pointer child:transition-all sm:top-full sm:block sm:gap-4 sm:px-4 sm:py-10 sm:shadow-lg">
      <li onClick={handleMenuDown}>
        <NavLink
          href="/online-stores"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <StatusUp variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op1')}</p>
        </NavLink>
      </li>
      <li onClick={handleMenuDown}>
        <NavLink
          href="/web-development"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <GlobalEdit variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op2')}</p>
        </NavLink>
      </li>
      <li className="w-full" onClick={handleMenuDown}>
        <NavLink
          href="/social-media"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <Mobile variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op3')}</p>
        </NavLink>
      </li>
      <li className="w-full" onClick={handleMenuDown}>
        <NavLink
          href="/programs-and-systems"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:hover:text-wd-service child:inline-block"
        >
          <KeyboardOpen variant="Linear" className="ml-3 text-main-dark" />
          <p className="text-main-dark">{t('nav.profile.op4')}</p>
        </NavLink>
      </li>
    </ul>
  )
}
