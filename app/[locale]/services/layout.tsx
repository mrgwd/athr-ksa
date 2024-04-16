import Contact from '@/components/Contact'
import FAQsSection from '@/components/FAQsSection'

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}
      <Contact />
      {/* <FAQsSection /> */}
    </div>
  )
}
