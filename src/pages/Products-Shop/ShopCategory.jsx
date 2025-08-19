import React from "react";
import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const ShopCategory = ({ items, title, coverImg }) => {
  return (
    <div className="">
      {title && (
        <Cover
          img={coverImg}
          title={title}
          description="Authoritatively predominate client-centric products without adaptive ROI. Enthusiastically pursue user friendly alignments via excellent value. Quickly facilitate."
        />
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-10 my-16">
        {items.map((item) => (
          <ProductInfoCard key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
