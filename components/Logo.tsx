'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../public/images/logo/ATHR.png'
import whiteLogo from '../public/images/logo/ATHR-w.png'
import { Link } from '@/i18n/navigation'
export default function Logo() {
  const location = usePathname().split('services/')[1]
  const navCheck =
    location === 'online-stores/' ||
    location === 'web-development/' ||
    location === 'programs-and-systems/' ||
    location === 'social-media/' ||
    location === 'seo/'

  return (
    <Link href="/">
      <Image
        src={navCheck ? whiteLogo : logo}
        priority={true}
        alt="ATHR Logo"
        className="w-16"
      />
    </Link>
  )
}
