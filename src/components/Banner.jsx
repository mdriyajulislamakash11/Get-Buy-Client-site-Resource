import { Swiper, SwiperSlide } from "swiper/react";
import pic from"../assets/pic.jpeg"
import pic1 from"../assets/pic1.jpeg"
import pic2 from"../assets/pic2.jpeg"
import pic3 from"../assets/pic3.jpeg"
import pic4 from"../assets/pi4.jpeg"
import pic5 from"../assets/pic5.jpeg"
// import pic6 from"../assets/pic6.jpeg"

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
            <img className="w-full h-[400px] md:h-[700px]" src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-[400px] md:h-[700px]" src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-[400px] md:h-[700px]" src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-[400px] md:h-[700px]" src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-[400px] md:h-[700px]" src={pic4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-[400px] md:h-[700px]" src={pic5} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Banner;
