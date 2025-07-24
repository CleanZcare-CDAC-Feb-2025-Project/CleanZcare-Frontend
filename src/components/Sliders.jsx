import React from "react";
import PageHeader from "../shared/page-header";
import AddSlider from "./AddSlider";
export const Sliders = (data) => {
  return (
    <div className="container max-w-7xl mx-auto mt-25">
      {data.data.slideHeading ? (
        <PageHeader
          title={data.data.slideHeading}
          stubitle={data.data.slideSubHeading}
          // breadcrumb={pageHeader.breadcrumb}
        />
      ) : (
        ""
      )}
      <AddSlider data={data.data} height={"small"} width={"large"} />
    </div>
  );
};
