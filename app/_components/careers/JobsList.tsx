import { Job } from "@/app/_types/jobsTypes";
import JobCard from "./JobCard";
import { useTranslations } from "next-intl";

export default function JobsList({ jobs }: { jobs: Job[] }) {
  const t = useTranslations("careers.jobs");
  return (
    <div dir="ltr">
      <div className="mb-4 mt-20 flex items-center justify-between">
        <p className="text-lg font-medium text-main-color">Software Engineer</p>
        <p dir="auto" className="text-slate-500">
          {jobs.length} {t("openPosition")}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.jobTitle}
            workType={job.workHours === "1" ? "Part-Time" : "Full-Time"}
            location={job.location === "1" ? "Remote" : "Onsite"}
          />
        ))}
      </div>
    </div>
  );
}
