import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";
import { Sliders5 } from "../components/Sliders5";

const data = [
  { index: 1, type: "Sliders5" },
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
          image: "/dailyAssistanceElderlyCare.avif",
        },
        {
          id: 2,
          heading: "Medical Support",
          image: "/MedicalSupportElderlyCare.jpg",
        },
        {
          id: 3,
          heading: "Therapy Sessions",
          image: "/TherapySessionForElderlyCare.webp",
        },
        {
          id: 4,
          heading: "Nutrition Monitoring",
          image: "/nutritionMonitoringElderlyCare.jpg",
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
          image: "/dailynursingelderlycare.webp",
          rating: 4.8,
          reviews: "800+",
          price: 499,
          currency: "INR",
        },
        {
          id: 2,
          title: "Physiotherapy",
          image: "/TherapySessionForElderlyCare.webp",
          rating: 4.7,
          reviews: "500+",
          price: 599,
          currency: "INR",
        },
        {
          id: 3,
          title: "Nutrition Monitoring",
          image: "/nutritionelderlycare.jpeg",
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
  Sliders5: Sliders5,
};

const looking = {
  title: "Elderly care at your doorstep",
  services: [
    {
      title: "In-Home Nursing",
      category: "in_home_nursing",
      image: "/elderlyCare.jpeg",
    },
    {
      title: "Home Doctor",
      category: "home_doctor",
      image: "/elderlycare1.jpeg",
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
