//import { RefObject, useEffect, useRef } from "react";
'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
//import { Link, useLocation } from "react-router-dom";
import {
  useTranslations,
  useLocale,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import { ArrowDown2 } from 'iconsax-react'
//import DropMenu from "./DropMenu";
import Image from 'next/image'
import Logo from './Logo'
import ListItem from './ListItem'
import DropMenu from './DropMenu'
import Switch from './Switch'
import NavLink from './NavLink'
//import Link from "next/link";
// interface Props {
//   getMenuBtn: (menuBtn: any) => RefObject<HTMLDivElement>;
//   currentLang: string;
//   handleChangeLang: (currentLang: string) => void;
// }
export default function NavBar(/*{ getMenuBtn, currentLang, handleChangeLang }: Props*/) {
  //const menuBtn: RefObject<HTMLDivElement> = useRef(null);
  // useEffect(() => {
  //   getMenuBtn(menuBtn.current);
  // });
  const t = useTranslations('Index')
  const locale = useLocale()
  const location = usePathname()
  const messages = useMessages()
  return (
    //<NextIntlClientProvider locale={locale} messages={messages}>
    <nav className="container absolute left-1/2 top-0 z-40 mx-auto flex -translate-x-1/2 items-center justify-between px-8 pb-5 pt-8">
      <div
        className={`flex items-center sm:gap-12 md:gap-20 
        ${location !== '/' && 'text-white'}`}
      >
        <Logo />
        <ul className="hidden child:font-medium child:transition-all sm:flex sm:gap-6 md:gap-10">
          <ListItem>
            <NavLink href="/">{t('nav.home')}</NavLink>
          </ListItem>
          <ListItem>
            <a href="/#about">{t('nav.whoAreWe')}</a>
          </ListItem>
          <ListItem>
            <p className="group cursor-pointer">
              {t('nav.profile.h1')}
              <ArrowDown2
                variant="Bold"
                className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
              />
            </p>
            <div className="drop-menu-container relative h-0 w-0 overflow-hidden transition duration-200 hover:overflow-visible ">
              <DropMenu />
            </div>
          </ListItem>
          <ListItem>
            <a href="/#contact">{t('nav.contact')}</a>
          </ListItem>
        </ul>
      </div>
      <div
        //ref={menuBtn}
        className={`relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:block child:h-[0.2rem] child:w-8 child:rounded-full ${
          location === '/' || location === '/en'
            ? 'child:bg-main-color'
            : 'child:bg-white'
        }  child:duration-300 sm:hidden lg:child:bg-white`}
      >
        <span className="top-0"></span>
        <span className="top-1/2 -translate-y-1/2"></span>
        <span className="bottom-0"></span>
      </div>
      <div className="hidden font-semibold text-main-color sm:block lg:text-white">
        <Switch />
      </div>
    </nav>
    //</NextIntlClientProvider>
  )
}
