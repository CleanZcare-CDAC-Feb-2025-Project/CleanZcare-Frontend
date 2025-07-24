import React, { useEffect, useState } from "react";
import BookingCard from "../components/Cards/BookingCard";
import OfferCard from "../components/Cards/Offer";
import CartCard from "../components/Cards/CartCard";
import PaymentCard from "../components/Cards/PaymentCard";
import PercentageIcon from "../components/Icons/Percentage";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import GeneralModal from "../components/Modals/generalModl";
const data = {
  phoneNo: "8999523116",
  countryCode: "+91",
  address: "06, Raghavendra Nagar saiful bijapur road solapur",
};
const cartData = [
  {
    id: 1,
    title: "Fridge cleaning",
    quantity: 8,
    currency: "IND",
    price: 799,
  },
  {
    id: 2,
    title: "3 visits:  De-greasing kitchen pack",
    quantity: 8,
    price: 3684,
  },
];
const data1 = {
  title: "Coupons & Offers",
  coupan: true,
  offers: [
    {
      id: 1,
      title: "Flat Rs 300 off",
      subTitle: "Applicable on all models",
      discription: "SAVE 300 ON THIS ORDER",
      terms: {
        title: "Terms And Conditions",
        data: ["Flat Rs 300 off", "Valid once per user"],
      },
    },
  ],
  others: [
    {
      id: 1,
      title: "Amazon cashback upto ₹50",
      subTitle: "Via Amazon Pay balance",
      terms: {
        title: "Terms And Conditiond",
        data: [
          "Valid only once per user",
          "Offer valid via Amazon Pay Balance Only",
          "Get upto INR 50 cashback behind scratch card on min payment of INR 399 issued on amazon pay balance",
          "Valid across all categories",
          "Assured minimum cashback of ₹10",
          "The cashback will only be issued once the customer scratches the issued card by going to the rewards page on Amazon Pay (https://www.amazon.in/h/rewards). The Scratch card is available until 31st of this month.",
          "Valid once between 1st to 31st May",
          "Additional T&C applied",
        ],
      },
    },
    {
      id: 2,
      title: "Up to ₹150 Cashback",
      subTitle: "Valid for Paytm UPI only",
      terms: {
        title: "Terms And Conditiond",
        data: [
          "Valid only once per user",
          "Minimum order value of ₹199",
          "Valid for Paytm UPI and UPI Lite",
          "Up to ₹150 cashback in bank account",
          "Minimum assured cashback of ₹5",
          "Additional T&Cs apply",
        ],
      },
    },
  ],
};
const Checkout = () => {
  const [offer, setOffers] = useState(false);
  const [coupanNo, setCoupanNo] = useState("NATIVE300");

  const [offerCount, setOfferCount] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  function removeCoupan() {
    setCoupanNo("");
  }
  function showOffers() {
    setOffers(true);
  }
  const handelClose = () => {
    // alert("called")
    setOffers(false);
  };
  function countOffers() {
    setOfferCount(data1.offers.length + data1.others.length);
  }
  useEffect(() => {
    countOffers();
  }, []);
  return (
    <div className="container max-w-7xl mx-auto mt-15 my-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-7/12 p-4">
          <BookingCard data={data} />
          <div className="p-4">
            <p className="font-bold text-xl">Cancellation policy</p>
            <p>
              Free cancellations if done more than 48 hrs before the service or
              if a professional isn’t assigned.
            </p>
            <p>A fee will be charged otherwise.</p>
          </div>
        </div>
        <div className="w-full md:w-5/12 p-4 space-y-5">
          <CartCard cartData={cartData} show={true} />
          {coupanNo == "" ? (
            <div
              className="border border-gray-200 shadow rounded-lg p-2 flex items-center justify-between cursor-pointer"
              onClick={showOffers}
            >
              <span className="flex items-center space-x-2">
                <PercentageIcon
                  className="border-gray-200"
                  PclassName="h-4 w-4"
                />
                <p>Coupans & Offers</p>
              </span>
              <span className="flex">
                {offerCount > "0" && <p>{offerCount} Offers</p>}
                <ChevronRightIcon className="h-6" />
              </span>
            </div>
          ) : (
            <div
              className="border border-gray-200 shadow rounded-lg p-2 flex items-center justify-between cursor-pointer"
              // onClick={showOffers}
            >
              <span className="flex items-center space-x-2">
                <PercentageIcon
                  className="border-gray-200"
                  PclassName="h-4 w-4"
                />
                <p className="font-semibold p-0 ">{coupanNo}</p>
                <p className="font-light text-sm">applied</p>
              </span>
              <p
                className="text-blue-500 underline"
                onClick={() => removeCoupan()}
              >
                Remove
              </p>
            </div>
          )}
          <PaymentCard />
        </div>
      </div>
      {offer && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <GeneralModal close={handelClose} show={offer} data={data1} />
        </div>
      )}
      
    </div>

  );
};

export default Checkout;
