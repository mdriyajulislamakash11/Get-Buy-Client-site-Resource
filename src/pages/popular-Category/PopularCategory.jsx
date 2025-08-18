import React from "react";

import pic1 from "../../assets/category-pic/pic1.jpg";
import pic2 from "../../assets/category-pic/pic2.jpg";
import pic3 from "../../assets/category-pic/pic3.jpg";
import pic4 from "../../assets/category-pic/pic4.jpg";
import pic5 from "../../assets/category-pic/pic5.jpg";
import pic6 from "../../assets/category-pic/pic6.jpg";
import pic7 from "../../assets/category-pic/pic7.jpg";
import pic8 from "../../assets/category-pic/pic8.jpg";
import pic9 from "../../assets/category-pic/pic9.jpg";
import pic10 from "../../assets/category-pic/pic10.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionlTitle from "../Share/SectionTitle";

const PopularCategory = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

  return (
    <div className="mb-12">
      <SectionlTitle
        heading={"Product Categories"}
        subHeading={"Popular"}
      ></SectionlTitle>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              className="h-[150px] md:h-[400px] md:w-[300px] object-cover rounded-lg"
              src={img}
              alt={`category-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCategory;
