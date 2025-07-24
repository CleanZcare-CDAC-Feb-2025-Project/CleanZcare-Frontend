import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import React from "react";
import { useScrollableSlider } from "../../hooks/use-scrollable-slider";
import { Button, DialogTitle } from "@headlessui/react";
import MetricCard from '../Cards/metric-card';
// import MetricCard from '../Cards/metric-card';


  
// @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @7xl:grid-cols-5
export default function Carousel2({ filesStatData }) {
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
        "relative flex w-auto items-center overflow-hidden max-w-7xl mx-auto px-7"
      }
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="!absolute left-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0  text-gray-500 hover:text-black 3xl:hidden dark:from-gray-50/80 dark:via-gray-50/80"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </Button>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth"
        >
          {filesStatData.map((stat) => {
            return (
              <>
                <MetricCard key={stat.id} title={stat.title} price={stat.price} rating={stat.rating} reviews={stat.reviews} className={"shadow-lg border border-gray-300 w-60 hover:border hover:border-black"} titleClassName={"h-40"} heading={stat.heading} headingClassName={"px-6 pt-6 h-30"}>
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
        className="!absolute right-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0  text-gray-500 hover:text-black 3xl:hidden dark:from-gray-50/80 dark:via-gray-50/80"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
