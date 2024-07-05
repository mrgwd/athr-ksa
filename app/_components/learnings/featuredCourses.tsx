'use client'
import { Course } from '@/app/_types/coursesTypes'
import Section from '../common/Section'
import FeaturedCourse from './featuredCourse'
import FeaturedCourseStatic from './featuredCourseStatic'
import { useLocale } from 'next-intl'
interface FeaturedCoursesProps {
  courses: Course[]
}
export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  const locale = useLocale()
  const dir = locale === 'en' ? 'rtl' : 'ltr'
  return (
    <Section name="learnings.courses">
      <div className="flex flex-col gap-8 sm:gap-16 md:gap-44">
        <div className="flex justify-center">
          <FeaturedCourseStatic name="1" course={courses[0]} />
        </div>
        <div className="flex justify-center flex-row-reverse">
          <FeaturedCourseStatic name="2" course={courses[1]} dir={dir} />
        </div>
        <div className="flex justify-center">
          <FeaturedCourseStatic name="3" course={courses[2]} />
        </div>
      </div>
    </Section>
  )
}
