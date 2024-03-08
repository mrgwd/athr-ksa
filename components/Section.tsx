'use client'
import useAnimation from '@/hooks/useAnimation'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

interface SectionProps {
  id?: string
  offset?: number
  name: string
  children: React.ReactNode
}
export default function Section({
  id,
  children,
  name,
  offset = 600,
}: SectionProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  useAnimation(ref, offset, 'opacity-0', 'translate-y-20')
  const t = useTranslations()
  return (
    <div
      className="container mx-auto my-28 opacity-0 translate-y-20 px-4 transition duration-500 md:mt-56"
      id={id}
      ref={ref}
    >
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        {t(`${name}.heading`)}
      </h2>
      {children}
    </div>
  )
}
