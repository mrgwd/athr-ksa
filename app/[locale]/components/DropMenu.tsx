//'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { GlobalEdit, Mobile, StatusUp } from 'iconsax-react'
import NavLink from './NavLink'

export default function DropMenu() {
  const t = useTranslations('Index')
  return (
    <ul className="flex w-max flex-col rounded-3xl bg-white child:mt-2 child:child:inline-block child:cursor-pointer child:transition-all sm:top-full sm:block sm:gap-4 sm:px-4 sm:py-10 sm:shadow-lg">
      <li /*onClick={() => console.log('menu clicked') menuDown()}*/>
        <NavLink
          href="/OSservices"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-dm-service/10 child:inline-block"
        >
          <StatusUp variant="Linear" className="ml-3 text-dm-service" />
          <p className="text-dm-service">{t('nav.profile.op1')}</p>
        </NavLink>
      </li>
      <li /*onClick={() => console.log('menu clicked') menuDown()}*/>
        <NavLink
          href="/WDservices"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:inline-block"
        >
          <GlobalEdit variant="Linear" className="ml-3 text-wd-service" />
          <p className="text-wd-service">{t('nav.profile.op2')}</p>
        </NavLink>
      </li>
      <li
        className="w-full"
        /*onClick={() => console.log('menu clicked') menuDown()}*/
      >
        <NavLink
          href="/MAservices"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-ma-service/10 child:inline-block"
        >
          <Mobile variant="Linear" className="ml-3 text-ma-service" />
          <p className="text-ma-service">{t('nav.profile.op3')}</p>
        </NavLink>
      </li>
    </ul>
  )
}
