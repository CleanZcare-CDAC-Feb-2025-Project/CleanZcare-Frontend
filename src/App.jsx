import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Beauty from "./pages/beauty.jsx";
import Landing from "./pages/Landing.jsx";
import Store from "./pages/store.jsx";
import Checkout from "./pages/Checkout.jsx";
import { Cart } from "./Cart/Cart.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { AdminLandingPage } from "./pages/AdminLandingPage.jsx";
import { AdminUsers } from "./pages/AdminUsers.jsx";
import { Services } from "./pages/services.jsx";
import { Revenue } from "./pages/Revanue.jsx";
import { Dashboard } from "./pages/professional/Dashboard.jsx";
import ElderlyCare from './pages/ElderlyCare.jsx';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ElderlyCare" element={<ElderlyCare />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route index element={<AdminLandingPage />} />
          <Route path="dashboard" element={<AdminLandingPage />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="services" element={<Services />} />
          <Route path="revenue" element={<Revenue />} />
        </Route>
        <Route path="/professional/*" element={<Dashboard/>}>
          <Route path="dashboard" element={<Dashboard />} />

        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
