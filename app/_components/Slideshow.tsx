'use client'
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react'
import { useEffect, useState } from 'react'
import Slide from './Slide'
import { StaticImageData } from 'next/image'

interface Props {
  images: { imgSrc: StaticImageData; imgUrl: string }[]
}
export default function Slideshow({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="relative mx-2 mt-12 flex items-center justify-center lg:mx-20 xl:mx-28">
        <ArrowCircleRight
          className="absolute text-main-color right-0 z-20 h-20 cursor-pointer"
          variant="Bulk"
          onClick={goToPrevSlide}
        />
        <Slide
          imgSrc={images[currentIndex].imgSrc}
          imgUrl={images[currentIndex].imgUrl}
        />
        <ArrowCircleLeft
          className="absolute text-main-color left-0 z-20 h-20 cursor-pointer"
          variant="Bulk"
          onClick={goToNextSlide}
        />
      </div>
      <div className="mt-4 flex justify-center child:mx-2 child:rounded-full child:cursor-pointer child:p-1.5 sm:child:p-2">
        {images.map((_, index) => (
          <div
            onClick={() => goToSlide(index)}
            key={index}
            className={`transition duration-500 ${
              index === currentIndex ? 'bg-main-color' : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
