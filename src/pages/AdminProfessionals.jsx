
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { EmployeeTable } from '../components/Table/EmployeeTable/EmployeeTable';
export const AdminProfessionals = ({className}) => {
  return (
   <div>
    {/* <EmployeeTable/> */}
    <div className="flex justify-end mb-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                  font-medium rounded-lg text-sm 
                 px-5 py-2.5 me-2 flex gap-2"
        >
          <UserPlusIcon className="h-5 w-5" />
          <span>ADD EMPLOYEE</span>
        </button>
      </div>
 <OrderTable />

   </div>
  )
}
