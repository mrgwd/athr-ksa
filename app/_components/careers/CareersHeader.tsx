"use client";
import { useTranslations } from "next-intl";
import "./careers.css";
import Button from "../common/Button";
import ScrollIndicator from "../common/ScrollIndicator";
export default function CareersHeader() {
  const t = useTranslations("careers");
  return (
    <>
      <div className="careers-header bg-cover">
        <div className="container mx-auto flex flex-col items-center px-4 pb-20 pt-40 text-white max-md:gap-8 md:flex-row md:items-end md:justify-between lg:px-8">
          <h1 className="text-4xl font-medium max-md:text-center md:text-5xl md:!leading-normal lg:text-6xl">
            {t("heading1")}{" "}
            <span className="bg-gradient-to-tl from-main-color to-[#AAF8EA] bg-clip-text  text-transparent">
              {t("athr")}{" "}
            </span>
            <br />
            {t("heading2")}
          </h1>
          <Button text={t("button")} href="#jobs" variant="withIcon" notRounded>
            <span>&#129128;</span>
          </Button>
        </div>
      </div>
      <ScrollIndicator variant="simple" />
    </>
  );
}
