import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQuantity, decrementQuantity } from "../../Cart/CartSlice";
import { PlusIcon, TagIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

const CartCard = ({ show }) => {
  const cartData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalCost=useSelector((state)=>state.cart.subtotal);
  const totalCostD=useSelector((state=>state.cart.discountamt));
  const discountapplied=useSelector(state=>state.cart.discount.isApplied);
 

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
        {!show ? (
          <p className="text-xl font-semibold text-gray-900 ">Cart</p>
        ) : (
          ""
        )}
        {cartData.length > 0 ? (
          cartData.map((value, index) => (
            <>
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0 border-b border-gray-300 pb-4">
                <div className="text-base font-medium text-gray-900 ">
                  {value.title}
                </div>

                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="flex items-center">
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-black"
                      onClick={() =>
                        dispatch(decrementQuantity({ id: value.id }))
                      }
                    >
                      <MinusIcon className="w-4 h-4 text-gray-900" />

                    </button>
                    <input
                      type="text"
                      id="counter-input"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                      placeholder=""
                      value={`${value.quantity}`}
                      required
                    />

                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-black"
                      onClick={() =>
                        dispatch(incrementQuantity({ id: value.id }))
                      }
                    >
                      <PlusSmallIcon className="w-4 h-4 text-gray-900" />

                    </button>
                    {/* </Link> */}
                  </div>
                  <div className="text-end md:order-4 md:w-32">
                    
                      
                        <p className="text-base font-bold text-gray-800 ">
                          ₹{value.quantity * parseInt(value.price)}
                        </p>
                      
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <>
            <div className="flex flex-col p-9">
              <ShoppingCartIcon className="h-20" />
              <p className="m-auto">No items in ypur Cart</p>
            </div>
          </>
        )}
        {cartData.length > 0 && !show && (
          <>
          {
            discountapplied ?
            <div className="bg-green-500 rounded flex justify-around py-1 px-4">
              <span className="flex items-center gap-3 px-3">
                <TagIcon className="w-6 h-6 text-white" />
                <p className="font-normal text-white">
                  Congratulations ₹{totalCost - totalCostD} Saved so far!
                </p>
              </span>
            </div>:""
          }

            <div className="">
              <Link to={{ pathname: "/checkout" }}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 flex justify-between items-center focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <div className="flex flex-row items-center gap-1.5">
                    {discountapplied? (
                      <>
                        <p className="text-base font-bold text-white">
                          ₹{totalCostD}
                        </p>
                        <p className="text-sm text-white/80 line-through">
                          ₹{totalCost}
                        </p>
                      </>
                    ) : (
                      <p className="text-base font-bold text-white">
                        {totalCost}
                      </p>
                    )}
                  </div>

                  <span className="text-sm font-semibold">View Cart</span>
                </button>
              </Link>
            </div>
          </>
        )}
        {show ? (
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" className="border" />{" "}
            <p className="text-sm">
              Avoid the calling before reaching the location
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default CartCard;
