import React from "react";
import OverviewCard from "../components/Admin/cards/OverviewCards";
import UserDougnetChart from "../components/Charts/UserDougnetChart";
import MontlyIncomeChart from "../components/Charts/lineCharts";
import CategoryWiseOrdersChart from "../components/Charts/CategorywiseOrders";
import ProfessionalDougnetChart from "../components/Charts/Professionals";
import { OrderTable } from "../components/Table/OrderTable";
import {
  BanknotesIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
const cardData=[
  {
    icon: UserGroupIcon,
    title:"Total Users",
    value:"1500"
  },
  {
    icon: WrenchIcon,
    title:"Professionals",
    value:"500"
  },
  {
    icon: ClipboardDocumentListIcon,
    title:"Bookings Today",
    value:"1500"
  },{
    icon:BanknotesIcon,
    title:"Total Revenue",
    value:""

  }
]
export const AdminLandingPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
         {cardData.map((data, index) => (
        <OverviewCard
          key={index}
          icon={data.icon}
          title={data.title}
          value={data.value}
        />
      ))}
        {/* <OverviewCard icon={UserGroupIcon} title="Total Users" value="1500" />
        <OverviewCard icon={WrenchIcon} title="Professionals" value="500" />
        <OverviewCard
          icon={ClipboardDocumentListIcon}
          title="Bookings Today"
          value="30"
        />
        <OverviewCard
          icon={BanknotesIcon}
          title="Total Revenue"
          value="$120K"
        /> */}
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <UserDougnetChart />
          </div>
          <div className="col-span-6 ">
            {/* <ProfessionalDougnetChart />
             */}
            <MontlyIncomeChart />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <CategoryWiseOrdersChart />
          </div>
          <div className="col-span-6 ">
            <ProfessionalDougnetChart />

            {/* <MontlyIncomeChart /> */}
          </div>
        </div>
        <div>
          <OrderTable />
        </div>
        {/* <div>
          <UserTable />
        </div>
        <div>
          <ServicesTable />
        </div> */}
      </div>
    </>
  );
};
