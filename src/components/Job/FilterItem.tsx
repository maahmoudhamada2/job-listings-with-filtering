import removeIcon from "@/assets/images/icon-remove.svg";

interface FilterItemProps {
  isBar: boolean;
  tagName: string;
}

const FilterItem = ({ isBar, tagName }: FilterItemProps) => {
  return (
    <>
      {isBar ? (
        <li className="text-filter bg-green-50 rounded-sm flex gap-2 pl-2">
          {tagName}
          <button className="p-2 bg-green-400 rounded-br-sm rounded-tr-sm">
            <img src={removeIcon} alt="remove filter icon" />
          </button>
        </li>
      ) : (
        <li className="text-filter bg-green-50 rounded-sm">
          <button className="px-4 py-2">{tagName}</button>
        </li>
      )}
    </>
  );
};

export default FilterItem;
