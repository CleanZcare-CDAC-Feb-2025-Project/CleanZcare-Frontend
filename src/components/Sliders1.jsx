import React from "react";
import PageHeader from "../shared/page-header";
import AddSlider from "./AddSlider";
import { Container } from "postcss";
export const Sliders1 = (data) => {
  console.log("data", data.data);

  return (
    <div className="container max-w-7xl mx-auto mt-25">
      {data.data.slideHeading ? (
        <PageHeader
          title={data.data.slideHeading}
          // breadcrumb={pageHeader.breadcrumb}
        />
      ) : (
        ""
      )}
      <AddSlider data={data.data} height={"small"} width={"small"} />
    </div>
  );
};
