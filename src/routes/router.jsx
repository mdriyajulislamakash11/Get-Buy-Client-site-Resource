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
import AdminPrivateRoute from "./AdminPrivateRoute";
import AdminHome from "../Daashboard/AdminHome";
import UserHome from "../Daashboard/UserHome";
import AddProduct from "../Daashboard/AddProduct";
import ManagementProduct from "../Daashboard/ManageMentProduct";
import UpdateProduct from "../Daashboard/UpdateProduct";
import Payment from "../Daashboard/Payment";


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
      // only user routes _______________ Users  ________________/
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // only Admin route ___________________ Admin _____________________/
      {
        path: "allUsers",
        element: <AdminPrivateRoute><AllUsers /></AdminPrivateRoute>
      },
      {
        path: "adminHome",
        element: <AdminPrivateRoute><AdminHome /></AdminPrivateRoute>
      },
      {
        path: "addProduct",
        element: <AdminPrivateRoute><AddProduct /></AdminPrivateRoute>
      },
      {
        path: "manageProducts",
        element: <AdminPrivateRoute><ManagementProduct /></AdminPrivateRoute>
      },
      {
        path: "updateProduct/:id",
        element: <AdminPrivateRoute><UpdateProduct /></AdminPrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },


    ],
  },
]);
export default router;
