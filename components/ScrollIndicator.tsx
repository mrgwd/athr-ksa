import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

interface ScrollIndicatorProps {
  variant: 'detailed' | 'simple'
}
export default function ScrollIndicator({ variant }: ScrollIndicatorProps) {
  const t = useTranslations()
  const locale = useLocale()
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
  return variant === 'simple' ? (
    <div
      className={`opacity-0 absolute left-1/2 -translate-x-1/2 ${
        isAtTop && ' lg:flex sm:opacity-100'
      } w-10 h-14 bg-slate-200 transition-all duration-300 rounded-full justify-center py-2 mx-auto mt-6 translate-y-36`}
    >
      <span className="mouse-wheel rounded-full bg-slate-400 size-1.5 py-1.5"></span>
    </div>
  ) : (
    <button
      onClick={goToTop}
      className={`rounded-full overflow-hidden group py-2.5 ${
        locale === 'ar' ? 'hover:pl-12' : 'hover:pr-12'
      } px-6 my-12 bg-slate-200/75 text-gray-500 transition-all mt-24 block mx-auto hover:bg-main-color/10 hover:text-main-color`}
    >
      {''} {t('gotop')}
      {/* before:content-['🡱'] before:inline-block hover:before:-translate-y-2 hover:before:opacity-0 before:transition-all */}
      <span
        className={`opacity-0 absolute ${
          locale === 'ar' ? 'mr-2' : 'ml-2'
        } translate-y-4 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:translate-y-0 inline-block`}
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
