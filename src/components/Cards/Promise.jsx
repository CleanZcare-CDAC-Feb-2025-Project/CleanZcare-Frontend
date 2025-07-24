import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const Promise = () => {
  return (
    <div className="flex flex-col gap-2 border border-gray-200 shadow-md p-3 rounded-xl mt-7">
      <div className="font-bold p-2">CZC Promise</div>
      <p className="flex gap-2">
        <CheckIcon className="h-5 font-bold" /> Verified Professionals
      </p>
      <p className="flex gap-2">
        <CheckIcon className="h-5" /> Hassle Free Booking
      </p>
      <p className="flex gap-2">
        <CheckIcon className="h-5" /> Transparent Pricing
      </p>
    </div>
  );
};

export default Promise;