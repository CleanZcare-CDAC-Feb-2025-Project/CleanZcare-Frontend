import React from "react";
// import {
//   FaUsers,
//   FaWrench,
//   FaClipboardList,
//   FaMoneyBill,
// } from "react-icons/fa";
import Topbar from "../components/Admin/TopBar";
import Sidebar from "../components/Admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  
  return (
    <div className="flex">
      <Sidebar role={"Admin"}/>
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
