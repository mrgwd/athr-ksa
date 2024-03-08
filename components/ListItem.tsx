import { usePathname } from 'next/navigation'
interface ListItemProps {
  children: JSX.Element | JSX.Element[]
}
export default function ListItem({ children }: ListItemProps) {
  const location = usePathname()
  return (
    <li
      className={
        location === '/ar/' || location === '/en/'
          ? 'hover:text-main-color group'
          : 'hover:text-white/70'
      }
    >
      {children}
    </li>
  )
}
