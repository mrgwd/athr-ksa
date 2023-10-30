'use client'

//import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
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
