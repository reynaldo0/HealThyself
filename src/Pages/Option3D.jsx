import React from 'react';
import { Box } from '@react-three/drei';
import ModelCanvas from '../Components/ModelCanvas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Option3d = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background/golongan.png')` }}
      ></div>

      {/* Header */}
      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>
      
      {/* Title and Subtitle */}
      <div className="relative z-10 text-center py-6 px-4 bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2">Golongan</h1>
        <h2 className="text-2xl text-black">Subtitle or Description Here</h2>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center py-16 px-20 bg-transparent mx-auto max-w-screen-xl">
        <Swiper
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides={false}
          className="w-full mx-auto"
        >
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 1"
              description="Deskripsi model 1."
              gradientColors={['#09409A', '#26A5C4']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 2"
              description="Deskripsi model 2."
              gradientColors={['#FFB145', '#9F5D00']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 3"
              description="Deskripsi model 3."
              gradientColors={['#1BB05C', '#004B2C']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 4"
              description="Deskripsi model 4."
              gradientColors={['#760635', '#E21C34']}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Option3d;
