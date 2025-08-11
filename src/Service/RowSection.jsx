import axios from "axios"

export const createRow = async (formData) => {
    
  
  try {
    const response = await axios.post('http://localhost:8081/api/row-sections', formData, {
    
    });
    return response.data;
  } catch (error) {
    console.error('Error creating row section:', error);
    throw error;
  }
};