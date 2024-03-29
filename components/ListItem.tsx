import { usePathname } from 'next/navigation'
interface ListItemProps {
  children: JSX.Element | JSX.Element[]
}
export default function ListItem({ children }: ListItemProps) {
  const location = usePathname().split('services/')[1]
  const navCheck =
    location === 'online-stores/' ||
    location === 'web-development/' ||
    location === 'programs-and-systems/' ||
    location === 'social-media/'

  return (
    <li
      className={
        navCheck ? 'hover:text-white/70' : ' hover:text-main-color group'
      }
    >
      {children}
    </li>
  )
}
