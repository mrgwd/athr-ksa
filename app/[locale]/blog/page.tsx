import { Metadata } from "next";
import Articles from "@/app/_components/blog/Articles";
import { getArabicArticles, getEnglishArticles } from "@/app/_api/articles.api";
const arabicMetadata: Metadata = {
  title: "المدونة: بوابتُك لِعالم التقنية",
  keywords: [
    "مؤسسة اثر للتسويق الرقمي",
    "مدونة أثر",
    "تصميم مواقع",
    "تحسين محركات البحث",
    "تصميم واجهات",
    "تصميم تطبيقات",
    "برمجة مواقع",
    "برمجة متاجر",
    "برمجة تطبيقات",
    "برمجة خاصة",
    "تسويق الكتروني",
    "حملات اعلانية",
    "تهيئة لمحركات البحث",
    "محتوى تسويقي",
    "محتوى اعلانى",
    "محتوى حصري",
    "موشن جرافيك",
    "هويات تجارية",
    "برامج محاسبية",
    "انظمة محاسبية",
  ],
  description:
    "في مدونة أثر، نشاركك أحدث الأفكار والمقالات حول التسويق الرقمي، تصميم وبرمجة المواقع، تصميم التطبيقات، والكثير من المواضيع الأخرى المتعلقة بالتكنولوجيا والتسويق الرقمي.",
  alternates: {
    canonical: "https://athr-ksa.com/ar/blog",
    languages: {
      en: "https://athr-ksa.com/en/blog",
      "ar-SA": "https://athr-ksa.com/ar/blog",
    },
  },
};

const englishMetadata: Metadata = {
  title: "Blog: Tech, Design, and Marketing Insights",
  keywords: [
    "Athar digital marketing agency",
    "Athar blog",
    "web design",
    "SEO",
    "UI/UX design",
    "app design",
    "web development",
    "e-commerce",
    "app development",
    "custom development",
    "digital marketing",
    "advertising",
    "SEO optimization",
    "marketing content",
    "advertising content",
    "exclusive content",
    "motion graphics",
    "branding",
    "accounting software",
    "accounting systems",
  ],
  description:
    "In the ATHR blog, we share with you the latest ideas and articles about digital marketing, web design and development, app design, and many other topics related to technology and digital marketing.",
  alternates: {
    canonical: "https://athr-ksa.com/en/blog",
    languages: {
      en: "https://athr-ksa.com/en/blog",
      "ar-SA": "https://athr-ksa.com/ar/blog",
    },
  },
};
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return params.locale === "ar" ? arabicMetadata : englishMetadata;
}
export default async function Page() {
  const arabicArticles = await getArabicArticles();
  const englishArticles = await getEnglishArticles();

  return (
    <Articles
      arabicArticles={arabicArticles}
      englishArticles={englishArticles}
    />
  );
}
