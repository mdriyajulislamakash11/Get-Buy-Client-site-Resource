import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { name, description, category, image, price } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-indigo-600 font-bold mt-2">${price}</p>
        <div className="card-actions">
          <Link to={'/'}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
