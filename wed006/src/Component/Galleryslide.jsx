import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "./Galleryslide.css";

export default function Galleryslide() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 1000, }}
          loop={true}
      >
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0001.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0002.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0003.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0004.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0005.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/IMG-20240523-WA0006.jpg" alt="" className="slide-img" /></SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}