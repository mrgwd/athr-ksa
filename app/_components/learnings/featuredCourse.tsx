"use client";
import Image from "next/image";
import CourseDetails from "./courseDetails";
import LevelBadge from "./levelBadge";
import { DocumentCopy, Layer, VideoCircle } from "iconsax-react";
import { useLocale, useTranslations } from "next-intl";
import { Course } from "@/app/_types/coursesTypes";
import Button from "../common/Button";

interface FeaturedCourseProps {
  course: Course;
  name: string;
}
export default function FeaturedCourse({ course, name }: FeaturedCourseProps) {
  const { title, description, level } =
    useLocale() === "ar"
      ? {
          title: course.titleInArabic,
          description: course.descriptionInArabic,
          level: course.levelInArabic,
        }
      : {
          title: course.title,
          description: course.description,
          level: course.level,
        };
  const t = useTranslations("learnings.courses");
  return (
    <div className="relative gap-4 rounded-2xl border-slate-200 p-3 max-sm:border max-sm:bg-white md:flex lg:gap-10">
      <Image
        className="h-96 w-full object-cover md:rounded-3xl"
        src="/images/learnings/course1.jpg"
        width={550}
        height={400}
        alt="Featured Course"
      />
      <div className="mt-2 flex max-w-md flex-col gap-2 p-4 md:gap-4">
        <LevelBadge level={level} className="right-6 top-8 max-md:absolute" />
        <h1 className="text-xl font-semibold text-main-color md:text-4xl">
          {title}
        </h1>
        <p className="text-main-dark">{description}</p>
        <div className="mt-2 flex gap-4">
          <CourseDetails name={t(`${name}.duration`)} number={course.duration}>
            <VideoCircle variant="Bulk" />
          </CourseDetails>
          <CourseDetails name={t(`${name}.lessons`)} number={course.lessons}>
            <DocumentCopy variant="Bulk" />
          </CourseDetails>
          <CourseDetails
            name={t(`${name}.assignments`)}
            number={course.assignments}
          >
            <Layer variant="Bulk" />
          </CourseDetails>
        </div>
        <Button
          href="#contact"
          text={t("detailsButton")}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
