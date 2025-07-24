import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import React from "react";
// import { useScrollableSlider } from "../hooks/use-scrollable-slider";
import { Button, DialogTitle } from "@headlessui/react";
// import MetricCard from './Cards/metric-card';
import { useScrollableSlider } from "../../hooks/use-scrollable-slider";
import MetricCard from "../Cards/metric-card";


const Height = {
  small: "h-57",
  medium: "h-102",
  large: "h-131",
  larger:"h-124"
};
const Width = {
  small: "w-98",
  medium: "w-full",
  large: "w-100",
};
// @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @7xl:grid-cols-5
export default function Carousel({ 
  data,
  bodyClassName,
  className, 
  height, 
  width 
}) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();
  {
    /* <MetricCard key={stat.id} title={stat.title} price={stat.price} rating={stat.rating} reviews={stat.reviews} className={`${Width[width]}`} titleClassName={`${Height[height]}`}>
                  
                  <img
                    src={stat.link}
                    alt="image"
                    className="w-58 h-full object-fill  group-hover:scale-105 transition-transform duration-500"
                  />
                 
                </MetricCard> */
  }
  console.log("carousel",data);
  
  return (
    <div
      className={
        `relative flex w-auto items-center overflow-hidden max-w-7xl mx-auto ${bodyClassName}`
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
          {data?.map((stat) => {
            return (
              <>
                <MetricCard
                  key={stat.id}
                  title={stat.title}
                  price={stat.price}
                  rating={stat.rating}
                  reviews={stat.reviews}
                  className={`${Width[width]} ${className}`}
                  titleClassName={Height[height]}
                >
                  <img
                    src={stat.link}
                    alt="image"
                    className="w-full h-full object-fill  group-hover:scale-105 transition-transform duration-500"
                  />
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
