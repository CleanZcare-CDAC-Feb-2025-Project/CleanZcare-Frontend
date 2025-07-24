import React from "react";
// import {
//   FaUsers,
//   FaWrench,
//   FaClipboardList,
//   FaMoneyBill,
// } from "react-icons/fa";
import Topbar from "../components/Admin/TopBar";
import Sidebar from "../components/Admin/Sidebar";
import OverviewCard from "../components/Admin/cards/OverviewCards";

import UserDougnetChart from "../components/Charts/UserDougnetChart";
import ProfessionalDougnetChart from "../components/Charts/Professionals";
import MontlyIncomeChart from "../components/Charts/lineCharts";
import CategoryWiseOrdersChart from "../components/Charts/CategorywiseOrders";
import { UserTable } from "../components/Table/UserTable ";
import { OrderTable } from "../components/Table/OrderTable";
import { ServicesTable } from "../components/Table/Services";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
