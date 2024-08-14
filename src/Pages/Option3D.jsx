import React from 'react';
import { Box } from '@react-three/drei';
import ModelCanvas from '../Components/ModelCanvas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Option3d = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {isMobile ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          className="w-full mx-10 py-16"
        >
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 1"
              description="Deskripsi model 1."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 2"
              description="Deskripsi model 2."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 3"
              description="Deskripsi model 3."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ModelCanvas
              model={<Box />}
              title="Model 4"
              description="Deskripsi model 4."
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="flex space-x-8">
          <ModelCanvas
            model={<Box />}
            title="Model 1"
            description="Deskripsi model 1."
          />
          <ModelCanvas
            model={<Box />}
            title="Model 2"
            description="Deskripsi model 2."
          />
          <ModelCanvas
            model={<Box />}
            title="Model 3"
            description="Deskripsi model 3."
          />
          <ModelCanvas
            model={<Box />}
            title="Model 4"
            description="Deskripsi model 4."
          />
        </div>
      )}
    </div>
  )
}

export default Option3d 