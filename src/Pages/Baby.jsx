import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import Bayi from "../Components/Models/landingPage/Bayi";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import accordionItems from "../docs/Accordion";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperButton from "../Components/SwiperButton";
import Footer from "../Components/Footer";

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

const Accordion = ({ items, initialOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-xl shadow-md">
      {items.map((item, index) => (
        <div key={index} className="pt-5">
          <button
            className="w-full px-4 py-5 text-left bg-baby-soft hover:bg-baby-vsoft text-white rounded-xl focus:outline-none flex items-center justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <FontAwesomeIcon
              icon={openIndex === index ? faMinus : faChevronDown}
              className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            style={{ maxHeight: openIndex === index ? '1000px' : '0' }} // Adjust maxHeight as needed
          >
            <div className="p-4 bg-baby-ldark text-white">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Baby = () => {
  const canvasRef = useRef();
  const chartRef = useRef();
  const containerRef = useRef();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              backgroundColor: 'rgba(66, 90, 148, 0.25)',
              borderColor: '#004BFF'
            },
          ],
        },
        options: {
          hover: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [labels]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.classList.add('fade-in');
    }
  }, []);

  const handleNavigation = (path) => {
    // Implement the navigation logic here
    // For example, using React Router:
    // history.push(path);
  };

  return (
    <section ref={containerRef} className="pt-24">
      <Navbar />

      {/* hero section start */}
      <section
        id="Home"
        className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden page-container"
      >
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl text-baby-dark">
                  {/* Add heading text */}
                </h1>
                <p className="text-xl text-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  className="bg-baby-normal text-white p-4 rounded-lg w-fit"
                  onClick={() => handleNavigation('/explore')}
                >
                  Mulai Eksplorasi
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/wave.svg"
                alt="wave baby"
                className="absolute right-0 top-0 -z-10"
                draggable="false"
              />
              {/* 3D */}
              <Canvas className="bg-transparent w-[300px] h-[400px] md:h-[500px]">
                <ambientLight intensity={1.4} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI * 0.3}
                  maxPolarAngle={Math.PI * 0.6}
                />
                <Bayi />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4">
                <img src="/icons/baby/susu.png" alt="susu bayi" />
                <p className="font-bold text-xl text-white text-center">
                  Kesehatan
                </p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md">
                <img src="/icons/baby/kura-kura.png" alt="kura kura" />
                <p className="font-bold text-xl text-baby-dark text-center">
                  Bahagia
                </p>
              </div>

              {/* bola bola ayam */}
              <Ball
                className="absolute -right-8 top-10 animation-delay-1000"
                size={100}
              />
              <Ball
                className="absolute right-40 top-64 animation-delay-1500"
                size={70}
              />
              <Ball
                className="absolute right-24 bottom-12 animation-delay-1500"
                size={110}
              />
              <Ball className="absolute -right-14 top-1/2" />
              <Ball
                className="absolute right-1/3 top-10 -z-10"
                color="#253B70"
                size={70}
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* grafik perkembangan bayi start */}
      <section id="grafik" className="min-h-[70vh] pt-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-baby-normal font-bold text-4xl text-center">
              <span className="text-baby-dark">Panduan</span> Perkembangan Bayi
            </h1>
            <p className="text-base text-tertiary text-center max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="p-4 rounded-xl bg-baby-soft w-full max-w-[800px]">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
        </div>
      </section>
      {/* grafik perkembangan bayi end */}

      {/* jenis vaksinasi start */}
      <section id="Vaksinasi" className="min-h-[70vh] pt-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-baby-normal font-bold text-4xl text-center">
              <span className="text-baby-dark">Jenis</span> Vaksinasi
            </h1>
            <p className="text-base text-tertiary text-center max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="relative w-full">
              <Swiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                className="w-full max-w-[800px] rounded-xl"
              >
                <SwiperSlide className="p-4 bg-baby-soft rounded-xl">
                  <img src="/path/to/image1.jpg" alt="Image 1" className="rounded-xl" />
                  <p className="mt-4 text-white">Description for Image 1</p>
                </SwiperSlide>
                <SwiperSlide className="p-4 bg-baby-soft rounded-xl">
                  <img src="/path/to/image2.jpg" alt="Image 2" className="rounded-xl" />
                  <p className="mt-4 text-white">Description for Image 2</p>
                </SwiperSlide>
                <SwiperSlide className="p-4 bg-baby-soft rounded-xl">
                  <img src="/path/to/image3.jpg" alt="Image 3" className="rounded-xl" />
                  <p className="mt-4 text-white">Description for Image 3</p>
                </SwiperSlide>
              </Swiper>
              <SwiperButton />
            </div>
          </div>
        </div>
      </section>
      {/* jenis vaksinasi end */}

      <section className="pt-28 min-h-[70vh]">
        <div className="container">
          <h1 className="text-baby-dark font-bold text-4xl text-center">
            Jenis Makanan
          </h1>
          <Accordion items={accordionItems} initialOpenIndex={0} />
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Baby;
