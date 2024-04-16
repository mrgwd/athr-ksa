import Image from 'next/image'
import logo from '@/public/images/logo/ATHR.png'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ATHR | Not Found',
}
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div
          className="flex h-screen w-screen overflow-hidden flex-col items-center justify-center"
          style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            fontWeight: 600,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src={logo} alt="ATHR Logo" />
          <p className="text-xl" style={{ fontFamily: 'sans-serif' }}>
            Looks like you are lost! 😥 !يبدو أنك تائه
          </p>
          <Link
            href="/ar" // {usePathname().includes('/ar') ? '/ar' : '/en'}
            className="mt-4 text-main-color"
            style={{ fontFamily: 'sans-serif' }}
          >
            Go Home 🏠 الذهاب للصفحة الرئيسية
          </Link>
        </div>
      </body>
    </html>
  )
}
