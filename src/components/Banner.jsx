import { Swiper, SwiperSlide } from "swiper/react";
import pic from "../assets/pic.jpeg";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pi4 from "../assets/pi4.jpeg"; 
import pic5 from "../assets/pic5.jpeg";
import pic6 from"../assets/pic6.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}   // ✅ এখানে loop চালু করলাম
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic2} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic3} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pi4} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic5} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[250px] md:h-[700px]" src={pic6} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
