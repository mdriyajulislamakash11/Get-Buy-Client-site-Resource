import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../main/Mainlayout";
import Shop from "../pages/Products-Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import Order from "../pages/Category/Order";
import DashboardLayout from "../main/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Daashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // only user routes _______________ Users   ________________/
      {
        path: "cart",
        element: <Cart />,
      },
      // only Admin route ___________________ Admin _____________________/
      {
        path: "allUsers",
        element: <AllUsers />
      },


    ],
  },
]);
export default router;
