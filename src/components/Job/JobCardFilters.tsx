import FilterItem from "./FilterItem";

const JobCardFilters = ({ filterTags }: { filterTags: string[] }) => {
  return (
    <footer>
      <ul className="flex flex-wrap gap-2">
        {filterTags.map((tag) => (
          <FilterItem key={tag} tagName={tag} />
        ))}
      </ul>
    </footer>
  );
};

export default JobCardFilters;
