import { Job } from "@/app/_types/jobsTypes";
import Button from "../common/Button";
import { Dispatch, SetStateAction, useState } from "react";
interface FilterProps {
  jobs: Job[];
  setFilteredJobs: Dispatch<SetStateAction<Job[]>>;
}
export default function Filter({ jobs, setFilteredJobs }: FilterProps) {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All departments");
  // 0 => Job, 1 => Internship, 2 => All
  const [jobType, setJobType] = useState("2");
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
  };
  const handleJobType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobType(e.target.value);
  };
  const handleFilter = () => {
    const filteredJobs = jobs.filter(
      (job) => jobType === "2" || job.jobOrIntern === jobType,
    );
    setFilteredJobs(filteredJobs);
    console.log("filteredJobs from filter component", filteredJobs);
  };
  return (
    <div className="flex flex-col flex-wrap justify-between gap-6 rounded-2xl p-4 shadow-[0_12px_25px_rgba(0,0,0,0.08)] max-md:items-center md:flex-row md:items-center md:gap-2 md:px-12">
      <p className="text-xl font-semibold">Filter by</p>
      <div className="flex flex-wrap gap-8">
        <select
          className="border-b border-slate-300 bg-slate-50 py-1 text-slate-500"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="All departments" className="py-2">
            All departments
          </option>
          {jobs.map((job) => (
            <option key={job.id} value={job.jobTitle} className="py-2">
              {job.jobTitle}
            </option>
          ))}
        </select>
        <select
          className="border-b border-slate-300 bg-slate-50 py-1 text-slate-500"
          value={jobType}
          onChange={handleJobType}
        >
          <option value="2" className="py-2">
            Job type
          </option>
          {jobs.map((job) => (
            <option key={job.id} value={job.jobOrIntern} className="py-2">
              {job.jobOrIntern === "0" ? "Job" : "Internship"}
            </option>
          ))}
        </select>
      </div>
      <Button type="button" text="Apply" notRounded onClick={handleFilter} />
    </div>
  );
}
