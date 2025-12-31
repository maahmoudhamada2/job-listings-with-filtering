import removeIcon from "@/assets/images/icon-remove.svg";

interface FilterItemProps {
  isBar: boolean;
  tagName: string;
  handleFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterItem = ({ isBar, tagName, handleFn }: FilterItemProps) => {
  return (
    <>
      {isBar ? (
        <li className="text-filter bg-green-50 rounded-sm flex gap-2 pl-2">
          {tagName}
          <button
            onClick={handleFn}
            className="p-2 bg-green-400 rounded-br-sm rounded-tr-sm">
            <img src={removeIcon} alt="remove filter icon" />
          </button>
        </li>
      ) : (
        <li className="text-filter bg-green-50 rounded-sm">
          <button onClick={handleFn} className="px-4 py-2">
            {tagName}
          </button>
        </li>
      )}
    </>
  );
};

export default FilterItem;
