import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'
import Newsletter from '@/components/Newsletter'
import Home from '@/components/learnings/home'
import Statistics from '@/components/learnings/statistics'
import WhyUs from '@/components/learnings/whyUs'

export default function Page() {
  return (
    <div>
      <Home />
      <Statistics />
      <WhyUs />
      <FAQsSection name="OS.FAQs" />
      <Contact />
      <Newsletter />
    </div>
  )
}
