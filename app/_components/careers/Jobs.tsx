"use client";
import { Job } from "@/app/_types/jobsTypes";
import { useState, useEffect } from "react";
import Section from "../common/Section";
import Filter from "./Filter";
import JobsList from "./JobsList";

export default function Jobs({ jobs }: { jobs: Job[] }) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  console.log("jobs", jobs);
  console.log("filteredJobs", filteredJobs);

  return (
    <Section name="careers.jobs" id="jobs">
      <div>
        <Filter jobs={jobs} setFilteredJobs={setFilteredJobs} />
        <JobsList jobs={filteredJobs} />
      </div>
    </Section>
  );
}
