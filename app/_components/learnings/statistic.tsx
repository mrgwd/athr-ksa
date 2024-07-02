import { getTranslations } from "@/app/_i18n";

interface StatisticProps {
  name: string;
  locale: string;
}
export default async function Statistic({ name, locale }: StatisticProps) {
  const t = await getTranslations({ locale, namespace: name });
  return (
    <p className="text-base font-medium text-main-dark lg:text-xl">
      <span className="text-3xl font-bold text-main-color">{t("number")}</span>
      <br />
      {t("text")}
    </p>
  );
}
