import { Button } from "@headlessui/react";
import PageHeader from "../shared/page-header";
import Carousel2 from "./Carausals/Carousel2";
export const Sliders3 = ({data}) => {
  // console.log("data",data);
  
  return (
    <div className="container max-w-7xl mx-auto mt-25">
      <PageHeader title={data.slideHeading} subtitle={data.slideSubHeading}>
        {/* <Button className={"btn"}>chetan</Button> */}
        <button
          type="button"
          className="text-purple-500 hover:text-white border-1 border-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-purple-500 dark:hover:text-purple-500 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
        >
          See All
        </button>
      </PageHeader>
      <Carousel2 filesStatData={data.data} />
    </div>
  );
};
