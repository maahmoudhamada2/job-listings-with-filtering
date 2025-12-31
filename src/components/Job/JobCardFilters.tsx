import FilterItem from "./FilterItem";
import { Dispatch, SetStateAction } from "react";

interface JobCardFiltersProp {
  filterTags: string[];
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>;
}

const JobCardFilters = ({
  filterTags,
  setActiveFilters,
}: JobCardFiltersProp) => {
  const handleClick = (tag: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.add(tag);
      return next;
    });
    window.scroll({ top: 0 });
  };
  return (
    <footer>
      <ul className="flex flex-wrap gap-2">
        {filterTags.map((tag) => (
          <FilterItem
            key={tag}
            isBar={false}
            tagName={tag}
            handleFn={(e) => handleClick(tag)}
          />
        ))}
      </ul>
    </footer>
  );
};

export default JobCardFilters;
