'use client'
// import { useSelectedLanguage } from 'next-export-i18n'
import About from '@/components/About'
import BlogSection from '@/components/BlogSection'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Home from '@/components/Home'
import HowWeWork from '@/components/HowWeWork'
import ServicesSection from '@/components/ServicesSection'

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <ServicesSection />
      <Features />
      <BlogSection />
      <HowWeWork />
      <Clients />
      <Contact />
    </main>
  )
}
