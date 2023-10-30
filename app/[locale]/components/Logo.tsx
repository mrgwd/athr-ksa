'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../../../public/images/logo/ATHR.png'
import whiteLogo from '../../../public/images/logo/ATHR-w.png'
export default function Logo() {
  const location = usePathname()
  return (
    <Image
      src={location === '/' || location === '/en' ? logo : whiteLogo}
      priority={true}
      alt="ATHR.sa Logo"
      className="w-16"
    />
  )
}
