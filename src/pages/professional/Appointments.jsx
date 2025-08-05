import React, { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, ClockIcon, MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/solid";


// Dummy appointment data
const appointments = [
  {
    id: 1,
    customer: "Ravi Sharma",
    service: "AC Repair",
    date: "2025-08-05",
    time: "10:00 AM",
    status: "Upcoming"
  },
  {
    id: 2,
    customer: "Mukesh Sharma",
    service: "Tv Repair",
    date: "2025-08-05",
    time: "3:00 PM",
    status: "Upcoming"
  },
  {
    id: 3,
    customer: "Neha Verma",
    service: "Salon at Home",
    date: "2025-08-03",
    time: "02:00 PM",
    status: "Completed"
  },
  {
    id: 4,
    customer: "Aman Gupta",
    service: "Plumbing",
    date: "2025-08-02",
    time: "11:30 AM",
    status: "Cancelled"
  },
];

const statusColors = {
  Upcoming: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};



const tabs = ["All", "Upcoming", "Completed", "Cancelled"]; 

const statusIcons = {
  Upcoming: <ClockIcon className="w-4 h-4 mr-1 text-blue-700" />,
  Completed: <CheckCircleIcon className="w-4 h-4 mr-1 text-green-700" />,
  Cancelled: <XCircleIcon className="w-4 h-4 mr-1 text-red-700" />,
};

const Appointments = () => {
  console.log("Appointments component loaded");

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = appointments.filter((a) => {
  const matchesSearch = a.customer.toLowerCase().includes(search.toLowerCase());
  const matchesStatus = statusFilter === "All" || a.status === statusFilter;
  return matchesSearch && matchesStatus;
});

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <CalendarDaysIcon className="w-6 h-6" />
        Appointments
      </h2>

     {/* tabs */}
     <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setStatusFilter(tab)}
            className={`px-4 py-2 rounded-full border ${
              statusFilter === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* search input */}
     <div className="relative w-full max-w-md mb-4">
  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
  <input
    type="text"
    placeholder="Search by customer name"
    className="w-full p-2 pl-10 border rounded"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>


      
      
      {/* Appointments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((appt) => (
              <tr key={appt.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{appt.customer}</td>
                <td className="p-3">{appt.service}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${statusColors[appt.status]}`}>
                  {statusIcons[appt.status]}
                  {appt.status}
                </span>

                </td>
                <td className="py-2 px-4 border">
          <button className="text-blue-600 hover:underline">View</button>
           {appt.status === "Upcoming" && (
           <>
           <button
           className="ml-2 bg-red-100 text-red-700 text-sm px-2 py-1 rounded hover:bg-red-200"
           onClick={() => handleCancel(appt.id)}
           >
           Cancel
          </button>
           <button
           className="ml-2 bg-green-100 text-green-700 text-sm px-2 py-1 rounded hover:bg-green-200"
           onClick={() => handleMarkCompleted(appt.id)}
           >
           Mark as Completed
          </button>
          </>
          )}
           </td>
            </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
