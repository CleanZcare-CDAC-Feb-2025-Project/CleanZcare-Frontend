import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useScrollableSlider } from "../hooks/use-scrollable-slider";
import { Button, DialogTitle } from "@headlessui/react";
import MetricCard from "./Cards/metric-card";
const Height = {
  small: "h-55",
  medium: "h-35",
  large: "h-25",
};
const widths = {
  small: "w-58",
  medium: "w-72",
  large: "w-100",
};
// @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @7xl:grid-cols-5
export default function AddSlider({ data, height, width }) {
  console.log("AddSlider", data.slideData, "height", height, "width", width);
  const [slideData, setSlideData] = useState(data.slideData);
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <div
      className={
        "relative flex w-auto items-center overflow-hidden max-w-7xl sm:mx-auto md:px-7 mb-7 "
      }
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="
        !absolute left-0 z-10  w-8 h-8 rounded-4xl
        bg-gradient-to-r 
        from-whit via-white to-transparent px-0 
        text-gray-500 hover:text-black 
        dark:from-gray-50/80 dark:via-gray-50/80
        hidden sm:flex 3xl:hidden items-center border justify-center
      "
      >
        <ChevronLeftIcon className="h-5 w-5 text-black font-bold" />
      </Button>
      <div className="w-full overflow-hidden ">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth"
        >
          {slideData.map((stat) => {
            return (
              <>
                <MetricCard
                  key={stat.id}
                  title={stat.title}
                  price={stat.price}
                  rating={stat.rating}
                  reviews={stat.reviews}
                  className={`${widths[width]} `}
                  titleClassName={Height[height]}
                  
                >
                  {/* <div className="flex items-center justify-start gap-5"> */}
                  {/* <div className="border w-95"> */}
                  <img
                    src={`${stat.image}`}
                    alt="image"
                    className="w-full h-full object-fill  group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* </div> */}
                  {/* </div> */}
                </MetricCard>
              </>
            );
          })}
        </div>
      </div>
      <Button
        title="Next"
        variant="text"
        ref={sliderNextBtn}
        onClick={() => scrollToTheRight()}
        className="!absolute  w-8 h-8 rounded-4xl right-0 z-10 bg-gradient-to-r from-white via-white to-transparent px-0  text-gray-500 hover:text-black 3xl:hidden dark:from-gray-50/80 dark:via-gray-50/80 hidden sm:flex 3xl:hidden items-center border justify-center"
      >
        <ChevronRightIcon className="h-5 w-5 text-black font-bold" />
      </Button>
    </div>
  );
}
