import React from "react";
import {
  BanknotesIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

const OverviewCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex items-center bg-white shadow p-4 rounded-md w-full transition-transform transform hover:-translate-y-1">
      <Icon className="text-blue-600 mr-4 h-10 w-10 " />
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h4 className="text-xl font-bold">{value}</h4>
      </div>
    </div>
  );
};

export default OverviewCard;
