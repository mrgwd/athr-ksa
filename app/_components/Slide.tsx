import Image, { StaticImageData } from 'next/image'

interface SlideProps {
  imgSrc: StaticImageData
  imgUrl: string
}
export default function Slide({ imgSrc, imgUrl }: SlideProps) {
  return (
    <a
      href={imgUrl}
      target="_blance"
      className="m-4 h-full w-full object-cover"
    >
      <Image
        src={imgSrc}
        alt="Slideshow"
        loading="lazy"
        className="rounded-3xl"
      />
    </a>
  )
}
