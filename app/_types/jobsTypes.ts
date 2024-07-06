export type Job = {
  id: string;
  jobTitle: string;
  jobDescription: string;
  requirements: string;
  workHours: "0" | "1";
  location: "0" | "1";
  datePosted: string;
  deadline: string;
  jobOrIntern: "0" | "1";
  salary: number;
};
export type Jobs = Job[];
export type JobsCategory = {
  id: string;
  name: string;
};
