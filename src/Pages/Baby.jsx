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
  const isMobile = window.innerWidth <= 768;

  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
  }, []);

  return (
    <section className="pt-24">
      <Navbar />

      {/* hero section start */}
      <section
        id="Home"
        className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden"
      >
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl text-baby-dark">
                  Apakah Anda Tahu Tahapan Perkembangan Bayi Anda?
                </h1>
                <p className="text-xl text-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="bg-baby-normal text-white p-4 rounded-lg w-fit">
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
                classList="absolute -right-8 top-10 animation-delay-1000"
                size={100}
              />
              <Ball
                classList="absolute right-40 top-64 animation-delay-1500"
                size={70}
              />
              <Ball
                classList="absolute right-24 bottom-12 animation-delay-1500"
                size={110}
              />
              <Ball classList="absolute -right-14 top-1/2" />
              <Ball
                classList="absolute right-1/3 top-10 -z-10"
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
          </div>

          <canvas ref={canvasRef} className="max-w-[80%] w-[600px] mx-auto"></canvas>

          <div className="flex items-center">
            <div className="relative md:mx-auto pt-10">
              <div className="absolute hidden md:block -left-14 transform z-10">
                <button className="custom-prev bg-none border border-baby-dark text-baby-dark transition hover:bg-baby-dark hover:text-white size-10 justify-center items-center rounded-full">&lt;</button>
              </div>
              <div className="absolute hidden md:block -right-14 transform z-10">
                <button className="custom-next bg-none border border-baby-dark text-baby-dark transition hover:bg-baby-dark hover:text-white size-10 flex justify-center items-center rounded-full">&gt;</button>
              </div>

              <Swiper slidesPerView={isMobile ? 2 : 4} effect="coverflow" centeredSlides={false}
                spaceBetween={16} className="relative max-w-screen-md w-[90vw]" modules={[Navigation, Autoplay]} loop autoplay={{delay: 2000}} navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev'
                }}>
                {[...Array(12)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <SwiperButton number={index + 1} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* grafik perkembangan bayi end */}

      {/* video bayi start */}
      <section id="video" className="relative">
        <img
          src="/background/awan-putih.webp"
          alt="awan putih"
          className="absolute w-full top-0 z-10"
        />
        <CustomVideo src={"/background/background.mp4"} />
        <img
          src="/background/awan-biru.webp"
          alt="awan biru"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="rencana" className="bg-baby-dark py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-white">Rencana <span className="text-baby-vlight">Asi Bayi</span></h2>
              <p className="text-lg text-white mb-8">
                Ini adalah contoh paragraf teks. Anda dapat menambahkan lebih banyak konten teks di sini untuk menjelaskan atau memberikan informasi lebih lanjut. Tailwind CSS memudahkan dalam mengatur layout dan desain.
              </p>
              {/* Accordion Section */}
              <Accordion items={accordionItems} initialOpenIndex={0} />
            </div>
            <div className="flex-shrink-0">
              <img src="/assets/emak-anak.webp" alt="Contoh Gambar" className="w-96 h-auto rounded-lg" />
            </div>
          </div>
          {/* Ball components here */}
          <div className="absolute top-5 right-4 md:right-36">
            <Ball classList="animation-delay-1000" size={60} />
          </div>
          <div className="absolute bottom-0 md:bottom-10 right-0 md:right-10">
            <Ball classList="animation-delay-1000 " size={80} />
          </div>
        </div>
      </section>
      {/* rencana asi bayi end */}

      {/* rencana gizi bayi start */}
      <section id="gizi" className="min-h-[70vh] items-center justify-center pt-36">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-baby-normal font-bold text-3xl md:text-4xl text-center">
              <span className="text-baby-dark">Panduan</span> Perkembangan Bayi
            </h1>
            <p className="md:text-base text-sm text-tertiary text-center max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}


      {/* jenis vaksinasi start */}
      <section className="pt-20 bg-[url('/background/bg-imunisasi.png')] min-h-screen ">
        {/* jenis vaksinasi start */}
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-baby-dark">Usia <span className="text-baby-normal">Efektif Imunisasi</span> Bayi</h1>
              <p className="text-[#575757]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="w-full md:w-2/3">
              <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true }} loop autoplay={{ delay: 3000, pauseOnMouseEnter: true }} modules={[Pagination, Autoplay]} className="mb-20">
                {as.map(() => (
                  <SwiperSlide className="">
                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col md:flex-row overflow-hidden gap-5 md:gap-10">
                      <div className="flex-1">
                        <img src="/assets/carousel/baby/1.png" alt="gatau ini apaan" />
                      </div>
                      <div className="flex-[2]">
                        <h1 className="text-baby-dark font-bold text-3xl mb-4">Jenis Vaksinasi <span className="text-baby-light">dan Vaksinasi</span></h1>
                        <p className="text-tertiary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* jenis vaksinasi end */}

        <Footer backgroundColor="#253B70"/>
      </section>
    </section>
  );
};

export default Baby;
