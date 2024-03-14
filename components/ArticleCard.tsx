import Image, { StaticImageData } from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import getReadTime from '@/utils/getReadTime'
interface ArticeCardProps {
  img: StaticImageData
  articleID: string
  variant?: 'default' | 'small'
  removeShadow?: boolean
}
export default function ArticleCard({
  img,
  articleID,
  variant = 'default',
  removeShadow = false,
}: ArticeCardProps) {
  const t = useTranslations('blog')
  const title: string = t(`articles.${articleID}.title`)
  const body: string = t(`articles.${articleID}.body`).toString()
  const readTime: number = getReadTime(body.split(' ').length)
  const locale: string = useLocale()
  const variantBasedClasses: string = `${
    variant === 'default'
      ? 'overflow-hidden'
      : `flex gap-6 items-center ${!removeShadow && 'p-4'}`
  }`
  return (
    <Link
      href={`/${locale}/blog/${articleID}`}
      className={` ${variantBasedClasses} ${
        !removeShadow && 'bg-white shadow-lg rounded-3xl'
      } transition duration-300  group`}
    >
      <Image
        src={img}
        className={`${
          variant === 'default'
            ? `aspect-video ${removeShadow && 'rounded-xl'}`
            : 'size-24 rounded-xl'
        } object-cover`}
        alt="A blue bird"
        loading="lazy"
      />
      <div
        className={`${
          variant === 'default' ? `py-4 ${!removeShadow && '!p-8'}` : ''
        }`}
      >
        <p className="text-gray-400 text-md mb-1">
          <span className="text-main-color">
            {t(`articles.${articleID}.category`)}
          </span>{' '}
          • {t(`articles.${articleID}.date`)}
        </p>
        <h4
          className={`font-semibold text-pretty group-hover:underline ${
            variant === 'default' ? 'text-lg' : 'text-md'
          }`}
        >
          {title}
          {title.length > 65 && '...'}
        </h4>
        <p className="text-gray-400 text-md mb-1">
          {readTime} {t(`readTime`)}
        </p>
      </div>
    </Link>
  )
}
