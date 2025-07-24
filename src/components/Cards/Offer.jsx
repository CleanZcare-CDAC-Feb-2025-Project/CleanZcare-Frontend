import React, { useState } from "react";
import PercentageIcon from "../Icons/Percentage";
import GeneralModal from "../Modals/generalModl";
import { useDispatch, useSelector } from "react-redux";
import { applyDiscount, removeDiscount } from "../../Cart/CartSlice";

const OfferCard = ({ offerData, show, classname, others }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const slicedData = offerData ? offerData.slice(1) : [];
  const [terms, setTerms] = useState(false);
  const discountapplied = useSelector((state) => state.cart.discount.isApplied);
  const itemsLength = useSelector((state) => state.cart.items.length);
  // alert(itemsLength);
  // console.log(offerData);
  const handelClose = () => {
    setTerms(false);
  };
  const handelCoupan = (minamt, discamt) => {
    // alert(minamt);
    dispatch(applyDiscount({ minamt: minamt, discamt: discamt }));
  };
  return (
    <div
      className={`mt-7 space-y-4 rounded-lg  bg-white p-3 sm:p-4  ${classname}`}
    >
      <div className="flex gap-4 cursor-pointer justify-between ">
        <span className="flex gap-4 cursor-pointer ">
          <div>
            <PercentageIcon
              className={"bg-gray-200 border border-gray-200"}
              PclassName={"h-6 w-6"}
            />
          </div>
          <span>
            <p className="font-semibold">{offerData[0].title}</p>
            <p className="text-gray-400">{offerData[0].subTitle}</p>
            {show && (
              <>
                <p className="text-green-400 text-sm">
                  {offerData[0].discription}
                </p>
                {offerData[0].terms && (
                  <p
                    className="text-black hover:text-gray-400 underline"
                    onClick={() => setTerms(true)}
                  >
                    View T&C{" "}
                  </p>
                )}
                {terms && (
                  <GeneralModal
                    terms={offerData[0].terms}
                    show={terms}
                    close={handelClose}
                  />
                )}
              </>
            )}
          </span>
        </span>
        {!others && (
          <div className="">
            {discountapplied ? (
              <button
                type="submit"
                className="top-0 end-0 p-2.5 h-full text-sm font-medium text-black rounded-e-lg focus:ring-0 focus:outline-none focus:ring-blue-300"
                onClick={() => dispatch(removeDiscount())}
              >
                Remove
              </button>
            ) : (
              <button
                type="submit"
                className={
                  "top-0 end-0 p-2.5 h-full text-sm font-medium rounded-e-lg focus:ring-0 focus:outline-none focus:ring-blue-300 " +
                  (itemsLength < 1
                    ? " cursor-not-allowed"
                    : "text-black bg-white")
                }
                onClick={() =>
                  handelCoupan(offerData[0].minamt, offerData[0].discamt)
                }
                disabled={itemsLength < 1}
              >
                Apply
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        {slicedData.length > 0 && (
          <div className="w-full ">
            {
              isOpen &&
                offerData &&
                offerData.slice(1).map((value, index) => (
                  <div className="flex gap-4 cursor-pointer">
                    <div>
                      <PercentageIcon
                        className={"bg-gray-200 border border-gray-200"}
                        PclassName={"h-6 w-6"}
                      />
                    </div>
                    <span>
                      <p className="font-semibold">{value.title}</p>
                      <p className="text-gray-400"> {value.subTitle}</p>
                      <p className="text-green-400 text-sm">
                        {value.discription}
                      </p>
                      {value.terms && (
                        <p
                          className="text-black hover:text-gray-400 underline"
                          onClick={() => setTerms(true)}
                        >
                          View T&C{" "}
                        </p>
                      )}
                      {terms && (
                        <GeneralModal
                          terms={value.terms}
                          show={terms}
                          close={handelClose}
                        />
                      )}
                    </span>
                  </div>
                ))
              // <div className="p-4 bg-white text-gray-700">
              //   Flowbite is an open-source library of interactive
              //   components built with Tailwind CSS, including buttons,
              //   modals, dropdowns, and more.
              // </div>
            }
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full mt-2 flex justify-between items-center p-4 font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              <span className="text-blue-500">View More Offers</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default OfferCard;
