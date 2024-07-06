"use client";
import { Job } from "@/app/_types/jobsTypes";
import { useState, useEffect } from "react";
import Section from "../common/Section";
import Filter from "./Filter";
import { getJobsList } from "@/app/_api/jobs.api";
import JobsList from "./JobsList";

export default function Jobs({ jobs }: { jobs: Job[] }) {
  // const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  console.log("jobs", jobs);
  console.log("filteredJobs", filteredJobs);
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const data = await getJobsList();
  //     setJobs(data);
  //     console.log("data", data);
  //     setFilteredJobs(data);
  //   };
  //   fetchJobs();
  // });

  // const handleFilter = () => {
  //   setFilteredJobs(jobs);
  // };

  return (
    <Section name="careers.jobs" id="jobs">
      <div>
        <Filter jobs={jobs} setFilteredJobs={setFilteredJobs} />
        <JobsList jobs={filteredJobs} />
      </div>
    </Section>
  );
}
