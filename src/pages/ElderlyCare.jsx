import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";

const data = [
  { index: 1, type: "Sliders2" },
  {
    index: 2,
    type: "Sliders3",
    data: {
      slideHeading: "Elderly Care at Home",
      slideSubHeading: "Compassionate care for your loved ones",
      data: [
        {
          id: 1,
          heading: "Daily Assistance",
          image: "/images/elderly/daily-assistance.png",
        },
        {
          id: 2,
          heading: "Medical Support",
          image: "/images/elderly/medical-support.png",
        },
        {
          id: 3,
          heading: "Therapy Sessions",
          image: "",
        },
        {
          id: 4,
          heading: "Nutrition Monitoring",
          image: "/images/elderly/nutrition.png",
        },
      ],
    },
  },
  {
    index: 3,
    type: "Sliders1",
    data: {
      slideHeading: "Most Booked Elderly Services",
      slideData: [
        {
          id: 1,
          title: "Nursing Visits",
          image: "/images/elderly/nurse.png",
          rating: 4.8,
          reviews: "800+",
          price: 499,
          currency: "INR",
        },
        {
          id: 2,
          title: "Physiotherapy",
          image: "/images/elderly/physio.png",
          rating: 4.7,
          reviews: "500+",
          price: 599,
          currency: "INR",
        },
        {
          id: 3,
          title: "Home Doctor Visits",
          image: "/images/elderly/doctor.png",
          rating: 4.9,
          reviews: "1k+",
          price: 999,
          currency: "INR",
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
  title: "Elderly care at your doorstep",
  services: [
    {
      title: "In-Home Nursing",
      category: "in_home_nursing",
      image: "/elderlyCare.jpeg",
      data: [
        { id: 1, image: "/images/elderly/nursing1.png", category: "day" },
        { id: 2, image: "/images/elderly/nursing2.png", category: "night" },
      ],
    },
    {
      title: "Home Doctor",
      category: "home_doctor",
      image: "/elderlycare1.jpeg",
      data: [
        { id: 1, image: "/images/elderly/doctor1.png", category: "general" },
        { id: 2, image: "/images/elderly/doctor2.png", category: "specialist" },
      ],
    },
    {
      title: "Companion Support",
      category: "companion_support",
      image: "/companionsupport.jpeg",
    },
    {
      title: "Physiotherapy",
      category: "physiotherapy",
      image: "/orthopedic-nurse-stretching-spinal-cord-shoulder-elder-patient-with-injury-physiotherapy_114016-26675.jpg",
      data: [
        { id: 1, image: "/images/elderly/physio1.png", category: "basic" },
        { id: 2, image: "/images/elderly/physio2.png", category: "advanced" },
      ],
    },
  ],
};

const ElderlyCare = () => {
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

export default ElderlyCare;
