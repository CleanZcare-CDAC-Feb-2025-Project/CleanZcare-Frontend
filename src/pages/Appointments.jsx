import React from "react";
import OverviewCard from "../components/Admin/cards/OverviewCards";
import UserDougnetChart from "../components/Charts/UserDougnetChart";
import MontlyIncomeChart from "../components/Charts/lineCharts";
import CategoryWiseOrdersChart from "../components/Charts/CategorywiseOrders";
import ProfessionalDougnetChart from "../components/Charts/Professionals";
import { OrderTable } from "../components/Table/OrderTable";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  XMarkIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import UpcomingAppointmentTable from "../components/Table/upcoming-appointment-table";
import { AdminComplaints } from "./AdminComplaints";

export const Appointments = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <OverviewCard
          icon={ClipboardDocumentCheckIcon}
          title="Total Appointment"
          value="1500"
        />
        <OverviewCard
          icon={CheckBadgeIcon}
          title="Scheduled Appointments"
          value="500"
        />
        <OverviewCard icon={ClockIcon} title="Wating List" value="30" />
        <OverviewCard icon={XMarkIcon} title="Cancelled" value="$120K" />
      </div>
      <div className="flex flex-col gap-y-4">
     <UserTable />
      </div>
    </>
  );
};
