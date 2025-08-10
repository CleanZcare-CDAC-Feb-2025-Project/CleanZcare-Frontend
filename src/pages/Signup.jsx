// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/AuthForm.css";

// const Signup = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const register = () => {
//     console.log(userInfo)
//     if (!userInfo.name || !userInfo.email || !userInfo.password) {
//       alert("Please fill in all fields");
//       return;
//     }
//     alert("Signup successful!");
//     // const response = await userSiginup()
//     navigate("/login");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Create Account</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) =>
//             setUserInfo({ ...userInfo, password: e.target.value })
//           }
//         />
//         <button onClick={register}>Signup</button>
//         <div className="switch-link">
//           Already have an account? <Link to="/login">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AuthForm.css";

const API_BASE = "http://localhost:8080"; // match your backend port

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    roleLabel: "User",
  });
  const navigate = useNavigate();

  const register = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      alert("Please fill all fields");
      return;
    }

    const backendRole =
      userInfo.roleLabel === "Service Provider"
        ? ["ROLE_SERVICE_PROVIDER"]
        : ["ROLE_USER"];

    const payload = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      role: backendRole,
    };

    try {
      const response = await axios.post(`${API_BASE}/api/auth/signup`, payload);

      if (response.status >= 200 && response.status < 300) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          value={userInfo.name}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          value={userInfo.email}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          value={userInfo.password}
        />

        <select
          value={userInfo.roleLabel}
          onChange={(e) =>
            setUserInfo({ ...userInfo, roleLabel: e.target.value })
          }
        >
          <option value="User">User</option>
          <option value="Service Provider">Service Provider</option>
        </select>

        <button onClick={register}>Signup</button>

        <div className="switch-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
