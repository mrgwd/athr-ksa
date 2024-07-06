import { ArrowRight, Briefcase, Location } from "iconsax-react";
import Link from "next/link";

interface JobCardProps {
  title: string;
  location: string;
  workType: "Full-Time" | "Part-Time";
}
export default function JobCard({ title, location, workType }: JobCardProps) {
  return (
    <Link
      href="/careers/job-details"
      className="group flex items-center justify-between gap-4 rounded-3xl bg-[#eef2f6] p-6"
    >
      <div>
        <p className="font-semibold group-hover:underline">{title}</p>
        <div className="mt-1 flex gap-3 text-slate-500">
          <div className="flex gap-2">
            <Location variant="Bulk" />
            <p>{location}</p>
          </div>
          -
          <div className="flex gap-2">
            <Briefcase variant="Bulk" />
            <p>{workType}</p>
          </div>
        </div>
      </div>
      <div>
        <ArrowRight />
      </div>
    </Link>
  );
}
