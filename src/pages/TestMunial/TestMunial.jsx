import SectionTitle from "../Share/SectionTitle";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

// rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <>
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />

      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div>
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="border p-4 my-2 text-center ">
                <div className="flex justify-center my-10">
                  <p className="">
                    <Rating
                      style={{ maxWidth: 250 }}
                      value={review.rating}
                      readOnly={true}
                    />
                  </p>
                </div>
                <h2 className="text-4xl font-semibold">{review.name}</h2>
                <p className="my-3">{review.details}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Testimonial;
