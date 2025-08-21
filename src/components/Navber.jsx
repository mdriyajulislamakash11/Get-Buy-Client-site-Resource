import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";

const Navber = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

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
          to="/order/Electronics"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-white"
          }
        >
          Order Product
        </NavLink>
      </li>
      {
        user && isAdmin && <li>
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Dashboard
        </NavLink>
      </li>
      }
      {
        user && !isAdmin && <li>
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Dashboard
        </NavLink>
      </li>
      }

      {/* Shopping Cart */}
      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive
              ? "relative text-yellow-500 font-bold"
              : "relative text-white"
          }
        >
          <FaShoppingCart className="text-lg" />
          {/* badge */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
              {cart.length}
            </span>
          )}
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
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navOptions}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-yellow-400">
            PickN Shop
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              {/* Show profile */}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500 shadow-md"
                />
              )}
              <span className="hidden md:inline text-sm font-medium">
                {user.displayName || user.email}
              </span>
              <button
                onClick={logOut}
                className="btn btn-outline btn-sm text-white border-yellow-400 hover:bg-yellow-500 hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline btn-sm text-white border-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
