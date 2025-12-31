import FiltersBar from "./FiltersBar";
import JobCard from "./JobCard";
import jobs from "@/data/jobs";

const JobList = () => {
  return (
    <main className="px-[24px]  pb-[50px] xl:px-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-[16px] gap-y-[35px] md:gap-y-[60px] xl:gap-y-[24px] xl:gap-x-[16px]">
      <FiltersBar filtersList={["Frontend", "CSS", "JavaScript"]} />
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </main>
  );
};

export default JobList;
