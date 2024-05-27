import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'
import Newsletter from '@/components/Newsletter'
import FeaturedCourses from '@/components/learnings/featuredCourses'
import Home from '@/components/learnings/home'
import ReviewsSection from '@/components/learnings/reviewsSection'
import Statistics from '@/components/learnings/statistics'
import WhyUs from '@/components/learnings/whyUs'
import { Metadata } from 'next'
const arabicMetadata: Metadata = {
  title: 'أكاديمية أثر',
  keywords: [
    'تعلم',
    'تطوير الويب',
    'برمجة',
    'تصميم',
    'واجهات المستخدم',
    'تطبيقات الجوال',
    'تسويق الكتروني',
    'تصميم جرافيك',
  ],
  description:
    'اكاديمية أثر هي مكانك لتعلم مهارات جديدة وتطوير مهاراتك الحالية في مجالات متعددة مثل تطوير الويب، برمجة التطبيقات، تصميم واجهات المستخدم، تطبيقات الجوال، وتسويق الكتروني.',
  alternates: {
    canonical: 'https://athr-ksa.com/ar/learnings',
    languages: {
      en: 'https://athr-ksa.com/en/learnings',
      'ar-SA': 'https://athr-ksa.com/ar/learnings',
    },
  },
}

const englishMetadata: Metadata = {
  title: 'ATHR Academy',
  keywords: [
    'learn',
    'web development',
    'programming',
    'design',
    'UI/UX',
    'mobile apps',
    'digital marketing',
    'graphic design',
  ],
  description:
    'ATHR Academy is your place to learn new skills and develop your current skills in various fields such as web development, app development, UI/UX design, mobile apps, and digital marketing.',
  alternates: {
    canonical: 'https://athr-ksa.com/en/learnings',
    languages: {
      en: 'https://athr-ksa.com/en/learnings',
      'ar-SA': 'https://athr-ksa.com/ar/learnings',
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return params.locale === 'ar' ? arabicMetadata : englishMetadata
}
export default async function Page() {
  const getCourses = async () => {
    const res = await fetch('https://new.athr-ksa.com/api/all-courses/2')
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
      <ReviewsSection />
      <FAQsSection name="learnings.FAQs" />
      <Contact />
      <Newsletter />
    </div>
  )
}
