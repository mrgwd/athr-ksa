import {
  getArabicArticles,
  getArticlesCategories,
} from "@/app/_api/articles.api";
import ArticleCard from "@/app/_components/common/ArticleCard";
import { Article } from "@/app/_types/articlesTypes";

const ids = await getArticlesCategories();
export async function generateStaticParams() {
  return ids.map((category: { name: string }) => ({
    category: category.name,
  }));
}

export default async function Page({ params }: any) {
  const arabicArticles = await getArabicArticles();
  return (
    <div className="container mx-auto flex flex-col gap-4">
      {arabicArticles
        .filter(
          (article: Article) =>
            article.category.url_name === params.articlePageId,
        )
        .map((article: Article) => (
          <ArticleCard
            key={article.category.id}
            article={article}
            variant="small"
          />
        ))}
      {/* <Articles
        arabicArticles={arabicArticles.filter(
          (article: Article) => article.category.id === params.articlePageId,
        )}
        englishArticles={englishArticles.filter(
          (article: Article) => article.category.id === params.articlePageId,
        )}
      /> */}
    </div>
  );
}
