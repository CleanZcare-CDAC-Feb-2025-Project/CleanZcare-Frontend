import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";
import { Sliders5 } from "../components/Sliders5";
import { Sliders6 } from "../components/Sliders6";
import { Sliders7 } from "../components/Sliders7";


const data = [
  {
    index: 1,
    type: "Sliders1",
    data: {
      slideHeading: "Most booked services",
      slideData: [
        {
          id: 1,
          image: "/KitchenCleaning.png",
          title: "Kitchen Cleaning",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/ApplianceRepairimg1.jpeg",
          title: "Ac Repair",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/appliancereapirimg4.jpeg",
          title: "Plumbing",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/pest-control-at-home-2.webp",
          title: "Pest Control",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/SalonForMenimg3.jpeg",
          title: "Hair Setting",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/salonforwomenimg2.jpeg",
          title: "Waxing",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/salonforwomenimg1.jpeg",
          title: "Spa",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/elderlyCare.jpeg",
          title: "In-Home Nursing",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/nutritionelderlycare.jpeg",
          title: "Nutrition Monitoring",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/physiotherapy.jpeg",
          title: "Physiotherapy",
          reviews: "10k",
          price: 10,
          rating: 4.79,
          currency: "usd",
        },
      ],
    },
  },
  {
    index: 2,
    type: "Sliders3",
    data: {
      slideHeading: "Salon For Women",
      data: [
        {
          id: 1,
          heading: "Hair Spa ",
          image: "/salonforwomenimg1.jpeg",
        },
        {
          id: 2,
          heading: "Waxing ",
          image: "/salonforwomenimg2.jpeg",
        },
        {
          id: 3,
          heading: "Facial ",
          image: "/salonforwomenimg3.jpeg",
        },
        {
          id: 4,
          heading: "Pedicure ",
          image: "/salonforwomenimg4.jpeg",
        },
      ],
    },
  },
  { index: 3, type: "Sliders6" },
  {
    index: 4,
    type: "Sliders3",
    data: {
      slideHeading: "Spa For Women",
      data: [
        {
          id: 1,
          heading: "Facial Spa ",
          image: "/SpaForWomenig4.webp",
        },
        {
          id: 2,
          heading: "Massage ",
          image: "/SpaForWomenimg1.jpeg",
        },
        {
          id: 3,
          heading: "Foot Massage ",
          image: "/SpaForWomenimg2.jpeg",
        },
        {
          id: 4,
          heading: "FullBody Massage ",
          image: "/SpaForWomenimg3.jpeg",
        },
      ],
    },
  },
  {
    index: 5,
    type: "Sliders3",
    data: {
      slideHeading: "Cleaning & peste Control",
      data: [
        {
          id: 1,
          heading: "Pest Control ",
          image: "/CleaningAnd PesteControlImg2.jpeg",
        },
        {
          id: 2,
          heading: "Kitchen Cleaning ",
          image: "/CleaningANDPasteControlImg1.jpeg",
        },
        {
          id: 3,
          heading: "Pest Control ",
          image: "/pest-control-at-home-2.webp",
        },
        {
          id: 4,
          heading: "Full House Cleaning ",
          image: "/Carpet-Cleaning-Pest-Control-Services.jpg",
        },
      ],
    },
  },
  { index: 6, type: "Sliders7" },
  {
    index: 7,
    type: "Sliders3",
    data: {
      slideHeading: "Electician, Plumber & Carpenter ",
      data: [
        {
          id: 1,
          heading: "Plumbing ",
          image: "/appliancereapirimg4.jpeg",
        },
        {
          id: 2,
          heading: "Electrician ",
          image: "/Electrician1.jpeg",
        },
        {
          id: 3,
          heading: "Carpainter ",
          image: "/carpainter1.jpeg",
        },
        {
          id: 4,
          heading: "Plumber ",
          image: "/Plumber1.jpeg",
        },
      ],
    },
  },
  {
    index: 8,
    type: "Sliders1",
    data: {
      slideHeading: "Appliance Repair & Service",
      slideData: [
        {
          id: 1,
          title: "Ac Repair ",
          image: "/AcRepairing.jpg",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/ChimneyRepair.jpeg",
          title: "Chimney Repair",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/RefrigeratorRepair.jpeg",
          title: "Refrigerator Repair",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/StoveRepiar.jpeg",
          title: "Stove Repair",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/TVrepair.jpeg",
          title: "Television Repair",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/WaterPurifierRepair1.jpeg",
          title: "Water Purifier Repair",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/microwaveRepair.jpeg",
          title: "Microwave Repair",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/Appliancerepairimg3.jpeg",
          title: "Cealing Repair",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/ApplianceRepairimg1.jpeg",
          title: "Ac Repair",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/Plumber1.jpeg",
          title: "Leakage Repair",
          reviews: "10k",
          price: 10,
          rating: 4.79,
          currency: "usd",
        },
      ],
    },
  },
  {
    index: 9,
    type: "Sliders3",
    data: {
      slideHeading: "Elderly Care",
      data: [
        {
          id: 1,
          heading: "Medical Support ",
          image: "/MedicalSupportElderlyCare.jpg",
        },
        {
          id: 2,
          heading: "Daily Assistance ",
          image: "/dailyAssistanceElderlyCare.avif",
        },
        {
          id: 3,
          heading: "Nutrition Monitoring ",
          image: "/nutritionelderlycare.jpeg",
        },
        {
          id: 4,
          heading: "Physiotherapy ",
          image: "/elderlycarephysical-therapy.webp",
        },
      ],
    },
  },
  { index: 10, type: "Sliders5" },
  {
    index: 11,
    type: "Sliders3",
    data: {
      slideHeading: "Salon & Message For Men",
      data: [
        {
         id: 1,
          heading: "Head Massage ",
          image: "/OIP.jpeg",
        },
        {
          id: 2,
          heading: "Hair Grooming ",
          image: "/SalonForMenimg3.jpeg",
        },
        {
          id: 3,
          heading: "Body Massage ",
          image: "/MassageMen.jpg",
        },
        {
          id: 4,
          heading: "Facial Spa ",
          image: "/MessageForMen.jpeg",
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
  Sliders6: Sliders6,
  Sliders7: Sliders7,
};
const looking = {
  title: "Home Services at your doorstep",
  services: [
    {
      id:1,
      title: "Women's Salon & Spa",
      // category:"women_salon_and_spa",
      image: "/Women's Salon & Spa.png",
      modal: "modal1",
      
    },
    {
      id:2,
      title: "Men's Salon & Massage",
      // category:"men_salonand_massage",
      image: "/Men's Salon & Spa.png",
      modal: "modal1",
      
    },
    {
      id:3,
      title: "Applicance Repair",
      // category:"applicance_repair",
      image: "Appliance Repair.png",
      modal: "modal1",
    },
    {
      id:4,
      title: "Cleaning & Pest Control",
      // category:"cleaning_and_pest_control",
      image: "/Cleaning & Pest Control.png",
      modal: "modal1",
    },
    {
      id:5,
      title: "Electician, Plumber & Carpenter",
      // category:"electician_plumber_and_carpenter",
      image: "/Electrician, Plumber & Carpenter.png",
      modal: "modal1",
    },
    {
      id:6,
      title: "Elderly Care",
      category: "Elderly_Care",
      image: "/Elderly Care.png",
      modal:"modal1"
    },
   
    {
      id:8,
      title: "Painting & Water proofing",
      category: "painting_and_water_proofing",
      image: "/Painting & Water Proofing.png",
      modal:"modal1"
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
