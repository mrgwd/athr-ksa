import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'
import Newsletter from '@/components/Newsletter'
import FeaturedCourse from '@/components/learnings/featuredCourse'
import FeaturedCourses from '@/components/learnings/featuredCourses'
import Home from '@/components/learnings/home'
import Statistics from '@/components/learnings/statistics'
import WhyUs from '@/components/learnings/whyUs'

export default async function Page() {
  const getCourses = async () => {
    const res = await fetch('https://new.athr-ksa.com/api/all-courses')
    const data = await res.json()
    return data.data
  }
  const courses = await getCourses()
  console.log('getCourses', await getCourses())
  return (
    <div>
      <Home />
      <Statistics />
      <WhyUs />
      <FeaturedCourses courses={courses} />
      <FAQsSection name="OS.FAQs" />
      <Contact />
      <Newsletter />
    </div>
  )
}
