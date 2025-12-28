import photosnap from "@/assets/images/photosnap.svg";

const JobCard = () => {
  return (
    <article className="card-container gap-[clamp(1rem,5vw,1.5rem)]">
      <header className="flex flex-col xl:flex-row gap-[clamp(0.5rem,1vw,1rem)] xl:gap-6">
        <div className="h-10 xl:h-auto">
          <img
            className="absolute -top-6.25 md:-top-9 xl:relative xl:top-0 w-12 md:w-17 xl:w-22 aspect-square object-fill"
            src={photosnap}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="text-secondary">Photosnap</p>
            <ul className="flex gap-2">
              <li className="text-badge bg-green-400 rounded-[20px] p-2">
                NEW!
              </li>
              <li className="text-badge bg-green-900 rounded-[20px] p-2">
                FEATURED
              </li>
            </ul>
          </div>
          <h2 className="text-primary">Senior Frontend Developer</h2>
          <ul className="flex list-disc gap-6">
            <li className="first:list-none marker:text-gray-300 text-meta whitespace-nowrap">
              1d ago
            </li>
            <li className="first:list-none marker:text-gray-300 text-meta whitespace-nowrap">
              Full Time
            </li>
            <li className="first:list-none marker:text-gray-300 text-meta whitespace-nowrap">
              USA only
            </li>
          </ul>
        </div>
      </header>
      <hr className=" border-gray-300 xl:hidden" />
      <footer>
        <ul className="flex flex-wrap gap-2">
          <li>
            <button className="text-filter filter-btn">Frontend</button>
          </li>
          <li>
            <button className="text-filter filter-btn">Senior</button>
          </li>
          <li>
            <button className="text-filter filter-btn">HTML</button>
          </li>
          <li>
            <button className="text-filter filter-btn">CSS</button>
          </li>
          <li>
            <button className="text-filter filter-btn">JavaScript</button>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default JobCard;
