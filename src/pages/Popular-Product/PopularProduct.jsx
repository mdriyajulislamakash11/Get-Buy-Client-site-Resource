import React from "react";
import useProduct from "../../hook/useProduct";
import SectionlTitle from "../Share/SectionTitle";

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


      
    </div>
  );
};

export default PopularProduct;
