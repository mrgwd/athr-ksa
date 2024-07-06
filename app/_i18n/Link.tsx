import { usePathname } from 'next/navigation'
import { Link, Route } from './navigation'
interface NavigationLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}
export default function NavigationLink({
  children,
  href,
  className,
}: NavigationLinkProps) {
  const pathname = usePathname()
  const linkPath = pathname === '/' ? `/ar${href}` : `${href}`
  return (
    <Link href={linkPath as Route} className={className}>
      {children}
    </Link>
  )
}
