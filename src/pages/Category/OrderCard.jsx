import React from "react";
import ProductCard from "../Product-Card/ProductCard";

const OrderCard = ({ items }) => {
    console.log(items)
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {items.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
