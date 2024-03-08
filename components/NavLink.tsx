// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// // import { usePathname } from 'next-intl/client'
// // import Link from 'next-intl/link'
// import { ComponentProps } from 'react'

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
//   href: string
// }

// export default function NavLink({ href, ...rest }: Props) {
//   const pathname = usePathname()
//   const isActive = pathname === href

//   return (
//     <Link
//       aria-current={isActive}
//       className={`inline-block transition-colors ${
//         isActive ? 'hover:text-main-color' : ' hover:text-gray-200'
//       }`}
//       href={href}
//       {...rest}
//     />
//   )
// }
