import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowLeftCircleIcon,
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftIcon,
  ArrowsRightLeftIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LocationInput() {
  const [selectedAddress, SetSelectedAddress] = new useState(
    "Select Addressndfafasdfnlandfjasflajdfjaldfshaldhsfbhabfhdabjbfbahbfdbadfbabfbabfdafafs"
  );
  
  const [modelOpen, SetModelOpen] = useState(false);
  const handelBlur = () => {
    SetModelOpen(false);
  };
  return (
    <>
      <div
        className="flex items-center bg-white border  rounded-xl  shadow-sm max-w-sm "
        overlayClassName="backdrop-blur"
      >
        <button
          onClick={() => SetModelOpen(true)}
          type="button"
          className="flex items-center gap-2 text-black bg-white hover:bg-gray-50 focus:ring-2  font-medium rounded-xl text-sm px-4 py-2 transition"
        >
          <MapPinIcon className="w-5 h-5 text-gray-500" />
          <span className="truncate max-w-[140px] text-gray-500 font-light">
            {selectedAddress}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {modelOpen && (
        <div
          id="large-modal"
          tabIndex="-1"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto h-full w-full backdrop-blur-md bg-black/70 ${
            modelOpen ? "" : "hidden"
          }`}
          onClick={() => SetModelOpen(false)}
        >
          <div className="relative w-full max-w-4xl max-h-full"  onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-200">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-transparent-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-transparent-600 dark:hover:text-white"
                  //   data-modal-hide="large-modal"
                  onClick={() => SetModelOpen(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 flex align-middle">
                <ArrowLeftCircleIcon
                  className="w-7 m-0"
                  onClick={() => SetModelOpen(false)}
                />
                <input
                  type="text"
                  defaultValue={selectedAddress}
                  placeholder="Search for Your location/Society/apartment"
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
               
                  onChange={(e)=>SetSelectedAddress(e.target.value)}
               />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
