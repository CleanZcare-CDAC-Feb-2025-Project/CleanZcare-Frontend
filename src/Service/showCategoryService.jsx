// services/showCategoryService.js
import axios from "axios";

export const createShowCategory = async (data) => {
  console.log(data);
  
  const formData = new FormData();

  // Construct DTO
  const showCategoryDTO = {
    title: data.showCategoryTitle,
    category: data.selectedCategory || null,
    page: data.selectedPage || null,
    extraImageCategories: data.extraImageCategories || null, // <-- added
    // extraModalBanner:data.extraModalBanner,
    subShowCategories: data.subShowCategories?.map((sub, index) => ({
      title: sub.title,
      category: sub.category,
      imageCategories: sub.imageCategories || [],
    })) || [],
  };

  // Append DTO as Blob
  formData.append(
    "data",
    new Blob([JSON.stringify(showCategoryDTO)], { type: "application/json" })
  );

  // Append main image (single file)
  if (data.showCategoryImages) {
    formData.append("showCategoryImages", data.showCategoryImages);
  }

  // Append subShowCategory images and modal banners
  data.subShowCategories?.forEach((sub, index) => {

    if (sub.modalBanner) {
      formData.append(`subShowCategories[${index}].mainImage`, sub.mainImage);
    }

    // modal banner (single file)
    if (sub.modalBanner) {
      formData.append(`subShowCategories[${index}].modalBanner`, sub.modalBanner);
    }

    // images (multiple)
    if (sub.images && sub.images.length > 0) {
      sub.images.forEach((img) => {
        formData.append(`subShowCategories[${index}].images`, img);
      });
    }
  });

  // Append extra images (multiple files)
  if (data.extraImages && data.extraImages.length > 0) {
    data.extraImages.forEach((img) => {
      formData.append("extraImages", img);
    });
  }
  // Append extra images (multiple files)
  if (data.extraModalBanner) {
    // data.extraModalBanner.forEach((img) => {
      formData.append("extraModalBanner", data.extraModalBanner);
    // });
  }

  // Axios POST request
  return axios.post("http://localhost:8081/api/show-categories", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getCategories=async()=>{
   return axios.get("http://localhost:8081/api/categories");
}
export const getPages=async()=>{
   return axios.get("http://localhost:8081/api/pages");
}
export const getServiceGroup=async()=>{
   return axios.get("http://localhost:8081/api/service-groups");
}
export const createCategory=async(data)=>{
  return axios.post("http://localhost:8081/api/categories",data);
}


export const createServiceGroup = async ({ title, displayOrder, iconPath,serviceIds }) => {
  console.log("====================>",title, displayOrder, iconPath,serviceIds);
  
  const formData = new FormData();
  formData.append("title", title);
  formData.append("displayOrder", displayOrder);
  if (iconPath) {
    formData.append("icon", iconPath);
  }
  serviceIds.forEach((id) => formData.append("serviceIds", id));

  try {
    const response = await axios.post("http://localhost:8081/api/service-groups", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error creating service group:", error);
    throw error;
  }
};
export const createServiceWithSubServices = async (payload) => {
  try {
    const response = await axios.post('http://localhost:8081/api/services', payload);
    return response.data;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
};

export const getAllServices=async()=>{
  try {
    const response = await axios.get('http://localhost:8081/api/services');
    // console.log(response.data);
    return response.data;
  } catch (error) {
     console.error('Error creating service:', error);
    throw error;
  }
}