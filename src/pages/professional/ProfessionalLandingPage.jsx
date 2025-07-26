import React from 'react'
import OverviewCard from '../../components/Admin/cards/OverviewCards'
import {
    BanknotesIcon,
    ClipboardDocumentListIcon,
    UserGroupIcon,
    WrenchIcon,
    CheckBadgeIcon,
    XCircleIcon,
    ShoppingCartIcon,
    DocumentCurrencyRupeeIcon
} from "@heroicons/react/24/solid";
import UserDougnetChart from '../../components/Charts/UserDougnetChart';
import MontlyIncomeChart from '../../components/Charts/lineCharts';
import CategoryWiseOrdersChart from '../../components/Charts/CategorywiseOrders';
import ProfessionalDougnetChart from '../../components/Charts/Professionals';
import { OrderTable } from '../../components/Table/OrderTable';
import { PendingOrders } from '../../components/Table/Professional/PendingOrder';
import { CompletedOrders } from '../../components/Table/Professional/CompletedOrders';

const cartData = [
    {
        icon: ShoppingCartIcon,
        title: "Total Orders",
        value: "1500"
    },
    {
        icon: CheckBadgeIcon,
        title: "Accepted Orders",
        value: "500"
    },
    {
        icon: XCircleIcon,
        title: "Rejected Orders",
        value: "30"
    },
    {
        icon: DocumentCurrencyRupeeIcon,
        title: "Total Income",
        value: "$120K"
    }

]
function ProfessionalLandingPage() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                {
                    cartData.map((data, index) => (
                        <OverviewCard icon={data.icon} title={data.title} value={data.value} />
                    ))

                }
                {/* <OverviewCard icon={CheckBadgeIcon} title="Accepted Orders" value="500" />
        <OverviewCard
          icon={XCircleIcon}
          title="Rejected Orders"
          value="30"
        />
        <OverviewCard
          icon={DocumentCurrencyRupeeIcon}
          title="Total Income"
          value="$120K"
        /> */}

            </div>
            <div className="flex flex-col gap-y-4 mb-2">


                <div>
                    <PendingOrders />
                </div>
                <div>
                    <CompletedOrders />
                </div>
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


                {/* <div>
                <UserTable />
              </div>
              <div>
                <ServicesTable />
              </div> */}
            </div>
        </>
    )
}

export default ProfessionalLandingPage
