import React from 'react';

export const OfferSuccess = ({ data, onClose }) => {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={()=>onClose()} // Clicking outside closes the modal
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <div className="text-green-600 bg-green-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m3 2a9 9 0 11-6.219-8.56"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">
            Yay! You saved ₹{data?.amount || '300'} on this order
          </h2>
          <p className="text-gray-500 text-sm">
            '{data?.code || 'NATIVE300'}' - applied successfully
          </p>
        </div>
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-b-2xl cursor-pointer w-full"
          onClick={()=>onClose}
        >
          Okay, got it
        </button>
      </div>
    </div>
  );
};

export default OfferSuccess;
