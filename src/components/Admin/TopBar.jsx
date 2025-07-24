import { BellIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded-md outline-none"
      />
      <div className="flex items-center gap-4">
        <BellIcon className="text-gray-600" />
        <span className="font-semibold">Admin</span>
      </div>
    </div>
  );
};

export default Topbar;
