const FilterItem = ({ tagName }: { tagName: string }) => {
  return (
    <li>
      <button className="text-filter filter-btn">{tagName}</button>
    </li>
  );
};

export default FilterItem;
