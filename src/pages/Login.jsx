import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AuthForm.css"; // make sure this path is correct

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const logUser = () => {
    if (!userInfo.email || !userInfo.password) {
      alert("Please fill in all fields");
      return;
    }
    if (userInfo.email === "admin@demo.com" && userInfo.password === "admin") {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button onClick={logUser}>Login</button>
        <div className="switch-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
