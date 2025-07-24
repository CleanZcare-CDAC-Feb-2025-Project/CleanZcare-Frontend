import React, { useEffect, useRef } from "react";
import Categorycard from "../Cards/CategoryCard";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const Modal = ({ show, close, data, title }) => {
  // const modalRef = useRef(null);
console.log("data",data);
// alert("called")

  // useEffect(() => {
  //   if (show && modalRef.current) {
  //     // modalRef.current.focus(); // Focus modal when it opens
  //   }
  // }, [show]);

  if (!show) return null;

  return (
    <div
    id="default-modal"
    tabIndex="-1"
    className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
    // onClick={close} // Click outside to close
  >
    <div
      onClick={(e) => e.stopPropagation()} // Block inside content clicks
      className="relative bg-white px-0 rounded-lg shadow-lg outline-none w-full max-w-lg max-h-[90vh] overflow-y-auto"
    >
      <div className="flex flex-row justify-between items-center py-6 px-3 sticky top-0 bg-white z-10">
        <span className="flex flex-row gap-2 items-center">
          <ArrowLeftIcon className="h-6 cursor-pointer" onClick={close} />
          <p>{title}</p>
        </span>
        <ShareIcon className="h-6 cursor-pointer" />
      </div>
  
      <div>
        <img src="/popup1.png" alt="image" />
      </div>
  
      <div className="flex flex-wrap justify-around gap-3" >
        {data &&
          data.map((value, key) => (
            <Link
              key={key}
              to={`/cart?category=${value.category}`}
              onClick={(e) => e.stopPropagation()} // Stop propagation on the link
            >
              <div>
                <img
                  src={`/${value.image}`}
                  alt="service images"
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  </div>
  
  );
};

export default Modal;
