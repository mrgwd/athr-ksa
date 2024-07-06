import { useLocale, useTranslations } from "next-intl";
import {
  GlobalEdit,
  GlobalSearch,
  KeyboardOpen,
  ShoppingCart,
  StatusUp,
} from "iconsax-react";
import DropDownMenuLink from "./DropDownMenuLink";

interface DropMenuProps {
  handleMenuDown?: () => void;
}
export default function DropMenu({ handleMenuDown }: DropMenuProps) {
  return (
    <div className="sm:pt-2">
      <ul className="translate-y-6 rounded-2xl bg-slate-50 *:text-main-dark child:mt-2 child:child:w-full sm:block sm:bg-white sm:px-3 sm:py-1 sm:pb-3 sm:shadow-lg">
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
  );
}
