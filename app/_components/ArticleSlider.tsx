'use client'
import React, { useEffect, useRef, useState } from 'react'
import ArticleCard from './ArticleCard'
import { StaticImageData } from 'next/image'
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react'
import { useLocale } from 'next-intl'
import { Article } from '@/app/_types/articlesTypes'

interface ArticleSliderProps {
  arabicArticles: Article[]
  englishArticles: Article[]
}

type step = 1 | 2

export default function ArticleSlider({
  arabicArticles,
  englishArticles,
}: ArticleSliderProps) {
  const articles = useLocale() === 'ar' ? arabicArticles : englishArticles
  const [current, setCurrent] = useState<number>(0)
  const [step, setStep] = useState<number>(2)
  const stepRef = useRef<number>(step)

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth < 768 ? setStep(1) : setStep(2)

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    stepRef.current = step
  }, [step])

  const nextSlide = () => {
    setCurrent((previous) =>
      previous >= articles.length - stepRef.current
        ? 0
        : previous + stepRef.current,
    )
  }

  const prevSlide = () => {
    setCurrent((previous) =>
      previous <= 0 ? articles.length - step : previous - step,
    )
  }

  const goToSlide = (index: number) => {
    // setCurrent(index * 2 - 2)
    if (step === 1) setCurrent(index - 1)
    else setCurrent(index * 2 - 2)
    // setCurrent(step === 1 ? index - 1 : index * 2 - 2)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative ">
      <div className="flex gap-8 items-center justify-center">
        <ArrowCircleRight
          className="absolutte hidden hover:scale-125 transition-all sm:block top-1/2 text-main-color right-5 z-20  cursor-pointer"
          variant="Bulk"
          onClick={prevSlide}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 child:transition-all cursor-pointer gap-8 justify-center child:max-w-md">
          {articles.map((article, index) => (
            <React.Fragment key={index}>
              {step === 2
                ? (index === current || index === current + 1) && (
                    <ArticleCard article={article} />
                  )
                : index === current && <ArticleCard article={article} />}
            </React.Fragment>
          ))}
        </div>
        <ArrowCircleLeft
          className="absolutte hidden hover:scale-125 transition duration-300 sm:block top-1/2 text-main-color left-5 z-20  cursor-pointer"
          variant="Bulk"
          onClick={nextSlide}
        />
      </div>
      <div className="mt-4 flex justify-center child:mx-2 child:rounded-full child:cursor-pointer child:p-1.5 sm:child:p-2">
        {Array.from(
          { length: Math.floor(articles.length / step) },
          (_, i) => i + 1,
        ).map((i) => (
          <div
            onClick={() => goToSlide(i)}
            key={i}
            className={`mt-12 transition duration-500 ${
              current === i * step - step ? 'bg-main-color' : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
