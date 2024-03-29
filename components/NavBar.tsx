'use client'
import { usePathname } from 'next/navigation'
import {
  // LanguageSwitcher,
  useLocale,
  useTranslations,
} from 'next-intl'
import { ArrowDown2 } from 'iconsax-react'
import Logo from './Logo'
import ListItem from './ListItem'
import DropMenu from './DropMenu'
import { useState } from 'react'
import SideMenu from './SideMenu'
import Switch from './Switch'
import { Link } from '@/i18n/navigation'

export default function NavBar() {
  const t = useTranslations()
  const loc = usePathname()
  const location = usePathname().split('services/')[1]
  const navCheck =
    location === 'online-stores/' ||
    location === 'web-development/' ||
    location === 'programs-and-systems/' ||
    location === 'social-media/'
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  const handleMenuDown = () => {
    setIsOpen(false)
  }
  const locale = useLocale()
  return (
    <>
      <nav
        className={`container ${
          navCheck && 'absolute -translate-x-1/2'
        }  left-1/2 top-0 z-40 mx-auto flex items-center justify-between px-8 pb-5 pt-8`}
      >
        <div
          className={`flex items-center sm:gap-12 md:gap-20 
        ${navCheck ? 'text-white' : ''}`}
        >
          <Logo />
          <ul className="hidden child:font-medium child:transition-all sm:flex sm:gap-6 md:gap-10">
            <ListItem>
              <Link href="/">{t('nav.home')}</Link>
            </ListItem>
            <ListItem>
              <p className="group cursor-pointer">
                {t('nav.profile.h1')}
                <ArrowDown2
                  variant="Bold"
                  className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
                />
              </p>
              <div
                className={`drop-menu-container relative w-0 h-0 overflow-hidden transition duration-200 hover:overflow-visible`}
              >
                <DropMenu handleMenuDown={handleMenuDown} />
              </div>
            </ListItem>
            <ListItem>
              <Link href="/blog">{t('nav.blog')}</Link>
            </ListItem>
            <ListItem>
              <a href="#contact">{t('nav.contact')}</a>
            </ListItem>
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
            className={`${isOpen ? 'rotate-45 left-1/2 top-1/2' : 'top-0'}`}
          ></span>
          <span
            className={`${isOpen ? 'opacity-0' : ''} top-1/2 -translate-y-1/2`}
          ></span>
          <span
            className={isOpen ? '-rotate-45 left-1/2 top-1/2' : 'bottom-0'}
          ></span>
        </div>
        <div
          className={`font-semibold hidden sm:block ${
            navCheck
              ? 'text-main-color lg:text-white'
              : loc === '/ar/' || loc === '/en/'
              ? 'lg:text-white text-main-color'
              : 'text-main-color'
          } `}
        >
          {/* <button lang={locale === 'en' ? 'ar' : 'en'} onClick={useLocale()}>
            {locale === 'en' ? 'En' : 'Ar'}
          </button> */}
          <Switch />
        </div>
      </nav>
      <SideMenu isOpen={isOpen} handleMenuDown={handleMenuDown} />
    </>
  )
}
