import { Dispatch, SetStateAction } from "react";
import FilterItem from "./FilterItem";

interface FilterBarProps {
  activeFilters: Set<string>;
  setFiltersList: Dispatch<SetStateAction<Set<string>>>;
}

const FiltersBar = ({ activeFilters, setFiltersList }: FilterBarProps) => {
  const handleClick = (tag: string) => {
    setFiltersList((prev) => {
      const nextState = new Set(prev);
      nextState.delete(tag);
      return nextState;
    });
  };
  return (
    <div className="relative h-8 md:max-xl:col-span-2">
      <div
        className="w-full flex gap-10 max-sm:gap-5 justify-between 
        rounded-[5px] bg-white 
        absolute -top-19
        px-[clamp(0.5rem,5vw,1.5rem)] py-5 max-sm:px-2 max-sm:py-4 
        shadow-secondary">
        <ul className="flex flex-wrap gap-4">
          {[...activeFilters].map((filterTag) => (
            <FilterItem
              key={filterTag}
              isBar={true}
              tagName={filterTag}
              handleFn={() => handleClick(filterTag)}
            />
          ))}
        </ul>
        <button
          onClick={() => setFiltersList(new Set())}
          className="text-filter text-gray-300">
          Clear
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
