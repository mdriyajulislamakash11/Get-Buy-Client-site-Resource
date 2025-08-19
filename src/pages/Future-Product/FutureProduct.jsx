import React from "react";
import pic from "../../assets/pic2.jpeg";
import SectionTitle from "../Share/SectionTitle";

const FutureProduct = () => {
  return (
    <div
      className="relative py-10 bg-fixed w-full h-auto md:h-[550px] my-16 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${pic})`,
      }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full text-white px-4">
        <SectionTitle
          heading={"Future Products"}
          subHeading={"Stay tuned for our latest arrivals"}
        />

        <div className="flex justify-evenly flex-col md:flex-row items-center gap-6 my-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={pic}
              alt="Future Product"
              className="rounded-lg shadow-lg max-h-72 object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h2 className="text-2xl md:text-3xl  font-bold mb-4">
              Coming Soon 🚀
            </h2>
            <p className="max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum cupiditate aspernatur officiis vero numquam doloremque
              aliquam quis quasi magni maiores quaerat aliquid modi, repellat
              accusantium dignissimos molestiae. Inventore, ad?
            </p>
            <button className="btn btn-outline">More Option</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProduct;
