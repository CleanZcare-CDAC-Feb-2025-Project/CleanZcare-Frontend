import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

const SlotModal = ({ timeslot, weekSlots, changedate, Time, Date, setime,handleClose }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    Time ? setTime(Time) : "";
    Date ? setDate(Date) : "";
  }, []);
  function ManipulateTime(time) {
    setTime(time);
    setime(time);
  }
  function ManipulateDate(date) {
    setDate(date);
    changedate(date);
    setTime("");
  }
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-3xl space-y-4 border border-gray-300">
        <div
          className="border text-black inline-flex items-center justify-center rounded-2xl p-1 float-end relative top-[-1] cursor-pointer"
          onClick={handleClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </div>{" "}
        <section className="space-y-2 ">
          <header>
            <h2 className="text-xl font-semibold text-gray-800">
              When should the professional arrive?
            </h2>
            <h4>Service will take approx. 2 hrs & 30 mins</h4>
          </header>
          <ul className="flex gap-2 justify-around">
            {weekSlots.map((slot, index) => (
              <span
                key={index}
                className={
                  slot.day + "," + slot.date == date
                    ? "border rounded p-2 border-blue-600 bg-blue-300 text-black cursor-pointer"
                    : "border rounded p-2 cursor-pointer"
                }
                onClick={() => ManipulateDate(slot.day + "," + slot.date)}
              >
                <span className="flex flex-col py-1 px-3 items-center">
                  <span className="text-gray-400">{slot.day}</span>
                  <span className="font-semibold">{slot.date}</span>
                </span>
              </span>
            ))}
          </ul>
        </section>
        <section className="space-y-2 ">
          <header>
            <h2 className="text-xl font-semibold text-gray-800">
              Select start time of service
            </h2>
          </header>
          <ul className="space-y-2 flex  flex-wrap gap-2 justify-around">
            {weekSlots?.map((slot, i) =>
              slot.day + "," + slot.date === date
                ? slot.time.map((timeSlot, j) => (
                    <span
                      key={j}
                      className={
                        timeSlot === time
                          ? "border rounded p-2 border-blue-600 bg-blue-300 text-black cursor-pointer"
                          : "border rounded p-2 cursor-pointer"
                      }
                      onClick={() => ManipulateTime(timeSlot)}
                    >
                      <span className="flex flex-wrap py-1 px-3 items-center">
                        <span className="font-semibold">{timeSlot}</span>
                      </span>
                    </span>
                  ))
                : ""
            )}
            {!date &&
              timeslot.map((times, j) => (
                <span
                  key={j}
                  className={
                    times === time
                      ? "border rounded p-2 border-blue-600 bg-blue-300 text-black"
                      : "border rounded p-2"
                  }
                  onClick={() => setTime(times)}
                >
                  <span className="flex flex-wrap py-1 px-3 items-center">
                    <span className="font-semibold">{times}</span>
                  </span>
                </span>
              ))}
          </ul>
        </section>
        <button
          // onClick={() => setShowSlots(false)}
          disabled={date === "" || !date || time === "" || !time}
          className={`w-full mt-2 px-4 py-2 text-white rounded ${
            date === "" || time === ""
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
          onClick={handleClose}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
export default SlotModal;
