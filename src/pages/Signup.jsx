import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const register = () => {
    console.log(userInfo)
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      alert("Please fill in all fields");
      return;
    }
    alert("Signup successful!");
    // const response = await userSiginup()
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
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
        <button onClick={register}>Signup</button>
        <div className="switch-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
