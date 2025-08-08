import React from "react";
import Categorycard from "../Cards/CategoryCard.jsx";
import { StarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import RatingsCustomer from "../ratingsCustomer.jsx";

const RenameCarausal = ({data}) => { 
  console.log("dataasdfafd",data);
  
  return (
    <div className="container max-w-7xl mx-auto mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-15 pb-5">
        <div className="px-7">
          <h1 className="text-4xl tracking-wide font-medium text-gray-900 mb-9">
            {data.title}
          </h1>
          <div className="max-w-120 p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-500 ">
              What are you looking for?
            </h5>
            <div className="flex flex-wrap justify-around gap-1" >
              {data?.services &&
                data?.services?.map((value, key) => (
                  <Categorycard key={key} data={value} modal={value.data} />
                ))}
            </div>
          </div>
         <RatingsCustomer/>
        </div>
        <div className="px-5">
          <img src="/czc.jpg" alt="czc" />
        </div>
      </div>
    </div>
  );
};

export default RenameCarausal;
