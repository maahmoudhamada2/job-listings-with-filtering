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
    <main
      className="px-6 pb-12.5 md:px-12.5 xl:px-41.5
                 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1
                 gap-x-4 gap-y-8.75 md:gap-y-15 xl:gap-y-6 xl:gap-x-4">
      {activeFilters.size > 0 && (
        <FiltersBar
          activeFilters={activeFilters}
          setFiltersList={setActiveFilters}
        />
      )}
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} setActiveFilters={setActiveFilters} />
      ))}
    </main>
  );
};

export default JobList;
