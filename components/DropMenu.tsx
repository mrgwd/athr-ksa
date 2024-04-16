import { useLocale, useTranslations } from 'next-intl'
import {
  GlobalEdit,
  GlobalSearch,
  KeyboardOpen,
  Mobile,
  ShoppingBag,
  ShoppingCart,
  StatusUp,
} from 'iconsax-react'
// import NavLink from './NavLink'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import DropDownMenuLink from './DropDownMenuLink'

interface DropMenuProps {
  handleMenuDown?: () => void
}
export default function DropMenu({ handleMenuDown }: DropMenuProps) {
  const locale = useLocale()
  const t = useTranslations()
  const [mouseOver, setMouseOver] = useState<number | undefined>(undefined)
  return (
    <div className="min-w-max min-h-max">
      <ul className="translate-y-6 child:child:w-full *:text-main-dark rounded-2xl sm:pb-3 bg-white child:mt-2 sm:block sm:px-3 sm:py-1 sm:shadow-lg">
        <DropDownMenuLink
          handleMenuDown={() => handleMenuDown}
          index={1}
          route="/services/online-stores"
        >
          <ShoppingCart variant="Linear" />
        </DropDownMenuLink>
        <DropDownMenuLink
          handleMenuDown={() => handleMenuDown}
          index={2}
          route="/services/web-development"
        >
          <GlobalEdit variant="Linear" />
        </DropDownMenuLink>
        <DropDownMenuLink
          handleMenuDown={() => handleMenuDown}
          index={3}
          route="/services/social-media"
        >
          <StatusUp variant="Linear" />
        </DropDownMenuLink>
        <DropDownMenuLink
          handleMenuDown={() => handleMenuDown}
          index={4}
          route="/services/programs-and-systems"
        >
          <KeyboardOpen variant="Linear" />
        </DropDownMenuLink>
        <DropDownMenuLink
          handleMenuDown={() => handleMenuDown}
          index={5}
          route="/services/seo"
        >
          <GlobalSearch variant="Linear" />
        </DropDownMenuLink>
      </ul>
    </div>
  )
}
