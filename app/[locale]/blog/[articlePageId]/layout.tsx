import { getArabicArticles, getUserIp } from "@/app/_api/articles.api";
import { Article } from "@/app/_types/articlesTypes";

const arabicArticles = await getArabicArticles();

export async function generateStaticParams() {
  const articles = await arabicArticles.map(
    (article: Article) => article.category.url_name,
  );
  return articles.map((articlePageId: string) => ({
    articlePageId,
  }));
}
interface RootLayoutProps {
  children: React.ReactNode;
  params: { articlePageId: string };
}
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
