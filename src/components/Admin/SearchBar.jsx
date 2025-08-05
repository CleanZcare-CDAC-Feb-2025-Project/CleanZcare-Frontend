import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-full max-w-md mb-4">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 pl-10 border rounded"
      />
    </div>
  );
};

export default SearchBar;
