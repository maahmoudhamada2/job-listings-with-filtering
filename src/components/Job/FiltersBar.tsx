import FilterItem from "./FilterItem";

const FiltersBar = ({ filtersList }: { filtersList: string[] }) => {
  return (
    <div className="relative h-[2rem] md:max-xl:col-span-2">
      <div
        className="w-full flex gap-10 max-sm:gap-5 justify-between 
        rounded-[5px] bg-white 
        absolute -top-19
        px-[clamp(0.5rem,5vw,1.5rem)] py-5 max-sm:px-2 max-sm:py-4 
        ">
        <ul className="flex flex-wrap gap-[16px]">
          {filtersList.map((filter) => (
            <FilterItem isBar={true} tagName={filter} />
          ))}
        </ul>
        <button className="text-filter text-gray-300">Clear</button>
      </div>
    </div>
  );
};

export default FiltersBar;
