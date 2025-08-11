import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:8081/api/pages/landing");
    console.log("response", response);
    const looking = {
      title: "Home Services at your doorstep",
      service:response.data.showCategoryList,
    //   services: [
    //     {
    //       id: 1,
    //       title: "Women's Salon & Spa",
    //       image: "",
    //       modal: "modal1",
    //     },
    //     {
    //       id: 2,
    //       title: "Men's Salon & Massage",
    //       // category:"men_salonand_massage",
    //       image: "",
    //       modal: "modal1",
    //     },
    //     {
    //       id: 3,
    //       title: "AC & Applicance Repair",
    //       // category:"ac_and_applicance_repair",
    //       image: "",
    //       modal: "modal1",
    //     },
    //     {
    //       id: 4,
    //       title: "Cleaning & Pest Control",
    //       // category:"cleaning_and_pest_control",
    //       image: "",
    //       modal: "modal1",
    //     },
    //     {
    //       id: 5,
    //       title: "Electician, Plumber & Carpenter",
    //       // category:"electician_plumber_and_carpenter",
    //       image: "",
    //       modal: "modal1",
    //     },
    //     {
    //       id: 6,
    //       title: "Native Water Purifier",
    //       category: "native_water_purifier",
    //       image: "",
    //     },
    //     {
    //       id: 7,
    //       title: "Native Smart Lock",
    //       category: "native_smart_lock",
    //       image: "",
    //     },
    //     {
    //       id: 8,
    //       title: "Painting & Water profing",
    //       category: "painting_and_water_profing",
    //       image: "",
    //     },
    //   ],
    };
  } catch (error) {
    console.log(error);
  }
};

export const getServiceGroupData=async(category)=>{
    try {
    const response = await axios.get(`http://localhost:8081/api/service-groups/category/${category}`);
    console.log("response", response);
    return response.data;
  
  } catch (error) {
    console.log(error);
  }
}
