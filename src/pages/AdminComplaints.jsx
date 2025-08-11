import React from "react";
import TicketsTable from "../components/Table/tickets/table";
import WidgetCard from "../components/Cards/widget-card";
import cn from "../Utils/class-names";
import { OrderTable } from "../components/Table/OrderTable";

export const AdminComplaints = ({ className }) => {
  return (
    <div className="grid grid-cols-12 gap-6 3xl:gap-8">
       <OrderTable />
    </div>
  );
};
