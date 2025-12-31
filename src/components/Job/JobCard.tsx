import { Job, JobHeaderData } from "@/types/job";
import JobCardHeader from "./JobCardHeader";
import JobCardFilters from "./JobCardFilters";
import getImgUrl from "@/utils/getImgUrl";
import { Dispatch, SetStateAction } from "react";

interface JobCardProps {
  job: Job;
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>;
}

const JobCard = ({ job, setActiveFilters }: JobCardProps) => {
  const headerData: JobHeaderData = {
    logoUrl: getImgUrl(job.logo),
    companyName: job.company,
    jobPosition: job.position,
    isNew: job.new,
    isFeatured: job.featured,
    metas: [job.postedAt, job.contract, job.location],
  };

  const filterTags: string[] = [
    job.role,
    job.level,
    ...job.languages,
    ...job.tools,
  ];

  return (
    <article className="card-container gap-[clamp(1rem,5vw,1.5rem)] shadow-primary">
      <JobCardHeader headerData={headerData} />
      <hr className=" border-gray-300 xl:hidden" />
      <JobCardFilters
        filterTags={filterTags}
        setActiveFilters={setActiveFilters}
      />
    </article>
  );
};

export default JobCard;
