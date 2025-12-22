import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 w-full"
        placeholder="Search movies..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onSearch(value)} className="bg-blue-500 text-white px-4">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
