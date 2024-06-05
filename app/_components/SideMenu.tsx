'use client'
import { useTranslations } from 'next-intl'
import { ArrowDown2 } from 'iconsax-react'
import DropMenu from './DropMenu'
import { useEffect, useState } from 'react'
import Switch from './Switch'
import { Link } from '@/app/_i18n/navigation'

interface SideMenuProps {
  isOpen: boolean
  handleMenuDown: () => void
}
export default function SideMenu({ isOpen, handleMenuDown }: SideMenuProps) {
  const t = useTranslations()
  const year: number = new Date().getFullYear()
  const [isSubOpen, setIsSubOpern] = useState(false)

  const handleToggleSubmenu = () => {
    setIsSubOpern((isSubOpen) => !isSubOpen)
  }

  useEffect(() => {
    const bodyClassList = document.body.classList
    if (isOpen) bodyClassList.add('overflow-hidden')
    else bodyClassList.remove('overflow-hidden')
  }, [isOpen])
  return (
    <div
      className={`${
        isOpen ? 'w-screen' : 'w-0'
      } absolute h-screen mt-28 left-0 top-0 z-30 overflow-x-hidden transition-all duration-300 sm:hidden`}
    >
      <div
        className={`rounded-b-3x  ${
          isOpen ? 'right-0' : 'right-full'
        }  top-0 h-full w-full shadow-xl transition-all duration-300`}
      >
        <div className="flex h-[calc(100vh-115px)] overflow-y-scroll flex-col gap-8 bg-slate-50 p-10 sm:gap-4">
          <ul>
            <li
              className="mb-12 hover:text-main-color"
              onClick={handleMenuDown}
            >
              <Link href="/">{t('nav.home')}</Link>
            </li>
            <li
              className="group cursor-pointer hover:text-main-color"
              //ref={subMenuButton}
              onClick={() => handleToggleSubmenu()}
            >
              {t('nav.profile.h1')}
              <ArrowDown2
                variant="Bold"
                className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
              />
            </li>
            <li
              className={`h-0${
                isSubOpen ? 'h-auto' : ' overflow-hidden'
              }  transition-all duration-300`}
            >
              <DropMenu handleMenuDown={handleMenuDown} />
            </li>
            <li
              className="my-12 hover:text-main-color"
              onClick={handleMenuDown}
            >
              <Link href="/blog">{t('nav.blog')}</Link>
            </li>
            <li
              className="mb-12 hover:text-main-color"
              onClick={handleMenuDown}
            >
              <a href="#contact">{t('nav.contact')}</a>
            </li>
          </ul>
          <hr />
          <div>
            <Switch />
          </div>
          <p className="text-center whitespace-nowrap">
            {t('footer.heading')} {year}
          </p>
        </div>
      </div>
    </div>
  )
}
