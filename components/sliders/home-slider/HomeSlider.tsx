import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeSlideComponent from "./slide";

const HomeSliderComponent = () => {
  return (
    <div className="home-banner-swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {[1, 2, 3].map((i,index) => (
          <SwiperSlide key={i}>
            <HomeSlideComponent imgUrl={`/swiper/${index}.webp`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderComponent;
