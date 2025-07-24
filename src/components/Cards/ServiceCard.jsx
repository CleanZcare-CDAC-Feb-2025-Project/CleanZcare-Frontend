import React from "react";
import Carousel from "../Carausals/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Cart/CartSlice";

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
const ServiceCard = ({ data, key }) => {
  // console.log("service card", key);
  const dispatch = useDispatch();

  // const cartData=useSelector(state => state.cart.items);

  return (
    <div className=" p-2">
      <div>
        <Carousel
          widths={"medium"}
          height={"small"}
          bodyClassName={"my-0 !rounded-2xl"}
          data={filesStatData}
        />
      </div>
      <div className="mt-4 ">
        <div className="border-b flex justify-between align-middle pb-2">
          <span className="flex flex-col align-middle ite">
            <span className=" text-lg font-bold">{data.title}</span>
            {data.rating && (
              <span className="text-gray-400">
                {data.rating}({data.totalReviews} review)
              </span>
            )}
            <span>
              $ {data.price} ({data?.details && data?.details})
            </span>
          </span>
          <span className="flex flex-col">
            <button
              type="button"
              class="text-gray-900 border focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 my-auto   border-blue-600"
              onClick={() =>
                dispatch(
                  addItem({
                    id: data.id,
                    title: data.title,
                    price: data.price,
                  })
                )
              }
            >
              ADD
            </button>
            {data?.options > 0 && (
              <p className="my-1 text-xs cursor-pointer">
                {data.options} Optipns
              </p>
            )}
          </span>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-2">
            {data?.discription?.map((point, index) => (
              <li key={index} className="text-gray-700 text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-3">
          <p className="font-bold text-blue-500 cursor-pointer">View details</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
