import { Job, JobHeaderData } from "@/types/job";
import JobCardHeader from "./JobCardHeader";
import JobCardFilters from "./JobCardFilters";
import getImgUrl from "@/utils/getImgUrl";

const JobCard = ({ job }: { job: Job }) => {
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
    <article className="card-container gap-[clamp(1rem,5vw,1.5rem)]">
      <JobCardHeader headerData={headerData} />
      <hr className=" border-gray-300 xl:hidden" />
      <JobCardFilters filterTags={filterTags} />
    </article>
  );
};

export default JobCard;
