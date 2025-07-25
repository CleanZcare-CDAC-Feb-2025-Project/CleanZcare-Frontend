// src/components/api.js

export async function loginUser(email, password) {
    // Temporary mock function (you can replace with real API later)
    if (email === "test@gmail.com" && password === "123456") {
      return { status: "success" };
    }
    return { status: "error" };
  }
  
  export async function registerUser(userData) {
    // Temporary mock function
    if (userData.email && userData.password) {
      return { status: "success" };
    }
    return { status: "error" };
  }
  