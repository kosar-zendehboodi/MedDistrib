// Filter.js
import { useSearchParams } from "react-router-dom";

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-gray-300 bg-gray-50 rounded-lg">
        {options.map((option) => {
          const active = option.value === currentFilter;
          return (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              disabled={option.value === currentFilter}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 
                ${active ? "!bg-blue-900 text-white" : "bg-gray-50 text-gray-800"}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
