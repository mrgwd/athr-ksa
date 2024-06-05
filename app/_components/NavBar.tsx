'use client'
import { usePathname } from 'next/navigation'
import {
  // LanguageSwitcher,
  useTranslations,
} from 'next-intl'
import { ArrowDown2 } from 'iconsax-react'
import Logo from './Logo'
import DropMenu from './DropMenu'
import { useState } from 'react'
import SideMenu from './SideMenu'
import Switch from './Switch'
import { Link } from '@/app/_i18n/navigation'

export default function NavBar() {
  const t = useTranslations()
  const locale = usePathname()
  const location = usePathname()
  const navCheck = location.includes('/services/') ? true : false
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  const handleMenuDown = () => {
    setIsOpen(false)
  }
  return (
    <>
      <nav
        className={`container ${
          navCheck && 'absolute -translate-x-1/2'
        }  left-1/2 top-0 z-40 mx-auto flex items-center justify-between px-4 lg:px-8 pb-5 pt-8`}
      >
        <div
          className={`flex items-center sm:gap-8 md:gap-10 lg:gap-20 
        ${navCheck ? 'text-white' : ''}`}
        >
          <Logo />
          <ul
            className={`hidden child:font-medium child:child:transition-all sm:flex sm:gap-4 md:gap-8 lg:gap-10 ${
              navCheck
                ? 'child-hover:child:text-wd-service'
                : 'child-hover:child:text-main-color'
            }`}
          >
            <li>
              <Link href="/">{t('nav.home')}</Link>
            </li>
            <li className="group">
              <p className="service-btn cursor-pointer">
                {t('nav.profile.h1')}
                <ArrowDown2
                  variant="Bold"
                  className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
                />
              </p>
              <div className="drop-menu-container z-10 group-hover:w-[18.3rem] px-2 rounded-2xl group-hover:h-96 absolute w-0 h-0 overflow-hidden transition-all delay-100 duration-300">
                <DropMenu handleMenuDown={handleMenuDown} />
              </div>
            </li>
            <li>
              <Link href="/blog">{t('nav.blog')}</Link>
            </li>
            <li>
              <Link href="/learnings">{t('nav.learnings')}</Link>
            </li>
            <li>
              <a
                href={`${location.includes('blog') ? '/#contact' : '#contact'}`}
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>
        <div
          //ref={menuBtn}
          onClick={handleToggleMenu}
          className={`relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:block child:h-[0.2rem] child:w-8 child:rounded-full ${
            navCheck ? 'child:bg-white' : 'child:bg-main-color'
          }  child:duration-300 sm:hidden lg:child:bg-white`}
        >
          <span
            className={`${
              isOpen ? 'rotate-45 left-1/2 -translate-y-1/2 top-1/2' : 'top-0'
            }`}
          ></span>
          <span
            className={`${
              isOpen ? 'opacity-0' : 'opacity-100'
            } top-1/2 -translate-y-1/2`}
          ></span>
          <span
            className={
              isOpen
                ? '-rotate-45 left-1/2 translate-y-1/2 bottom-1/2'
                : 'bottom-0'
            }
          ></span>
        </div>
        <div
          className={`font-semibold hidden sm:block child-hover:underline ${
            navCheck ? 'text-white' : 'text-main-color'
          } `}
        >
          <Switch />
        </div>
      </nav>
      <SideMenu isOpen={isOpen} handleMenuDown={handleMenuDown} />
    </>
  )
}
