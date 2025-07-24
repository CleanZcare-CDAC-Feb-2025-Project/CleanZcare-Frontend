import { useLocation } from "react-router-dom";
import { Sliders2 } from "../components/Sliders2";
import Carousel from "../components/Carausals/Carousel";
import ServiceCard from "../components/Cards/ServiceCard";
import CartCard from "../components/Cards/CartCard";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Promise from "../components/Cards/Promise";
import OfferCard from "../components/Cards/Offer";
const data = {
  title: "Native Smart Locks",
  rating: 4.86,
  bookings: "8k",
  services: [
    {
      id: 1,
      title: "Lock pro",
      image: "image1.png",
    },
    {
      id: 2,
      title: "Lock S",
      image: "image1.png",
    },
    {
      id: 3,
      title: "Video demo",
      image: "image1.png",
    },
  ],
};
const filesStatData = [
  {
    id: 1,
    // title: "Total Storage ",
    // metric: "94 GB",
    // icon: "",
    // rating: 4.79,
    // reviews: "106k",
    // price: 1098,
    link: "/slider2.png",
    // currency:"INR"
    // fill: "#4c5c75",
    // percentage: 94,
  },
  // {
  //   id: 2,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 3,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 4,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 5,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 1,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 1,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
];
const detailData = [
  {
    id: 1,
    title: "Lock pro",
    image: "",
    data: [
      {
        id: 1,
        title: "Native Lock Pro",
        rating: 4.9,
        totalReviews: "5k",
        price: "16499",
        discription: [
          "7 ways to unlock",
          "Unlock request with visitor photo on every doorbell press",
        ],
        options: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Lock S",
    image: "",
    data: [
      {
        id: 2,
        title: "Native Lock S",
        rating: 4.83,
        totalReviews: "733",
        price: "6999",
        // details:"",
        discription: ["5 ways to unlock", "Install on any door & go keyless"],
        options: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Video demo",
    image: "image1.png",
    data: [
      {
        id: 3,
        title: "Video demo",
        // rating: 4.83,
        // totalReviews:"733",
        price: "9",
        details: "15 mins",
        discription: [
          "Get a personalised video demo from an expert",
          "Ask experts your questiond and clear all doubts!",
        ],
        options: 0,
      },
    ],
  },
];
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
const offerData = [
  {
    id: 1,
    title: "Flat Rs 300 off",
    subTitle: "Applicable on all models",
    discription: "SAVE 300 ON THIS ORDER",
    minamt:5000,
    discamt:300,
    terms: {
      title: "Terms And Conditions",
      data: ["Flat Rs 300 off", "Valid once per user"],
    },
  },
  {
    id: 2,
    title: "Save 10% on Every Order",
    subTitle: "Get Plus Now",
  },
  {
    id: 3,
    title: "Amazon cashback upto ₹50",
    subTitle: "Via Amazon Pay balance",
  },
];
export const Cart = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  

  return (
    <div className="mx-auto  mt-25 p-4">
      <div className="flex">
        <div className="w-3/10  sticky top-0  h-80">
          <div className=" px-4 flex flex-col gap-5">
            <div className="flex items-center">
              <div className=" w-full ">
                <div>
                  <h1 className=" font-medium text-4xl">{data.title}</h1>
                </div>
                <span className="flex mt-3">
                  <svg
                    className="w-5 h-5 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-2 text-md font-bold text-gray-900 ">
                    {data.rating}
                  </p>
                  <span className=" w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a
                    href="#"
                    className="text-md font-medium text-gray-900 underline hover:no-underline "
                  >
                    {data.bookings} reviews
                  </a>
                </span>
              </div>
            </div>
            <div className="border border-gray-300 w-full rounded-2xl p-3 flex flex-col gap-4">
              <p className="font-medium text-gray-500">Select a service</p>
              <div className="flex gap-3">
                {data.services.map((value, key) => (
                  <div className="w-20">
                    <div onClick={() => setShowModal(true)}>
                      <img className="rounded-lg" src="/image1.png" alt="" />
                    </div>
                    <div className="py-1  flex justify-around">
                      <p className="mb-2 text-xs  text-gray-900">
                        {data.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/10  p-0">
          <div className="">
            <Carousel
              widths={"medium"}
              height={"larger"}
              bodyClassName={"my-0"}
              data={filesStatData}
            />
          </div>
          <div className="p-0 flex  mt-13">
           
            <div className="w-7/12 border border-gray-300 flex flex-col gap-2 ">
              {detailData?.map((value, key) => (
                <div className=" p-3 rounded-s">
                  <div className="p-2 text-2xl font-bold"> {value.title}</div>
                  {value?.data?.map((data, key) => (
                    <>
                    <ServiceCard data={data} key={key} />
                    <div className="border-2 border-gray-500"></div>
                    </>
                    
                  ))}
                </div>
              ))}
            </div>
            <div className="w-5/12 border-t border-gray-300 p-3">
              <CartCard cartData={cartData} />
              <OfferCard offerData={offerData} classname={'border-1 border-gray-300 shadow'}/>
              <Promise/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
