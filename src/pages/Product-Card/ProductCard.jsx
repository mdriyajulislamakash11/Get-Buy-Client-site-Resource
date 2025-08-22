import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const ProductCard = ({ item }) => {
  const { name, description, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    if (user && user.email) {

      const productItem = {
        menuItemId: _id,
        email: user?.email,
        name, 
        description,
        image, 
        price,
      };

      axiosSecure.post('/carts', productItem)
      .then(res => {
        if(res.data.insertedId){
           Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added yto your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })




    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page

          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img  src={image} alt={name} className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-indigo-600 font-bold mt-2">${price}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
