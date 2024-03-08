'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../public/images/logo/ATHR.png'
import whiteLogo from '../public/images/logo/ATHR-w.png'
import { Link } from '@/i18n/navigation'
export default function Logo() {
  const location = usePathname()
  return (
    <Link href="/">
      <Image
        src={location === '/ar/' || location === '/en/' ? logo : whiteLogo}
        priority={true}
        alt="ATHR Logo"
        className="w-16"
      />
    </Link>
  )
}
