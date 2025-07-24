import { useState } from "react";
import {
  DocumentIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  HomeIcon,
  StarIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-300 text-black p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <Link to="/admin/Dashboard" className="flex items-center gap-3">
            <HomeIcon className="w-6 h-6 text-black-600" /> Dashboard
          </Link>
        </li>

        <li className="flex items-center gap-3">
          <Link to="/admin/Users" className="flex items-center gap-3">
            <UsersIcon className="w-6 h-6 text-black-600" /> Users
          </Link>
        </li>

        <li className="flex items-center gap-3">
          <Link to="/admin/Professionals" className="flex items-center gap-3">
            <WrenchIcon className="w-6 h-6 text-black-600" /> Professionals
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Link to="/admin/services" className="flex items-center gap-3">
            <ClipboardDocumentListIcon className="w-6 h-6 text-black-600" />{" "}
            Services
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Link to="/admin/Revenue" className="flex items-center gap-3">
            <BanknotesIcon className="w-6 h-6 text-black-600" /> Revenue
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Link to="/admin/Reviews" className="flex items-center gap-3">
            <StarIcon className="w-6 h-6 text-black-600" /> Reviews
          </Link>
        </li>

        {/* --- Reports with toggle --- */}
        <li>
          <button
            type="button"
            onClick={() => setIsReportsOpen(!isReportsOpen)}
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          >
            <DocumentIcon className="shrink-0 w-5 h-5 text-gray-500 group-hover:text-gray-900" />
            <span className="flex-1 ms-3 text-left whitespace-nowrap">
              Reports
            </span>
            <svg
              className={`w-3 h-3 transform transition-transform ${
                isReportsOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* --- Dropdown content --- */}
          {isReportsOpen && (
            <ul className="py-2 space-y-2">
              {/* Service Bookings */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  Service Bookings
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="All Bookings" />
                  <SidebarLink label="Upcoming Bookings" />
                  <SidebarLink label="Completed Services" />
                  <SidebarLink label="Cancelled Bookings" />
                </ul>
              </li>

              {/* User Reports */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  User Reports
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="Customer List" />
                  <SidebarLink label="Service Providers" />
                  <SidebarLink label="User Signups" />
                </ul>
              </li>

              {/* Financial Reports */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  Financial Reports
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="Revenue" />
                  <SidebarLink label="Commission" />
                  <SidebarLink label="Settlements" />
                  <SidebarLink label="Refunds" />
                </ul>
              </li>

              {/* Ratings */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  Ratings & Reviews
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="Feedback" />
                  <SidebarLink label="Low-rated Services" />
                </ul>
              </li>

              {/* Performance */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  Performance Reports
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="Top Services" />
                  <SidebarLink label="Top-rated Pros" />
                  <SidebarLink label="Least Performed" />
                  <SidebarLink label="Avg Completion Time" />
                </ul>
              </li>

              {/* Complaints */}
              <li>
                <span className="block px-6 py-1 text-sm text-gray-500">
                  Issues & Complaints
                </span>
                <ul className="space-y-1">
                  <SidebarLink label="Customer Complaints" />
                  <SidebarLink label="Provider Issues" />
                </ul>
              </li>

              {/* Cancellations */}
              <li>
                <span className="block px-6 py-1 text-sm">
                  Cancellation & No-shows
                </span>
              </li>
            </ul>
          )}
        </li>

        <li className="flex items-center gap-3">
          <Cog6ToothIcon className="w-6 h-6 text-black-600" /> Settings
        </li>
      </ul>
    </div>
  );
};

const SidebarLink = ({ label }) => (
  <li>
    <a href="#" className="block px-11 py-1 text-gray-900 hover:bg-gray-100">
      {label}
    </a>
  </li>
);

export default Sidebar;
