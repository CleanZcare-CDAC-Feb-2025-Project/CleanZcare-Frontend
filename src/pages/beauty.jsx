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
  } },
  { index: 2,
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
  } },
  { index: 3, type: "Sliders1", data: {
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
  } },
  { index: 4, type: "Sliders2" },
  { index: 5,
     type: "Sliders3",
     data: {
    slideHeading: "Spa For Women",
    SlideSubHeading:"Refresh. Rewind. Rejuvenate.",
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
  } },
  { index: 6, type: "Sliders3", data: {
    slideHeading: "Hair & Nail services",
    slideSubHeading:"Refreshed style, revamped look",
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
  } },
  { index: 7, type: "Sliders2" },
  { index: 8, type: "Sliders3", data: {
    slideHeading: "Salon for men",
    slideSubHeading:"Grooming essentials",
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
  } },
  { index: 9, type: "Sliders2" },
  { index: 10, type: "Sliders3", data: {
    slideHeading: "Massage for men",
    slideSubHeading:"Curated massage by top therapists.",
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
  } },
 
];
const componentMapping = {
  Sliders: Sliders,
  Sliders1: Sliders1,
  Sliders2: Sliders2,
  Sliders3: Sliders3,
};
const looking = {
    title: "Beauty services at your doorstep",
    services: [
      {
        title: "Salon for Women",
        category:"salon_for_women",
        image: "/makeover.png",
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
        title: "Spa for Women",
        category:"spa_for_women",
        image: "/spa-and-relaxation.png",
        data: [
          {
            id: 1,
            image: "popup5.png",
            category: "Ayurveda",
          },
          {
            id: 2,
            image: "popup6.png",
            category: "prime",
          },
          {
            id: 3,
            image: "popup7.png",
            category:"luxe"
          },
        ]
      },
      {
        title: "Hair Studio for Women",
        category:"women_hair_studio",
        image: "/beauty-saloon.png",
      },
      {
        title: "Salon for Men",
        category:"salon_for_men",
        image: "/hairstyle.png",
        data: [
          {
            id: 1,
            image: "popup8.png",
            category: "royale",
          },
          {
            id: 2,
            image: "popup9.png",
            category: "prime",
          }
        ]
      },
      {
        title: "Massage for Men",
        category:"message_for_men",
        image: "/barber-shop.png",
        data: [
          {
            id: 1,
            image: "popup10.png",
            category: "prime",
          },
          {
            id: 2,
            image: "popup11.png",
            category: "ayurveda",
          },
          {
            id: 3,
            image: "popup12.png",
            category:"royale"
          },
        ]
      }
    ],
  };

const Beauty = () => {
    // console.log('looking',looking);
    
  const sortedData=data.sort((a,b)=>a.index-b.index);
  return (
    <div>
      <RenameCarausal data={looking}/>

      {sortedData.map((item, idx) => {
        const Component = componentMapping[item.type];
        if (!Component) return null;

        return (
          <Component
            key={idx}
            data={item.data}
          />
        );
      })}
    </div>
  );
};

export default Beauty;
