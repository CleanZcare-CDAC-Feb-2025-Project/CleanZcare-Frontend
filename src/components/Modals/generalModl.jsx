import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/20/solid";
import OfferCard from "../Cards/Offer";
import { OfferSuccess } from "./offerSuccess";

const GeneralModal = ({ show, close, data, terms }) => {
  const modalRef = useRef(null);
  const [coupan, setCoupan] = useState("");
  const [success, setSuccess]=useState(false);
  // alert("called")
  // console.log(data.others.data);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);
  function handelCoupan() {
    setSuccess(true);
    // close();
    console.log(coupan);
  }
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-center z-50 overflow-y-auto "
      onClick={close}
    >
      {success &&
        <OfferSuccess />
      }
      <div
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex="0"
        className="relative bg-white px-0 rounded-lg shadow-lg outline-none w-full max-w-xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex flex-row justify-between items-center border-b border-gray-200 py-6 px-3 sticky top-0 bg-white z-10">
          <span className="flex flex-row gap-2 items-center">
            <ArrowLeftIcon className="h-6 cursor-pointer" onClick={close} />
            {data?.title ? (
              <p className="text-lg font-bold">{data?.title || "Offers"}</p>
            ) : (
              <p className="text-lg font-bold">{"Terms And Conditions"}</p>
            )}
          </span>
          {/* <ShareIcon className="h-6 cursor-pointer" /> */}
        </div>
        <div className="space-y-3">
          {/* Coupon Input */}
          {data?.coupan && (
            <div className="p-2">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Coupan Code"
                  onChange={(e) => setCoupan(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300"
                  onClick={handelCoupan}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
          {/* Offer List */}
          {data?.offers && (
            <div className="flex flex-col flex-wrap justify-around gap-3 p-2">
              <OfferCard
                offerData={data.offers}
                show={true}
                handelCoupan={()=>handelCoupan()}
                classname={"!border-0"}
              />
            </div>
          )}
          {data?.others && (
            <div className="border-t-8 border-gray-500 ">
              <div className="p-3">
                <h3 className="text-lg font-semibold">Payment offers</h3>
                <p className="p-0 m-0 text-sm">No Code Required</p>
              </div>
              <div className="flex flex-col flex-wrap justify-around gap-3">
                <OfferCard
                  offerData={data.others}
                  show={true}
                  others={true}
                  classname={"!border-0"}
                />
              </div>
            </div>
          )}
          {terms && (
            <div className="mt-4 p-4  rounded-md">
              {/* <h3 className="text-base font-semibold text-gray-800 mb-2">
              {terms.title}
            </h3> */}
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {terms.data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
