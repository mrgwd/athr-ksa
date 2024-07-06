"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import ArticleCard from "../common/ArticleCard";
import Featured from "./Featured";
import Filters from "./Filters";
import { Article } from "@/app/_types/articlesTypes";

interface ArticlesProps {
  arabicArticles: Article[];
  englishArticles: Article[];
}
export default function Articles({
  arabicArticles,
  englishArticles,
}: ArticlesProps) {
  const t = useTranslations("blog");
  const lcoale = useLocale();
  const articles = lcoale === "ar" ? arabicArticles : englishArticles;
  const [sortedArticles, setSortedArticles] = useState(articles);
  return (
    <div className="container mx-auto my-16 px-4 transition duration-500 md:mt-20 md:px-8">
      <div className="my-8">
        <h2 className="text-3xl font-medium text-main-color lg:text-5xl">
          {t("heading")}
        </h2>
        <p className="mt-4">{t("subHeading")}</p>
      </div>
      {<Featured featuredArticles={articles.slice(0, 4)} /> ||
        "No Featured Articles!"}
      <hr className="my-12" />
      <div className="my-8 flex flex-col gap-6">
        <h2 className="text-3xl font-medium text-main-color lg:text-5xl">
          {t("explore.heading")}
        </h2>
        <Filters articles={articles} setSortedArticles={setSortedArticles} />
        {sortedArticles.length ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sortedArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                variant="default"
                removeShadow={true}
              />
            )) || "No Articles For This Category!"}
          </div>
        ) : (
          <p className="text-center text-slate-500">{t("noArticles")}</p>
        )}
      </div>
    </div>
  );
}
