'use client'
import { usePathname } from 'next/navigation'
interface ListItemProps {
  children: JSX.Element | JSX.Element[]
}
export default function ListItem({ children }: ListItemProps) {
  const location = usePathname()
  console.log(location)
  return (
    <li
      className={
        location === '/' || location === '/en'
          ? 'hover:text-main-color'
          : 'hover:text-white/70'
      }
    >
      {children}
    </li>
  )
}
