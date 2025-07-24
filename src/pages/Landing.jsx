import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";

const data = [
  {
    index: 1,
    type: "Sliders",
    data: {
      slideHeading: "",
      slideData: [
        {
          id: 1,
          // title: "Total Storage ",
          // metric: "94 GB",
          image: "/slider1.png",
          category:"",
          // icon: "",
          // rating: 4.79,
          // reviews: "106k",
          // price: 1098,
          // currency:"INR"
          // fill: "#4c5c75",
          // percentage: 94,
        },
        {
          id: 2,
          image: "/slider1.png",
          // title: "Images",
          // rating: 3.79,
          // reviews: "106k",
          // price: 1098,
          // currency:"INR"
        },
        {
          id: 3,
          image: "/slider1.png",
          // title: "Documents",
          // reviews: "106k",
          // price: 1098,
          // rating: 5.79,
          // currency:"INR"
        },
        {
          id: 4,
          image: "/slider1.png",
          // title: "Audios",
          // reviews: "106k",
          // price: 1098,
          // rating: 2.79,
          // currency:"INR"
        },
        {
          id: 5,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "106k",
          // price: 1098,
          // rating: 3.79,
          // currency:"INR"
        },
        {
          id: 6,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "106k",
          // price: 1098,
          // rating: 4.79,
          // currency:"INR"
        },
        {
          id: 7,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "106k",
          // price: 1098,
          // rating: 1.79,
          // currency:"INR"
        },
        {
          id: 8,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "106k",
          // price: 1098,
          // rating: 2.79,
          // currency:"INR"
        },
        {
          id: 9,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "106k",
          // price: 1098,
          // rating: 3.79,
          // currency:"INR"
        },
        {
          id: 10,
          image: "/slider1.png",
          // title: "Videos",
          // reviews: "10k",
          // price: 10,
          // rating: 4.79,
          // currency: "usd",
        },
      ],
    },
  },
  {
    index: 2,
    type: "Sliders1",
    data: {
      slideHeading: "Most booked services",
      slideData: [
        {
          id: 1,
          title: "Total Storage ",
          image: "/slider1.png",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/slider1.png",
          title: "Images",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/slider1.png",
          title: "Documents",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/slider1.png",
          title: "Audios",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/slider1.png",
          title: "Videos",
          reviews: "10k",
          price: 10,
          rating: 4.79,
          currency: "usd",
        },
      ],
    },
  },
  {
    index: 3,
    type: "Sliders1",
    data: {
      slideHeading: "Most booked services",
      slideData: [
        {
          id: 1,
          title: "Total Storage ",
          image: "/slider1.png",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/slider1.png",
          title: "Images",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/slider1.png",
          title: "Documents",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/slider1.png",
          title: "Audios",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/slider1.png",
          title: "Videos",
          reviews: "10k",
          price: 10,
          rating: 4.79,
          currency: "usd",
        },
      ],
    },
  },
  { index: 4, type: "Sliders2" },
  {
    index: 5,
    type: "Sliders3",
    data: {
      slideHeading: "Salon For Women",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
  {
    index: 6,
    type: "Sliders3",
    data: {
      slideHeading: "Spa For Women",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
  { index: 7, type: "Sliders2" },
  {
    index: 8,
    type: "Sliders3",
    data: {
      slideHeading: "Cleaning & peste Control",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
  { index: 9, type: "Sliders2" },
  {
    index: 10,
    type: "Sliders3",
    data: {
      slideHeading: "Appliance Repair & Service",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
  {
    index: 11,
    type: "Sliders1",
    data: {
      slideHeading: "Home Repair & Installation",
      slideData: [
        {
          id: 1,
          title: "Total Storage ",
          image: "/slider1.png",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/slider1.png",
          title: "Images",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/slider1.png",
          title: "Documents",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/slider1.png",
          title: "Audios",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/slider1.png",
          title: "Videos",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/slider1.png",
          title: "Videos",
          reviews: "10k",
          price: 10,
          rating: 4.79,
          currency: "usd",
        },
      ],
    },
  },
  {
    index: 12,
    type: "Sliders3",
    data: {
      slideHeading: "Massage For Men",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
  { index: 13, type: "Sliders2" },
  {
    index: 14,
    type: "Sliders3",
    data: {
      slideHeading: "Salon For Men",
      data: [
        {
          id: 1,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 2,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 3,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
        {
          id: 4,
          heading: "Total Storage ",
          image: "/sliderp.png",
        },
      ],
    },
  },
];
const componentMapping = {
  Sliders: Sliders,
  Sliders1: Sliders1,
  Sliders2: Sliders2,
  Sliders3: Sliders3,
};
const looking = {
  title: "Home Services at your doorstep",
  services: [
    {
      id:1,
      title: "Women's Salon & Spa",
      // category:"women_salon_and_spa",
      image: "",
      modal: "modal1",
      
    },
    {
      id:2,
      title: "Men's Salon & Massage",
      // category:"men_salonand_massage",
      image: "",
      modal: "modal1",
      
    },
    {
      id:3,
      title: "AC & Applicance Repair",
      // category:"ac_and_applicance_repair",
      image: "",
      modal: "modal1",
    },
    {
      id:4,
      title: "Cleaning & Pest Control",
      // category:"cleaning_and_pest_control",
      image: "",
      modal: "modal1",
    },
    {
      id:5,
      title: "Electician, Plumber & Carpenter",
      // category:"electician_plumber_and_carpenter",
      image: "",
      modal: "modal1",
    },
    {
      id:6,
      title: "Native Water Purifier",
      category: "native_water_purifier",
      image: "",
    },
    {
      id:7,
      title: "Native Smart Lock",
      category: "native_smart_lock",
      image: "",
    },
    {
      id:8,
      title: "Painting & Water profing",
      category: "painting_and_water_profing",
      image: "",
    },
  ],
};

const Landing = () => {
  const sortedData = data.sort((a, b) => a.index - b.index);
  return (
    <div>
      <RenameCarausal data={looking} />
      {sortedData.map((item, idx) => {
        const Component = componentMapping[item.type];
        if (!Component) return null;

        return <Component key={idx} data={item.data} />;
      })}
    </div>
  );
};

export default Landing;
