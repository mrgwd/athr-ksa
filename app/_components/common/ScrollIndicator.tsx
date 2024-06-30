'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
// import useLocale from '../../_i18n/useLocale'
// import useMessages from '../../_i18n/messages/useMessages'

interface ScrollIndicatorProps {
  variant: 'detailed' | 'simple'
}
export default function ScrollIndicator({ variant }: ScrollIndicatorProps) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const goToBottom = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    })
  }
  const [isAtTop, setIsAtTop] = useState(true)
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsAtTop(false)
    } else {
      setIsAtTop(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  const locale = useLocale()
  const t = useTranslations()
  return variant === 'simple' ? (
    <div
      className={`absolute left-1/2 -translate-x-1/2 opacity-0 ${
        isAtTop && 'sm:opacity-100 lg:flex'
      } mx-auto mt-6 h-14 w-10 translate-y-36 justify-center rounded-full bg-slate-200 py-2 transition-all duration-300`}
    >
      <span className="mouse-wheel size-1.5 rounded-full bg-slate-400 py-1.5"></span>
    </div>
  ) : (
    <button
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      onClick={goToTop}
      className={`group overflow-hidden rounded-full py-2.5 ${
        locale === 'ar' ? 'hover:pl-12' : 'hover:pr-12'
      } mx-auto my-12 mt-24 block bg-slate-200/75 px-6 text-gray-500 transition-all hover:bg-primary/10 hover:text-primary`}
    >
      {''} {t('goTop')}
      {/* before:content-['🡱'] before:inline-block hover:before:-translate-y-2 hover:before:opacity-0 before:transition-all */}
      <span
        className={`absolute opacity-0 ${
          locale === 'ar' ? 'mr-2' : 'ml-2'
        } inline-block translate-y-4 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100`}
      >
        &#129137;
      </span>
      {/* <span className="opacity-100 absolute mr-2 group-hover:opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-4 inline-block">
        &#129137;
      </span> */}
      {/* الذهاب للأعلى &#129033; &#129045; &#129049; &#129105; &#129137; */}
    </button>
  )
}
