import React from "react";
import useProduct from "../../hook/useProduct";
import SectionlTitle from "../Share/SectionTitle";
import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";

const PopularProduct = () => {
  const [product] = useProduct();

  const popularProduct = product.filter((item) => item.category === "Popular");

  console.log(popularProduct.length);

  return (
    <div>
      <SectionlTitle
        heading="Popular Products"
        subHeading="Check out our most popular items"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {popularProduct.map((item) => (
          <ProductInfoCard key={item._id} item={item} />
        ))}
      </div>

      {/* button */}
      <div className="flex justify-center my-3">
        <button className="btn btn-outline">View All</button>
      </div>

      {/* number Contact */}
        <div className="flex my-16 justify-center items-center bg-black w-full h-60">
            <h2 className="text-4xl font-bold text-white">Call Us: 01307784859 GP</h2>
        </div>


        
    </div>
  );
};

export default PopularProduct;
