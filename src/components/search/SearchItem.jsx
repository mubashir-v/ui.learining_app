import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function SearchItems({ fetcher, setter }) {
  const [searchText, setSearchText] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    debouncedFetcher(text);
  };

  const debouncedFetcher = debounce(fetcher, 300);

  return (
    <div className="relative w-full"> {/* Relative container for positioning */}
      <HiOutlineSearch
        fontSize={20}
        className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-4"
      />
      <input
        type="text"
        placeholder="Search.."
        className="text-sm focus:outline-none h-10 w-full border pl-11 border-gray-300 rounded-full px-4"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchItems;
