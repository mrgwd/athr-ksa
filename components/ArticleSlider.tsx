// ArticleSlider.tsx
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import { StaticImageData } from 'next/image'
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react'

interface Article {
  name: string
  img: StaticImageData
}

interface ArticleSliderProps {
  articles: Article[]
}
type step = 1 | 2

export default function ArticleSlider({ articles }: ArticleSliderProps) {
  const width = window.innerWidth
  const step: step = width > 768 ? 2 : 1
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((previous) =>
      previous >= articles.length - step ? 0 : previous + step,
    )
  }

  const prevSlide = () => {
    setCurrent((previous) =>
      previous <= 0 ? articles.length - step : previous - step,
    )
  }

  const goToSlide = (index: number) => {
    setCurrent(step === 1 ? index - 1 : index * 2 - 2)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative ">
      <div className="flex gap-8 items-center justify-center">
        <ArrowCircleRight
          className="absolutte hidden sm:block top-1/2 text-main-color right-5 z-20 h-20 cursor-pointer"
          variant="Bulk"
          onClick={prevSlide}
        />
        <div className="flex gap-8 justify-center">
          {articles.map((article, index) => (
            <>
              {(index === current ||
                (width > 768 && index === current + 1)) && (
                <ArticleCard articleID={article.name} img={article.img} />
              )}
            </>
          ))}
        </div>
        <ArrowCircleLeft
          className="absolutte hidden sm:block top-1/2 text-main-color left-5 z-20 h-20 cursor-pointer"
          variant="Bulk"
          onClick={nextSlide}
        />
      </div>
      <div className="mt-4 flex justify-center child:mx-2 child:rounded-full child:cursor-pointer child:p-1.5 sm:child:p-2">
        {Array.from(
          { length: Math.floor(articles.length / step) },
          (_, i) => i + 1,
        ).map((num) => (
          <div
            onClick={() => goToSlide(num)}
            key={num}
            className={`mt-4 transition duration-500 ${
              (step === 2 && num * 2 - 2 === current) ||
              (step !== 2 && num - 1 === current)
                ? 'bg-main-color'
                : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
