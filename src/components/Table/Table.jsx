import React, { useState } from "react";

export const Table = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Last 30 days');

  const filters = [
    'Last day',
    'Last 7 days',
    'Last 30 days',
    'Last month',
    'Last year',
  ];

  return (
    <div className="p-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        {/* Add New Button */}
        <div className="flex w-full sm:w-auto">
          <button
            className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
            type="button"
          >
            Add New Record
          </button>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <svg className="w-3 h-3 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              {selectedFilter}
              <svg className="w-2.5 h-2.5 ml-2" fill="none" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm mt-1">
                <ul className="p-3 space-y-1 text-sm text-gray-700">
                  {filters.map((filter) => (
                    <li key={filter}>
                      <div
                        onClick={() => {
                          setSelectedFilter(filter);
                          setShowDropdown(false);
                        }}
                        className="flex items-center p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="radio"
                          checked={selectedFilter === filter}
                          readOnly
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900">{filter}</label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 
                  4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="px-6 py-3">Product name</th>
              <th className="px-6 py-3">Color</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Apple MacBook Pro 17\"", "Silver", "Laptop", "$2999"],
              ["Microsoft Surface Pro", "White", "Laptop PC", "$1999"],
              ["Magic Mouse 2", "Black", "Accessories", "$99"],
              ["Apple Watch", "Silver", "Accessories", "$179"],
              ["iPad", "Gold", "Tablet", "$699"],
              ["Apple iMac 27\"", "Silver", "PC Desktop", "$3999"]
            ].map(([name, color, category, price], idx) => (
              <tr key={idx} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td className="w-4 p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{name}</td>
                <td className="px-6 py-4">{color}</td>
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">{price}</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
