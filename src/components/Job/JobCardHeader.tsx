import JobCardMetas from "./JobCardMetas";
import { JobHeaderData } from "@/types/job";

const JobCardHeader = ({ headerData }: { headerData: JobHeaderData }) => {
  const { logoUrl, companyName, jobPosition, isNew, isFeatured, metas } =
    headerData;
  return (
    <header className="flex flex-col xl:flex-row gap-[clamp(0.5rem,1vw,1rem)] xl:gap-6">
      <div className="h-10 xl:h-auto">
        <img
          className="absolute -top-6.25 md:-top-9 xl:relative xl:top-0 w-12 md:w-17 xl:w-22 aspect-square object-fill"
          src={logoUrl}
          alt={`${companyName} logo`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <p className="text-secondary">{companyName}</p>
          <ul className="flex gap-2">
            {isNew && (
              <li className="text-badge bg-green-400 rounded-[20px] p-2">
                NEW!
              </li>
            )}
            {isFeatured && (
              <li className="text-badge bg-green-900 rounded-[20px] p-2">
                FEATURED
              </li>
            )}
          </ul>
        </div>
        <h2 className="text-primary">{jobPosition}</h2>
        <JobCardMetas metas={metas} />
      </div>
    </header>
  );
};

export default JobCardHeader;
