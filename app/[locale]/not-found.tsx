import { Metadata } from 'next'
import Link from 'next/link'
import logo from '@/public/images/logo/ATHR.png'
import { useEffect } from 'react'
import Image from 'next/image'
// export const metadata: Metadata = {
//   title: 'ATHR | Not Found',
// }
export default function NotFound() {
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'
  //   document.title = 'ATHR | Not Found'
  //   return () => {
  //     document.body.style.overflow = 'auto'
  //     document.title = 'ATHR - أثر'
  //   }
  // }, [])
  return (
    <div className="flex h-screen overflow-hidden flex-col items-center justify-center">
      <Image src={logo} alt="ATHR Logo" />
      <p className="text-xl">Looks like you are lost</p>
      <Link href="/" className="mt-4 text-main-color">
        Go Home
      </Link>
    </div>
  )
}
