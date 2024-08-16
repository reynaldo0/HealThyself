import React, { useEffect, useRef } from "react";
import ModelCanvas from "../Components/ModelCanvas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Bayi } from "../Components/Models/Bayi";
import { Anak } from "../Components/Models/Anak";
import { Dewasa } from "../Components/Models/Dewasa";
import { Kakek } from "../Components/Models/Kakek";
import { Remaja } from "../Components/Models/Remaja";
import 'swiper/css';
import { Link } from "react-router-dom";

const Option3d = ({ onBack }) => {
  const isMobile = window.innerWidth <= 768;
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="relative min-h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background/golongan.png')` }}
      ></div>

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>

      <div className="relative z-10 text-center bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2 pt-10 md:py-0">Golongan</h1>
        <h2 className="text-xl text-primary">Pilihlah Kategori Usia Anda!</h2>
      </div>

      <div className="relative z-10 px-16 bg-transparent mx-auto max-w-screen-xl flex">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 3.5}
          centeredSlides={false}
          className="w-full flex items-end pt-10 pb-4 px-2"
        >
          {/* Swiper slides */}
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Bayi />}
              title="Bayi"
              description="0-2 Tahun"
              gradientColors={["#26A5C4", "#09409A"]}
              width="289px"
              height="211px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
              canvasWidth="180px"
              canvasHeight="220px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Anak />}
              title="Anak - Anak"
              description="3-12 Bulan"
              gradientColors={["#FFB145", "#9F5D00"]}
              width="289px"
              height="300px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
              canvasWidth="200px"
              canvasHeight="220px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Remaja />}
              title="Remaja"
              description="3-12 Bulan"
              gradientColors={["#1BB05C", "#004B2C"]}
              width="289px"
              height="300px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
              canvasWidth="200px"
              canvasHeight="220px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Dewasa />}
              title="Dewasa"
              description="3-12 Bulan"
              gradientColors={["#E21C34", "#760635"]}
              width="289px"
              height="268px"
              titleColor="#6FDB9F"
              descriptionColor="#FFF"
              canvasWidth="220px"
              canvasHeight="240px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Kakek />}
              title="Lansia"
              description="3-12 Bulan"
              gradientColors={["#F2C94C", "#F2994A"]}
              width="289px"
              height="300px"
              titleColor="#FFC0CC"
              descriptionColor="#FFF"
              canvasWidth="240px"
              canvasHeight="240px"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute -bottom-11 xl:-bottom-20 left-20 transform -translate-y-1/2 flex items-center space-x-2">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.26659 6.64864L1.91956 7L2.2666 7.35136L7.29723 12.4447L6.46383 13.2885L0.673872 7.42635C0.673854 7.42633 0.673836 7.42632 0.673819 7.4263C0.563221 7.31426 0.5 7.16104 0.5 7C0.5 6.83896 0.563221 6.68574 0.673819 6.5737C0.673836 6.57368 0.673854 6.57367 0.673872 6.57365L6.46383 0.711526L7.29723 1.55531L2.26659 6.64864Z" fill="#909090" stroke="black" />
          </svg>

          <button
            onClick={onBack} // Use the onBack function here
            className="text-black font-semibold opacity-50 hover:opacity-100"
          >
            Kembali
          </button>
        </div>

        <div className="relative gap-5">
          <button
            onClick={handlePrev}
            className="absolute -bottom-16 xl:-bottom-24 right-20 transform -translate-y-1/2 bg-transparent border-secondary border-2 text-white p-2 rounded-full shadow-lg hover:border-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5001 12.9999H7.91406L12.4141 17.4999L11.0001 18.9139L4.08606 11.9999L11.0001 5.08594L12.4141 6.49994L7.91406 10.9999H19.5001V12.9999Z" fill="#FF682C" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute -bottom-16 xl:-bottom-24 right-4 transform -translate-y-1/2 bg-transparent border-secondary border-2 text-white p-2 rounded-full shadow-lg hover:border-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.49994 11.0001H16.0859L11.5859 6.50006L12.9999 5.08606L19.9139 12.0001L12.9999 18.9141L11.5859 17.5001L16.0859 13.0001H4.49994V11.0001Z" fill="#FF682C" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Option3d;
