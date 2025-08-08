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
        // {
        //   id: 1,
        //   // title: "Total Storage ",
        //   // metric: "94 GB",
        //   image: "/slider1.png",
        //   // icon: "",
        //   // rating: 4.79,
        //   // reviews: "106k",
        //   // price: 1098,
        //   // currency:"INR"
        //   // fill: "#4c5c75",
        //   // percentage: 94,
        // },
        // {
        //   id: 2,
        //   image: "/slider1.png",
        //   // title: "Images",
        //   // rating: 3.79,
        //   // reviews: "106k",
        //   // price: 1098,
        //   // currency:"INR"
        // },
        // {
        //   id: 3,
        //   image: "/slider1.png",
        //   // title: "Documents",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 5.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 4,
        //   image: "/slider1.png",
        //   // title: "Audios",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 2.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 5,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 3.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 6,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 4.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 7,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 1.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 8,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 2.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 9,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "106k",
        //   // price: 1098,
        //   // rating: 3.79,
        //   // currency:"INR"
        // },
        // {
        //   id: 10,
        //   image: "/slider1.png",
        //   // title: "Videos",
        //   // reviews: "10k",
        //   // price: 10,
        //   // rating: 4.79,
        //   // currency: "usd",
        // },
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
          title: "Kitchen Cleaning",
          image: "/KitchenCleaning.png",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/AcRepairing.jpg",
          title: "AC Repair",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/ElectricWork.png",
          title: "Electrician Work",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/Full House Painting.avif",
          title: "Full House Painting",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/bathroom-cleaning-service.jpeg",
          title: "Bathroom Cleaning",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/slider1.png",
          title: "Plumbing Work",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/slider1.png",
          title: "Lock Repairing",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/slider1.png",
          title: "Water Purifier Repairing",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        
      ],
    },
  },
  {
    index: 3,
    type: "Sliders1",
    data: {
      slideHeading: "Elevate your Home",
      slideData: [
        {
          id: 1,
          title: "Custom Upholstery ",
          image: "/CustomUpholstery.png",
          rating: 4.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 2,
          image: "/LightningDesign.png",
          title: "Lightning Design",
          rating: 3.79,
          reviews: "106k",
          price: 1098,
          currency: "INR",
        },
        {
          id: 3,
          image: "/ColorConsultation.png",
          title: "Color Consultation",
          reviews: "106k",
          price: 1098,
          rating: 5.79,
          currency: "INR",
        },
        {
          id: 4,
          image: "/OrganizationAndDecluttering.png",
          title: "Organization And Decluttering",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 5,
          image: "/OutdoorOasis.png",
          title: "Outdoor Oasis",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 6,
          image: "/FurnitureSourcing.png",
          title: "Furniture Sourcing",
          reviews: "106k",
          price: 1098,
          rating: 4.79,
          currency: "INR",
        },
        {
          id: 7,
          image: "/InteriorStyling.png",
          title: "Interior Styling",
          reviews: "106k",
          price: 1098,
          rating: 1.79,
          currency: "INR",
        },
        {
          id: 8,
          image: "/KitchenRefresh.png",
          title: "Kitchen Refresh",
          reviews: "106k",
          price: 1098,
          rating: 2.79,
          currency: "INR",
        },
        {
          id: 9,
          image: "/HomeStaging.png",
          title: "Home Staging",
          reviews: "106k",
          price: 1098,
          rating: 3.79,
          currency: "INR",
        },
        {
          id: 10,
          image: "/SpacePlanning.png",
          title: "Space Planning",
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
      slideHeading: "Cleaning And Pest Control",
      SlideSubHeading: "Clean Pestfree Homes.",
      data: [
        {
          id: 1,
          heading: "Deep Cleaning ",
          image: "/Deep Cleaning.png",
        },
        {
          id: 2,
          heading: "General Pest Management",
          image: "/General Pest Management.png",
        },
        {
          id: 3,
          heading: "Regular Housekeeping",
          image: "/Regular Housekeeping.png",
        },
        {
          id: 4,
          heading: "Termite and Rodent Control ",
          image: "/Termite and Rodent Control.png",
        },
      ],
    },
  },
  {
    index: 6,
    type: "Sliders3",
    data: {
      slideHeading: "Appliance Repair And Service",
      slideSubHeading: "Repair And Reuse",
      data: [
        {
          id: 1,
          heading: "Washer & Dryer Service",
          image: "/Washer & Dryer Service.png",
        },
        {
          id: 2,
          heading: "Refrigerator Repair",
          image: "/Refrigerator Repair.png",
        },
        {
          id: 3,
          heading: "Dishwasher Repair",
          image: "/Dishwasher Repair.png",
        },
        {
          id: 4,
          heading: "Oven & Stove Service",
          image: "/Oven & Stove Service.png",
        },
        {
          id: 5,
          heading: "Water Purifier Repair",
          image: "/Water Purifier Repair.png",
        },
      ],
    },
  },
  { index: 7, type: "Sliders2" },
  {
    index: 8,
    type: "Sliders3",
    data: {
      slideHeading: "Painting Plumbing And Garden",
      slideSubHeading: "Brighter And Greener Homes",
      data: [
        {
          id: 1,
          heading: "Interior & Exterior Painting",
          image: "/Interior & Exterior Painting.png",
        },
        {
          id: 2,
          heading: "Garden & Landscaping",
          image: "/Garden & Landscaping.png",
        },
        {
          id: 3,
          heading: "Drywall Repair & Finishing",
          image: "/Drywall Repair & Finishing.png",
        },
        {
          id: 4,
          heading: "Plumbing Services",
          image: "/Plumbing Services.png",
        },
        {
          id: 5,
          heading: "Doors and Windows Polishing",
          image: "/Doors and Windows Polishing.png",
        },
      ],
    },
  },
  // { index: 9, type: "Sliders2" },
  // {
  //   index: 10,
  //   type: "Sliders3",
  //   data: {
  //     slideHeading: "Massage for men",
  //     slideSubHeading: "Curated massage by top therapists.",
  //     data: [
  //       {
  //         id: 1,
  //         heading: "Total Storage ",
  //         image: "/sliderp.png",
  //       },
  //       {
  //         id: 2,
  //         heading: "Total Storage ",
  //         image: "/sliderp.png",
  //       },
  //       {
  //         id: 3,
  //         heading: "Total Storage ",
  //         image: "/sliderp.png",
  //       },
  //       {
  //         id: 4,
  //         heading: "Total Storage ",
  //         image: "/sliderp.png",
  //       },
  //     ],
  //   },
  // },
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
