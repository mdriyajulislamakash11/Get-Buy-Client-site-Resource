import React from "react";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh-352px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
