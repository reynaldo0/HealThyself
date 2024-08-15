import React from "react";
import { Box } from "@react-three/drei";
import ModelCanvas from "../Components/ModelCanvas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Option3d = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background/golongan.png')` }}
      ></div>

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>

      <div className="relative z-10 text-center px-4 bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2">Golongan</h1>
        <h2 className="text-2xl text-black">Subtitle or Description Here</h2>
      </div>

      <div className="relative z-10 py-16 px-8 bg-transparent mx-auto max-w-screen-xl flex">
        <Swiper
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides={false}
          className="w-full flex items-end"
        >
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Model 1"
              description="Deskripsi model 1."
              gradientColors={["#09409A", "#26A5C4"]}
              width="289px"
              height="341px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Model 2"
              description="Deskripsi model 2."
              gradientColors={["#FFB145", "#9F5D00"]}
              width="332px"
              height="415px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Model 3"
              description="Deskripsi model 3."
              gradientColors={["#1BB05C", "#004B2C"]}
              width="332px"
              height="376px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Model 4"
              description="Deskripsi model 4."
              gradientColors={["#760635", "#E21C34"]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Option3d;
