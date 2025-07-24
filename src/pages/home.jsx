import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";
import { Sliders4 } from "../components/Slider4";
import Modal1 from "../components/Modals/modal1";
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
      slideHeading: "Salon for  women",
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
      slideHeading: "Spa For Women",
      SlideSubHeading: "Refresh. Rewind. Rejuvenate.",
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
      slideHeading: "Hair & Nail services",
      slideSubHeading: "Refreshed style, revamped look",
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
      slideHeading: "Salon for men",
      slideSubHeading: "Grooming essentials",
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
      slideHeading: "Massage for men",
      slideSubHeading: "Curated massage by top therapists.",
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
  Sliders4: Sliders4,
};
const looking = {
  title: "Home services at your doorstep",
  services: [
    {
      title: "Appliance Repair & Service",
      image: "/air-conditioner.png",
      // category:"salon_for_women",
      modal: "modal1",
    },
    {
      title: "Electrician, Plumber & Carpenters",
      image: "/electrician.png",
      // modal:"modal1"
      modal: "modal1",
    },
    {
      title: "Bathroom & Kitchen cleaning",
      image: "/kitchen.png",
      // modal:"modal1"//change to
      // modal: "modal1",
      data: [
          {
            id: 1,
            image: "popup2.png",
            category: "luxe",
          },
          {
            id: 2,
            image: "popup3.png",
            category: "prime",
          },
          {
            id: 3,
            image: "popup4.png",
            category:"classic"
          },
        ]
    },
    {
      title: "Cleaning",
      image: "/Cleaning (1).png",
      modal: "modal1",
    },
    {
      title: "Native Water Purifier",
      image: "/water-filter.png",
      // modal: "modal1",
      category:"ro_purchase"
    },
    {
      title: "Native Smart Locks",
      image: "/smart-door.png",
      // modal: "modal1",
      category:"epc_stores_smarthome"
    },
    {
      title: "Full Home Painting",
      image: "/paint.png",
      // modal: "modal1",
      category:"house_painters"
    },
  ],
};

const Home = () => {
  // console.log('looking',looking);

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

export default Home;
