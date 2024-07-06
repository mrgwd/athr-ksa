import { getJobsList } from "@/app/_api/jobs.api";
import Benefits from "@/app/_components/careers/Benefits";
import CareersHeader from "@/app/_components/careers/CareersHeader";
import Jobs from "@/app/_components/careers/Jobs";
import LifeAtATHR from "@/app/_components/careers/LifeAtATHR";

export default async function Careers() {
  const jobs = await getJobsList();
  return (
    <div>
      <CareersHeader />
      <Benefits />
      <LifeAtATHR />
      <Jobs jobs={jobs} />
    </div>
  );
}
