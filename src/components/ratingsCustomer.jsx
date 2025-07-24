import { StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import React from 'react'

const RatingsCustomer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-9">
    <div className="flex gap-2.5">
      <StarIcon className="w-10 text-gray-600 " />
      <div className="">
        <h2 className="font-medium text-2xl">4.8</h2>
        <p className="text-gray-500">Service Rating*</p>
      </div>
    </div>
    <div className="flex gap-2.5">
      <UserGroupIcon className="w-10 text-gray-600" />
      <div>
        <h2 className="font-medium text-2xl">12M+</h2>
        <p className="text-gray-500">Customer Globally*</p>
      </div>
    </div>
  </div>
  )
}
export default RatingsCustomer;