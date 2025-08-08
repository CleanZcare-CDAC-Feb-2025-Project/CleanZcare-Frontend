import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";
import { Sliders6 } from "../components/Sliders6";
const data = [
  { index: 1,
    type: "Sliders1",
    data: {
    slideHeading: "Most booked services",
    slideData: [
      {
        id: 1,
        title: "Hair Setting for Men ",
        image: "/SalonForMenimg3.jpeg",
        rating: 4.79,
        reviews: "106k",
        price: 1098,
        currency: "INR",
      },
      {
        id: 2,
        image: "/female-client-receiving-haircut-beauty-salon-young-woman-enjoying-getting-new-hairstyle_141172-7333.avif",
        title: "Hair Setting for Women",
        rating: 3.79,
        reviews: "106k",
        price: 1098,
        currency: "INR",
      },
      {
        id: 3,
        image: "/salonforwomenimg4.jpeg",
        title: "Nail Extension",
        reviews: "106k",
        price: 1098,
        rating: 5.79,
        currency: "INR",
      },
      {
        id: 4,
        image: "/OIP (1).jpeg",
        title: "FullBody Massage for Men",
        reviews: "106k",
        price: 1098,
        rating: 2.79,
        currency: "INR",
      },
      {
        id: 5,
        image: "/SpaForWomenimg3.jpeg",
        title: "FullBody Massage for Women",
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
        image: "/SalonForMenimg4.jpeg",
        title: "Beard Setting",
        reviews: "106k",
        price: 1098,
        rating: 1.79,
        currency: "INR",
      },
      {
        id: 8,
        image: "/SpaForWomenimg2.jpeg",
        title: "Pedicure",
        reviews: "106k",
        price: 1098,
        rating: 2.79,
        currency: "INR",
      },
      {
        id: 9,
        image: "/salonforwomenimg1.jpeg",
        title: "Hair Spa",
        reviews: "106k",
        price: 1098,
        rating: 3.79,
        currency: "INR",
      },
      {
        id: 10,
        image: "/SalonForMenimg1.jpeg",
        title: "Facial",
        reviews: "10k",
        price: 10,
        rating: 4.79,
        currency: "usd",
      },
    ],
  } },
  { index: 2,
     type: "Sliders3",
     data: {
    slideHeading: "Salon For Women",
    data: [
      {
        id: 1,
        heading: "Hair Setting ",
        image: "/female-client-receiving-haircut-beauty-salon-young-woman-enjoying-getting-new-hairstyle_141172-7333.avif",
        reviews: "10k",
        price: 10,
        rating: 4.79,
        currency: "usd",
      },
      {
        id: 2,
         heading: "Waxing ",
        image: "/salonforwomenimg2.jpeg",
        reviews: "10k",
        price: 10,
        rating: 4.79,
        currency: "usd",
      },
      {
        id: 3,
        heading: "Hair Spa ",
        image: "/salonforwomenimg1.jpeg",
        reviews: "10k",
        price: 10,
        rating: 4.79,
        currency: "usd",
      },
      {
        id: 4,
        heading: "Pedicure ",
        image: "/SpaForWomenimg2.jpeg",
        reviews: "10k",
        price: 10,
        rating: 4.79,
        currency: "usd",
      },
    ],
  } },
  { index: 3, type: "Sliders6" },
  { index: 4,
     type: "Sliders3",
     data: {
    slideHeading: "Spa For Women",
    SlideSubHeading:"Refresh. Rewind. Rejuvenate.",
    data: [
      {
        id: 1,
        heading: "Facial ",
        image: "/salonforwomenimg3.jpeg",
      },
      {
        id: 2,
        heading: "Head Massage ",
        image: "/SpaForWomenimg1.jpeg",
      },
      {
        id: 3,
        heading: "Face Mask ",
        image: "/SpaForWomenig4.webp",
      },
      {
        id: 4,
        heading: "Full Body Massage ",
        image: "/SpaForWomenimg3.jpeg",
      },
    ],
  } },
  { index: 5, type: "Sliders3", data: {
    slideHeading: "Hair & Nail services",
    slideSubHeading:"Refreshed style, revamped look",
    data: [
      {
        id: 1,
        heading: "Hair Setting ",
        image: "/female-client-receiving-haircut-beauty-salon-young-woman-enjoying-getting-new-hairstyle_141172-7333.avif",
      },
      {
        id: 2,
        heading: "Pedicure ",
        image: "/SpaForWomenimg2.jpeg",
      },
      {
        id: 3,
        heading: "Hair Spa ",
        image: "/salonforwomenimg1.jpeg",
      },
      {
        id: 4,
        heading: "Nail Extension ",
        image: "/salonforwomenimg4.jpeg",
      },
    ],
  } },
  { index: 6, type: "Sliders6" },
  { index: 7, type: "Sliders3", data: {
    slideHeading: "Salon for men",
    slideSubHeading:"Grooming essentials",
    data: [
      {
        id: 1,
        heading: "Hair Setting ",
        image: "/SalonForMenimg3.jpeg",
      },
      {
        id: 2,
        heading: "Beard Setting ",
        image: "/SalonForMenimg4.jpeg",
      },
      {
        id: 3,
        heading: "Eyebrow Setting ",
        image: "/MensEyebrowSetting.jpeg",
      },
      {
        id: 4,
        heading: "Hair Spa ",
        image: "/SalonForMen.jpeg",
      },
    ],
  } },
  { index: 8, type: "Sliders6" },
  { index: 9, type: "Sliders3", data: {
    slideHeading: "Massage for men",
    slideSubHeading:"Curated massage by top therapists.",
    data: [
      {
        id: 1,
        heading: "Head Massage ",
        image: "/OIP.jpeg",
      },
      {
        id: 2,
        heading: "Facial Massage ",
        image: "/MessageForMen.jpeg",
      },
      {
        id: 3,
        heading: "Legs Massage ",
        image: "/OIP (3).jpeg",
      },
      {
        id: 4,
        heading: "Full Body Massage ",
        image: "/MassageMen.jpg",
      },
    ],
  } },
 
];
const componentMapping = {
  Sliders: Sliders,
  Sliders1: Sliders1,
  Sliders2: Sliders2,
  Sliders3: Sliders3,
  Sliders6: Sliders6,
};
const looking = {
    title: "Beauty services at your doorstep",
    services: [
      {
        title: "Salon for Women",
        category:"salon_for_women",
        image: "/makeover.png",
      },
      {
        title: "Spa for Women",
        category:"spa_for_women",
        image: "/spa-and-relaxation.png",

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
      },
      {
        title: "Massage for Men",
        category:"message_for_men",
        image: "/barber-shop.png",
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
