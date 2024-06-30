import { useLocale, useTranslations } from 'next-intl'
import {
  GlobalEdit,
  GlobalSearch,
  KeyboardOpen,
  ShoppingCart,
  StatusUp,
} from 'iconsax-react'
import DropDownMenuLink from './DropDownMenuLink'

interface DropMenuProps {
  handleMenuDown?: () => void
}
export default function DropMenu({ handleMenuDown }: DropMenuProps) {
  return (
    <div className="min-w-max min-h-max">
      <ul className="translate-y-6 child:child:w-full *:text-main-dark rounded-2xl sm:pb-3 bg-slate-50 sm:bg-white child:mt-2 sm:block sm:px-3 sm:py-1 sm:shadow-lg">
        <li onClick={handleMenuDown}>
          <DropDownMenuLink index={1} route="/services/online-stores">
            <ShoppingCart variant="Linear" />
          </DropDownMenuLink>
        </li>
        <li onClick={handleMenuDown}>
          <DropDownMenuLink index={2} route="/services/web-development">
            <GlobalEdit variant="Linear" />
          </DropDownMenuLink>
        </li>
        <li onClick={handleMenuDown}>
          <DropDownMenuLink index={3} route="/services/social-media">
            <StatusUp variant="Linear" />
          </DropDownMenuLink>
        </li>
        <li onClick={handleMenuDown}>
          <DropDownMenuLink index={4} route="/services/programs-and-systems">
            <KeyboardOpen variant="Linear" />
          </DropDownMenuLink>
        </li>
        <li onClick={handleMenuDown}>
          <DropDownMenuLink index={5} route="/services/seo">
            <GlobalSearch variant="Linear" />
          </DropDownMenuLink>
        </li>
      </ul>
    </div>
  )
}
