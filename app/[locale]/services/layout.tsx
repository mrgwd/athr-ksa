import Contact from '@/components/Contact'

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}
      <Contact />
    </div>
  )
}
