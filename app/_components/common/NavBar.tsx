"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowDown2 } from "iconsax-react";
import Logo from "./Logo";
import DropMenu from "./DropMenu";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import Switch from "./Switch";
import Link from "@/app/_i18n/Link";

const isPathIncluded = (location: string, paths: string[]): boolean =>
  paths.some((path) => location.includes(path));

export default function NavBar() {
  const t = useTranslations();
  const location = usePathname();
  const navCheck = isPathIncluded(location, ["/services/", "/careers/"]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDown, setIsDown] = useState(true);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleMenuDown = () => setIsOpen(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos === 0);
      setIsDown(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed left-1/2 top-0 z-40 -translate-x-1/2 w-full py-4 transition duration-300 lg:px-10 ${
    isDown
      ? "flex -translate-y-0"
      : "pointer-events-none -translate-y-28 opacity-0"
  } ${isAtTop ? "border-0 pt-8" : "border-b border-slate-300"} ${
    navCheck && isAtTop ? "" : "bg-slate-50"
  }`;

  return (
    <div className="relative w-full">
      <nav className={navClass}>
        <div className="container mx-auto flex items-center justify-between px-8">
          <div
            className={`flex items-center sm:gap-8 md:gap-10 lg:gap-20 
        ${navCheck && isAtTop ? "text-white" : "text-main-dark"}`}
          >
            <div className={`transition-all ${isAtTop ? "w-16" : "w-10"}`}>
              <Logo white={navCheck && isAtTop} />
            </div>
            <ul
              className={`hidden child:child:transition-all sm:flex sm:gap-4 md:gap-8 lg:gap-10 ${
                navCheck
                  ? "child-hover:child:text-wd-service"
                  : "child-hover:child:text-main-color"
              }`}
            >
              <li>
                <Link href="/">{t("nav.home")}</Link>
              </li>
              <li className="group">
                <p
                  className={`service-btn cursor-pointer ${
                    navCheck && isAtTop
                      ? "group-hover:text-wd-service"
                      : "group-hover:text-main-color"
                  }`}
                >
                  {t("nav.profile.h1")}
                  <ArrowDown2
                    variant="Bold"
                    className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
                  />
                </p>
                <div className="drop-menu-container pointer-events-none absolute z-10 mt-4 opacity-0 transition-transform delay-100 duration-300 ease-in-out group-hover:pointer-events-auto group-hover:mt-0 group-hover:opacity-100">
                  <DropMenu handleMenuDown={handleMenuDown} />
                </div>
              </li>
              <li>
                <Link href="/blog">{t("nav.blog")}</Link>
              </li>
              <li>
                <Link href="/learnings">{t("nav.learnings")}</Link>
              </li>
              <li>
                <Link href="/careers">{t("nav.careers")}</Link>
              </li>
              <li>
                <a
                  href={`${
                    location.includes("blog") ? "/#contact" : "#contact"
                  }`}
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div
            onClick={handleToggleMenu}
            className={`relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:block child:h-[0.2rem] child:w-8 child:rounded-full ${
              navCheck ? "child:bg-white" : "child:bg-main-color"
            }  child:duration-300 sm:hidden lg:child:bg-white`}
          >
            <span
              className={`${
                isOpen ? "left-1/2 top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`${
                isOpen ? "opacity-0" : "opacity-100"
              } top-1/2 -translate-y-1/2`}
            ></span>
            <span
              className={
                isOpen
                  ? "bottom-1/2 left-1/2 translate-y-1/2 -rotate-45"
                  : "bottom-0"
              }
            ></span>
          </div>
          <div
            className={`hidden font-semibold child-hover:underline sm:block ${
              navCheck && isAtTop ? "text-white" : "text-main-color"
            } `}
          >
            <Switch />
          </div>
        </div>
      </nav>
      <div className={`${navCheck && "hidden"} h-28 w-full`}></div>
      <SideMenu isOpen={isOpen} handleMenuDown={handleMenuDown} />
    </div>
  );
}
