import About from '@/components/About'
import BlogSection from '@/components/BlogSection'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'
import Features from '@/components/Features'
import Home from '@/components/Home'
import HowWeWork from '@/components/HowWeWork'
import Newsletter from '@/components/Newsletter'
import ServicesSection from '@/components/ServicesSection'
export default async function Page() {
  return (
    <>
      <main>
        <Home />
        <About />
        <ServicesSection />
        <Features />
        <BlogSection />
        <HowWeWork />
        <Clients />
        <FAQsSection name="FAQsSection" />
        <Contact />
        <Newsletter />
      </main>
    </>
  )
}
