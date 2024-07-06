"use client";
import { useLocale } from "next-intl";

interface LevelBadgeProps {
  className?: string;
  level: string;
}
export default function LevelBadge({ className, level }: LevelBadgeProps) {
  const locale = useLocale();
  return (
    <p
      className={`${className} flex h-3 rounded-full bg-main-color/50 px-2 font-semibold leading-none text-main-dark ${
        locale === "ar"
          ? "items-end justify-center"
          : "items-center justify-center"
      } w-min`}
    >
      {level}
    </p>
  );
}
