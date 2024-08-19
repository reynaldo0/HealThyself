// src/Components/ImageCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
