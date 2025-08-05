import React, { useEffect, useRef } from "react";
import Categorycard from "../Cards/CategoryCard";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/20/solid";
const data3 = [
  {
    id: 1,
    title: "Home appliances",
    data: [
      {
        id: 1,
        title: "AC",
        category: "ac_service_repair",
        image: "image1.png",
      },
      {
        id: 2,
        title: "Washing Machine",
        category: "washing_machine_repair",
        image: "image1.png",
      },
      {
        id: 3,
        title: "Television",
        category: "tv_repair",
        image: "image1.png",
      },
      {
        id: 4,
        title: "Laptop",
        category: "laptop_repair",
        image: "image1.png",
      },
      {
        id: 5,
        title: "Air Cooler",
        category: "air_cooler_repair",
        image: "image1.png",
      },
      {
        id: 6,
        title: "Geyser",
        category: "geyser_reapir",
        image: "image1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Kitchen appliances",
    data: [
      {
        id: 1,
        title: "Water Purifier",
        category: "ro_repair",
        image: "image1.png",
      },
      {
        id: 2,
        title: "Refrigerator",
        category: "refrigerator_repair",
        image: "image1.png",
      },
      {
        id: 3,
        title: "stove",
        category: "gas_stove_repair",
        image: "image1.png",
      },
      {
        id: 3,
        title: "Microwave",
        category: "microwave_repair",
        image: "image1.png",
      },
      {
        id: 4,
        title: "Chimney",
        category: "chimney_and_hob_repair",
        image: "image1.png",
      },
    ],
  },
  
];
const data1 = [
  {
    id: 1,
    title: "",
    data: [
      {
        id: 1,
        title: "Salon for Women",
        // category:"salon_for_women",
        image: "image1.png",
        options: true,
        data: [
          {
            id: 1,
            image: "popup2.png",
            category: "salon_luxe",
          },
          {
            id: 2,
            image: "popup3.png",
            category: "prime",
          },
          {
            id: 3,
            image: "popup4.png",
            category: "classic",
          },
        ],
      },
      {
        id: 2,
        title: "Spa for Women",
        image: "image1.png",
        options: true,
        // category:"spa_for_women",
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
            category: "luxe",
          },
        ],
      },
      {
        id: 3,
        title: "Hair Studio for Women",
        category: "women_hair_studio",
        // image: "image.png",
      },
    ],
  },
];
const data2 = [
  {
    id: 1,
    title: "",
    data: [
      {
        id: 1,
        title: "Salon for Men",
        category:"salon_for_men",
        image: "",
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
        id: 2,
        title: "Massage for Men",
        category:"message_for_men",
        image: "",
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
      },
    ],
  },
];
const data4 = [
  {
    id: 1,
    title: "Cleaning",
    data: [
      {
        id: 1,
        title: "Bathroom Cleaning",
        category: "professional_bathroom_cleaning",
        image: "cleaning1.png",
      },
      {
        id: 2,
        title: "Kitchen Cleaning",
        category: "professional_kitchen_cleaning",
        image: "cleaning2.png",
      },
      {
        id: 3,
        title: "Full Home Cleaning",
        category: "professional_home_cleaning",
        image: "cleaning3.png",
      },
      {
        id: 4,
        title: "Sofa & Carpet Cleaning",
        category: "professional_sofa_cleaning",
        image: "cleaning4.png",
      },
    ],
  },
  {
    id: 2,
    title: "Pest Control",
    data: [
      {
        id: 1,
        title: "Cockroch, Ant & General Pest Control",
        category: "pest_control",
        image: "pest1.png",
      },
      {
        id: 2,
        title: "Termite Control",
        category: "termite_control",
        image: "pest2.png",
      },
      {
        id: 3,
        title: "Bed Bugs Control",
        category: "bed_bugs_control",
        image: "pest3.png",
      },
    ],
  },
];
const data5 = [
  {
    id: 1,
    title: "Home repairs",
    data: [
      {
        id: 1,
        title: "Electrician",
        category: "electricians",
        image: "image1.png",
      },
      {
        id: 2,
        title: "Plumber",
        category: "plumbers",
        image: "image1.png",
      },
      {
        id: 3,
        title: "Carpenter",
        category: "carpenters",
        image: "image1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Home installation",
    data: [
      {
        id: 1,
        title: "Furniture Assembly",
        category: "furniture_assembly",
        image: "image1.png",
      },
      {
        id: 2,
        title: "Geyser",
        category: "geyser_reapir",
        image: "image1.png",
      },
      {
        id: 3,
        title: "LKEA Furniture Assembly",
        category: "ikea_furniture_assembly",
        image: "image1.png",
      },
    ],
  },
];
const data6 = [
  {
    id: 1,
    title: "Elderly Care",
    data: [
      {
        id: 1,
        title: "In-Home Nursing",
        category: "in-home nursing",
        image: "image1.png",
      },
      {
        id: 2,
        title: "Physiotherapy",
        category: "physiotherapy",
        image: "image1.png",
      },
      {
        id: 3,
        title: "Home Doctor",
        category: "home doctors",
        image: "image1.png",
      },
      {
        id: 4,
        title: "Nutrition Monitoring",
        category: "nutrition monitoring",
        image: "image1.png",
      },
    ],
  },
];


const Modal1 = ({ show, close, data, title, options_id }) => {
  const modalRef = useRef(null);
  console.log("data from modal1", options_id);

  const dataMap = {
    "data 1": data1,
    "data 2": data2,
    "data 3": data3,
    "data 4": data4,
    "data 5": data5,
    "data 6":data6,
  };
  const dataoption = dataMap[`data ${options_id}`];
  console.log(dataoption);

  useEffect(() => {
    if (show && modalRef.current) {
      // modalRef.current.focus(); // Focus modal when it opens
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
    >
      <div
        ref={modalRef}
        tabIndex="0"
        // onBlur={() => {
        //   close();
        // }}
        className="relative bg-white px-0 rounded-lg shadow-lg outline-none w-full max-w-xl max-h-[90vh] overflow-y-auto "
      >
        <div className="flex flex-row justify-between items-center py-6 px-3 sticky top-0 bg-white z-10">
          <span className="flex flex-row gap-2 items-center">
            <ArrowLeftIcon
              className="h-6 cursor-pointer"
              onClick={() => close()}
            />
            <p>{title}</p>
          </span>
          <ShareIcon className="h-6 cursor-pointer" />
        </div>

        <div className="flex flex-col flex-wrap justify-around gap-3 p-2">
          <div className="flex flex-col gap-3 p-2 justify-around">
            {dataoption &&
              dataoption.map((value, key) => (
                <>
                  <p>{value.title} </p>
                  <div className="flex flex-row gap-2 flex-wrap" onClick={(e) => e.stopPropagation()}>
                    {value.data ? (
                      value.data.map((item, idx) => (
                        <Categorycard key={idx} data={item} modal={item.data} />
                      ))
                    ) : (
                      <Categorycard data={value} modal={value.data} />
                    )}
                  </div>
                </>
              ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
