import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
const navOptions = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        Our Shop
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/order"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        Our Order
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        Cart
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "text-white"
        }
      >
        Contact Us
      </NavLink>
    </li>
  </>
);


  return (
    <div>
      <div className="navbar fixed top-0 z-50 max-w-screen-2xl text-white bg-black bg-opacity-40 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            PickN Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn  btn-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
