import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTransition } from 'react'

export default function Switch() {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChangeLang = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar'
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <button disabled={isPending} onClick={handleChangeLang}>
      {locale === 'ar' ? 'En' : 'Ar'}
    </button>
  )
}

// 'use client'
// // import { LanguageSwitcher } from 'next-export-i18n'

// // import { useLocale } from 'next-intl'
// // import { usePathname, useRouter } from 'next-intl/client'
// import { useLocale } from 'next-intl'
// // import { usePathname, useRouter } from 'next/navigation'

// export default function Switch() {
//   const locale = useLocale()
//   // const router = useRouter()
//   // const pathname = usePathname()

//   const handleChangeLang = () => {
//     const nextLocale = locale === 'ar' ? 'en' : 'ar'
//     // LanguageSwitcher.changeLanguage(nextLocale)
//   }
//   // console.log(locale)
//   return (
//     // <LanguageSwitcher lang={locale === 'en' ? 'ar' : 'en'}>
//     //   {locale === 'en' ? 'En' : 'Ar'}
//     // </LanguageSwitcher>
//     <div>placeholder</div>
//   )
// }
