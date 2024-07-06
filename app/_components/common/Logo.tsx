"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo/ATHR.png";
import whiteLogo from "@/public/images/logo/ATHR-w.png";
import { Link } from "@/app/_i18n/navigation";
interface LogoProps {
  white?: boolean;
}
export default function Logo({ white = false }: LogoProps) {
  const location = usePathname().split("services/")[1];
  const navCheck =
    location === "online-stores/" ||
    location === "web-development/" ||
    location === "programs-and-systems/" ||
    location === "social-media/" ||
    location === "seo/";

  return (
    <Link href="/">
      <Image src={white ? whiteLogo : logo} priority={true} alt="ATHR Logo" />
    </Link>
  );
}
