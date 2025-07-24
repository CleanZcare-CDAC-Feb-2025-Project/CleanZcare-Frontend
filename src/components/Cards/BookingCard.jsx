import { MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Clock from "../Icons/Clock.jsx";
import SlotModal from "../Modals/slotModal.jsx";
const weekSlots = [
  {
    day: "Sat",
    date: "24",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
    ],
  },
  {
    day: "Sun",
    date: "25",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Mon",
    date: "26",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Tue",
    date: "27",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Wed",
    date: "28",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Thu",
    date: "29",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Fri",
    date: "30",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Sat",
    date: "31",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
];
const timeslot = [
  "08:00 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 AM",
  "12:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const BookingCard = ({ data }) => {
  const [step, setStep] = useState(1);
  const [showSlots, setShowSlots] = useState(false);
  const [address, setAddress] = useState(data.address);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setAddress(data.address);
  }, [data]);

  function changedate(newDate) {
    setDate(newDate);
    setTime("");
  }

  function ManipulateDate(newTime) {
    setTime(newTime);
    if (newTime && date) {
      setStep(3); // move to Payment step when slot is selected
    }
  }

  const handleAddressConfirmed = () => {
    if (address?.trim()) setStep(2);
  };

  return (
    <div className="w-full max-w-xl p-4 border-gray-300 rounded-lg shadow-md space-y-4 ml-9">
      {/* Step 1: Contact Info */}
      <div className="flex items-center gap-3">
        <span className="p-2 border rounded-lg bg-gray-200">
          <MapPinIcon className="h-5" />
        </span>
        <span>
          <p className="text-sm font-bold text-gray-800">
            Send Booking Details To
          </p>
          <p className="text-sm font-bold text-gray-500">
            {data.countryCode} {data.phoneNo}
          </p>
        </span>
      </div>

      <div className="border border-gray-300" />

      {/* Step 2: Address */}
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          <span className="p-2 border rounded-lg bg-gray-200">
            <MapPinIcon className="h-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-gray-800">Address</p>
            <p className="text-sm font-bold text-gray-500">{address}</p>
          </div>
        </div>
        {step === 1 && (
          <button
            onClick={handleAddressConfirmed}
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
          >
            Confirm
          </button>
        )}
      </div>

      <div className="border border-gray-300" />

      {/* Step 3: Slot */}
      <div
        className={`flex justify-between items-start ${
          step >= 2 ? "opacity-100" : "opacity-50 pointer-events-none"
        }`}
      >
        <div className="flex gap-2">
          <Clock className="h-5 mt-1" />
          <div>
            <p className="text-sm font-bold text-gray-800">Slot</p>
            <p className="text-sm font-bold text-gray-500">
              {time && date ? `${time} ${date}` : "Select Slot"}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowSlots(true)}
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
        >
          {time && date ? "Edit" : "Select"}
        </button>
      </div>

      {/* Slot Modal (unchanged) */}
      {showSlots && (
        <>
          <SlotModal
            timeslot={timeslot}
            weekSlots={weekSlots}
            changedate={changedate}
            setime={ManipulateDate}
            handleClose={() => setShowSlots(false)}
            date={date}
            time={time}
          />
        </>
      )}

      {/* Step 4: Payment */}
      <div
        className={`${
          step >= 3 ? "opacity-100" : "opacity-50 pointer-events-none"
        }`}
      >
        <h3 className="text-lg font-semibold">💳 Payment Method</h3>
        <button
          className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => alert("Proceeding to payment...")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
