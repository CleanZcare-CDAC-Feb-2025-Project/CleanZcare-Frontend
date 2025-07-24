import PageHeader from "../shared/page-header";
import Carousel from "./Carausals/Carousel";
const filesStatData = [
    {
      id: 1,
      // title: "Total Storage ",
      // metric: "94 GB",
      // icon: "",
      // rating: 4.79,
      // reviews: "106k",
      // price: 1098,
      link: "/slider2.png",
      // currency:"INR"
      // fill: "#4c5c75",
      // percentage: 94,
    },
    {
        id: 2,
        // title: "Total Storage ",
        // metric: "94 GB",
        // icon: "",
        // rating: 4.79,
        // reviews: "106k",
        // price: 1098,
        link: "/slider2.png",
        // currency:"INR"
        // fill: "#4c5c75",
        // percentage: 94,
      },
      {
        id: 2,
        // title: "Total Storage ",
        // metric: "94 GB",
        // icon: "",
        // rating: 4.79,
        // reviews: "106k",
        // price: 1098,
        link: "/slider2.png",
        // currency:"INR"
        // fill: "#4c5c75",
        // percentage: 94,
      },
  
  ];
export const Sliders4 = ({data}) => {
    // console.log("slider4Data",data);
    
  return (
    <div className="container max-w-7xl mx-auto mt-25">
     
      <PageHeader title={data.slideHeading} />
      <Carousel data={filesStatData} width={"small"} height={"large"} className={"!rounded-2xl"} bodyClassName={"my-3 px-7"}/>
    </div>
  );
};