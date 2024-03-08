import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
interface ArticeCardProps {
  img: StaticImageData
  articleID: string
  variant?: 'default' | 'small'
}
export default function ArticleCard({
  img,
  articleID,
  variant = 'default',
}: ArticeCardProps) {
  const t = useTranslations('blog.articles')
  return (
    <div
      className={`${
        variant === 'default'
          ? 'w-96 overflow-hidden'
          : 'flex gap-6 items-center p-4'
      } rounded-3xl bg-white shadow-lg`}
    >
      <Image
        src={img}
        className={`${
          variant === 'default' ? 'w-full h-44' : 'size-24 rounded-xl'
        } object-cover`}
        alt="A blue bird"
        loading="lazy"
      />
      <div className={`${variant === 'default' ? 'p-8' : ''}`}>
        <p className="text-gray-400 text-md mb-1">
          <span className="text-main-color">{t(`${articleID}.category`)}</span>{' '}
          • {t(`${articleID}.date`)}
        </p>
        <h4
          className={`font-semibold ${
            variant === 'default' ? 'text-lg' : 'text-md'
          }`}
        >
          {t(`${articleID}.title`)}
        </h4>
      </div>
    </div>
  )
}
