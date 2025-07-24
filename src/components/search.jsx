import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SearchInput from "./searchInputs";

function CitySearchDropdown() {

  return (
    <div className="flex items-center">
      <label htmlFor="search-city" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-1 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <SearchInput/>
      </div>

  
    </div>
  );
}

export default CitySearchDropdown;
