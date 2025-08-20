import React from "react";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Mainlayout = () => {
  const { user } = useAuth();
  const loaction = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooter || <Navber />}
      <div className="min-h-[calc(100vh-352px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Mainlayout;
