'use client'
import { CopySuccess, Link1 } from 'iconsax-react'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function ShareButton() {
  const [hasShared, setHasShared] = useState(false)
  const shareArticle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: window.document.title,
          text: 'Check out web.dev.',
          url: window.location.href,
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(window.location.href)
          setHasShared(true)
        } catch (error) {
          console.error('Error copying:', error)
        }
      }
    }
  }
  const t = useTranslations('blog')
  const locale = useLocale()
  useEffect(() => {
    if (hasShared) {
      setTimeout(() => setHasShared(false), 3000)
    }
  }, [hasShared])
  return (
    <div
      className={`felx relative ${
        hasShared ? 'cursor-default' : 'cursor-pointer hover:underline'
      }`}
      onClick={shareArticle}
    >
      <Link1
        variant="Linear"
        className={`transition-all inline-block absolute top-0 ${
          locale === 'ar' ? 'ml-2 left-full' : 'mr-2 right-full'
        } ${hasShared ? 'opacity-0 translate-y-4' : 'translate-y-0'}`}
      />
      <CopySuccess
        variant="Linear"
        className={`transition-all inline-block absolute top-0 ${
          locale === 'ar' ? 'ml-2 left-full' : 'mr-2 right-full'
        } ${!hasShared ? 'opacity-0 -translate-y-4' : 'translate-y-0'}`}
      />
      <span> {t('share')}</span>
    </div>
  )
}
