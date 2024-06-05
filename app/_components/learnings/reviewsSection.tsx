'use client'
import { useEffect, useState } from 'react'
import Section from '../Section'
import Review from './review'
import { useTranslations } from 'next-intl'
interface ReviewT {
  name: string
  review: string
}
export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % 3)
  }
  useEffect(() => {
    const interval = setInterval(nextReview, 4000)
    return () => clearInterval(interval)
  })
  const t = useTranslations('learnings.reviews')
  const newReview: ReviewT = {
    name: t(`${currentReview}.name`),
    review: t(`${currentReview}.review`),
  }
  return (
    <Section name="learnings.reviews">
      <div className="">
        <Review review={newReview} />
      </div>
      <div className="child:size-3 mt-4 child:inline-block child:transition-all child:rounded-full flex justify-center gap-2">
        {Array.from({ length: 3 }, (_, i) => (
          <span
            key={i}
            className={i === currentReview ? 'bg-main-color' : 'bg-slate-200'}
          ></span>
        ))}
      </div>
    </Section>
  )
}
