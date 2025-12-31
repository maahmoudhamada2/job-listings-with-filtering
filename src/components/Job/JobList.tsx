import FiltersBar from "./FiltersBar";
import JobCard from "./JobCard";
import jobs from "@/data/jobs";
import { useMemo, useState } from "react";

const JobList = () => {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return [...activeFilters].every((tag) => tags.includes(tag));
    });
  }, [activeFilters]);

  return (
    <main className="px-[24px]  pb-[50px] xl:px-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-[16px] gap-y-[35px] md:gap-y-[60px] xl:gap-y-[24px] xl:gap-x-[16px]">
      {activeFilters.size > 0 && (
        <FiltersBar
          activeFilters={activeFilters}
          setFiltersList={setActiveFilters}
        />
      )}
      {filteredJobs.map((job) => (
        <JobCard job={job} setActiveFilters={setActiveFilters} />
      ))}
    </main>
  );
};

export default JobList;
