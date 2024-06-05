'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Faq from './Faq'
interface FaqProps {
  name: string
}
export default function FAQs({ name }: FaqProps) {
  const [openedQuestion, setOpenedQuestion] = useState<number>()
  const handleOpenQuestion = (index: number) => {
    if (openedQuestion === index) {
      setOpenedQuestion(undefined)
    } else {
      setOpenedQuestion(index)
    }
  }
  const t = useTranslations(`${name}`)
  return (
    <div>
      <div className="flex flex-col gap-2">
        {[...Array(Number(t('faqs.count')))].map((_, index) => {
          return (
            <Faq
              key={index}
              isOpen={openedQuestion === index}
              handleOpen={() => handleOpenQuestion(index)}
              question={t(`faqs.${index + 1}.q`)}
              answer={t(`faqs.${index + 1}.a`)}
            />
          )
        })}
      </div>
      <p className="mt-4">
        {t('support.q')}{' '}
        <a href="#contact" className="text-main-color underline">
          {t('support.a')}
        </a>
      </p>
    </div>
  )
}
