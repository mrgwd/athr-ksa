"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import getReadTime from "@/utils/getReadTime";
import { Article } from "@/app/_types/articlesTypes";
interface ArticeCardProps {
  article: Article;
  variant?: "default" | "small";
  removeShadow?: boolean;
}
export default function ArticleCard({
  article,
  variant = "default",
  removeShadow = false,
}: ArticeCardProps) {
  const t = useTranslations("blog");
  const title: string = article.title;
  const body: string = article.body;
  const readTime: number = getReadTime(body.split(" ").length);
  const locale: string = useLocale();
  // the date is like 2024-05-11
  // how to make it like 11 May 2024

  const variantBasedClasses: string = `${
    variant === "default"
      ? "overflow-hidden"
      : `flex gap-6 items-center ${!removeShadow && "p-4"}`
  }`;
  return (
    <div
      className={` ${variantBasedClasses} ${
        !removeShadow && " rounded-xl border border-slate-200"
      } group transition  duration-300`}
    >
      <Link
        href={`/${locale}/blog/${article.category.url_name}/articles/${article.id}`}
      >
        <Image
          src={`https://new.athr-ksa.com/${article.imge}`}
          width={800}
          height={600}
          objectFit="cover"
          className={`${
            variant === "default"
              ? `aspect-video ${removeShadow && "rounded-xl"}`
              : "size-24 rounded-xl"
          } object-cover`}
          alt="A blue bird"
          loading="lazy"
        />
      </Link>
      <div
        className={`${
          variant === "default" ? `py-4 ${!removeShadow && "!p-8"}` : ""
        }`}
      >
        <div className="text-md mb-1 text-gray-400">
          <Link
            href={`/${locale}/blog/${article.category.url_name}/articles`}
            className="text-main-color hover:underline"
          >
            {article.category.name}
          </Link>{" "}
          • {article.date}
        </div>
        <Link
          href={`/${locale}/blog/${article.category.url_name}/articles/${article.id}`}
        >
          <h4
            className={`text-pretty font-semibold group-hover:underline ${
              variant === "default" ? "text-lg" : "text-md"
            }`}
          >
            {title}
            {title.length > 65 && "..."}
          </h4>
        </Link>
        <p className="text-md mb-1 text-gray-400">
          {readTime} {t(`readTime`)}
        </p>
      </div>
    </div>
  );
}
