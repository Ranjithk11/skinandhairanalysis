import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialCardComponent from "@/components/cards/testimonial/TestimonialCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledSlideBox = styled(Box)(({ theme }) => ({
  //minHeight: 300,
  width: "100%",
  height: "auto",
  position: "relative",
  overflow: "hidden",
}));

const TestimonialSliderComponent = () => {
  return (
    <StyledSlideBox>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {[1, 2, 3].map((i, index) => (
          <SwiperSlide key={i}>
            <TestimonialCardComponent />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlideBox>
  );
};

export default TestimonialSliderComponent;
