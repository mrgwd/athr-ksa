'use client'
import Image from 'next/image'
import CourseDetails from './courseDetails'
import LevelBadge from './levelBadge'
import { DocumentCopy, Layer, VideoCircle } from 'iconsax-react'
import { useLocale, useTranslations } from 'next-intl'
import { Course } from '@/app/_types/coursesTypes'

interface FeaturedCourseProps {
  course: Course
  name: string
}
export default function FeaturedCourse({ course, name }: FeaturedCourseProps) {
  const { title, description, level } =
    useLocale() === 'ar'
      ? {
          title: course.titleInArabic,
          description: course.descriptionInArabic,
          level: course.levelInArabic,
        }
      : {
          title: course.title,
          description: course.description,
          level: course.level,
        }
  const t = useTranslations('learnings.courses')
  return (
    <div className="max-sm:bg-white relative rounded-2xl max-sm:border p-3 md:flex gap-4 lg:gap-10 border-slate-200">
      <Image
        className="md:rounded-3xl h-96 w-full object-cover"
        src="/images/learnings/course1.jpg"
        width={550}
        height={400}
        alt="Featured Course"
      />
      <div className="mt-2 flex flex-col max-w-md gap-2 md:gap-4 p-4">
        <LevelBadge level={level} className="max-md:absolute top-8 right-6" />
        <h1 className="text-xl md:text-4xl text-main-color font-semibold">
          {title}
        </h1>
        <p className="text-main-dark">{description}</p>
        <div className="flex gap-4 mt-2">
          <CourseDetails name={t(`${name}.duration`)} number={course.duration}>
            <VideoCircle variant="Bulk" />
          </CourseDetails>
          <CourseDetails name={t(`${name}.lessons`)} number={course.lessons}>
            <DocumentCopy variant="Bulk" />
          </CourseDetails>
          <CourseDetails
            name={t(`${name}.assignments`)}
            number={course.assignments}
          >
            <Layer variant="Bulk" />
          </CourseDetails>
        </div>
        <a
          className="hidden md:block text-md mt-12 self-start rounded-full bg-gradient-to-l from-main-color to-main-color/60 px-4 py-2 text-white transition duration-300 hover:from-white hover:to-white hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color max-md:mx-auto sm:px-6 sm:text-lg"
          href="#contact"
        >
          {t('detailsButton')}
        </a>
      </div>
    </div>
  )
}
