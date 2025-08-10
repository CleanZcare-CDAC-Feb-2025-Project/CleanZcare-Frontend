// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/AuthForm.css"; // make sure this path is correct

// const Login = () => {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const logUser = () => {
//     if (!userInfo.email || !userInfo.password) {
//       alert("Please fill in all fields");
//       return;
//     }
//     if (userInfo.email === "admin@demo.com" && userInfo.password === "admin") {
//       alert("Login successful!");
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Welcome Back</h2>
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
//         <button onClick={logUser}>Login</button>
//         <div className="switch-link">
//           Don't have an account? <Link to="/signup">Signup</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AuthForm.css";

const API_BASE = "http://localhost:8080"; // match your backend port

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginUser = async () => {
    if (!credentials.email || !credentials.password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE}/api/auth/login`, credentials);

      if (response.status >= 200 && response.status < 300) {
        // Assuming backend returns: { token, name, email, role }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));

        alert("Login successful!");
        navigate("/"); // go to home page
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <button onClick={loginUser}>Login</button>

        <div className="switch-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
