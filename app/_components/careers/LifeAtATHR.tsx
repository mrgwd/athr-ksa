"use client";
import CareersCard from "./CareersCard";
import balance from "@/public/images/careers/balance.jpg";
import team from "@/public/images/careers/team.jpg";
import workplace from "@/public/images/careers/workplace.jpg";
import { useTranslations } from "next-intl";
import Section from "../common/Section";
export default function LifeAtATHR() {
  const t = useTranslations("careers.lifeAtAthr");
  return (
    <Section name="careers.lifeAtAthr">
      <div className="md:gridd hidden grid-cols-1 flex-wrap gap-4 md:flex lg:justify-center">
        <CareersCard
          title={t("1.subHeading")}
          description={t("1.description")}
          image={workplace}
        />
        <CareersCard
          title={t("2.subHeading")}
          description={t("2.description")}
          image={team}
        />
        <CareersCard
          title={t("3.subHeading")}
          description={t("3.description")}
          image={balance}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden md:grid-cols-2 xl:grid-cols-3">
        <CareersCard
          title={t("1.subHeading")}
          description={t("1.description")}
          image={workplace}
          variant="small"
        />
        <CareersCard
          title={t("2.subHeading")}
          description={t("2.description")}
          image={team}
          variant="small"
        />
        <CareersCard
          title={t("3.subHeading")}
          description={t("3.description")}
          image={balance}
          variant="small"
        />
      </div>
    </Section>
  );
}
