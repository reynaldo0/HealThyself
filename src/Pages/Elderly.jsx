import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import accordionItems from "../docs/Accordion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import Footer from "../Components/Footer";
import { Kakek } from "../Components/Models/Kakek";
import ImageCarousel from "../Components/Corousel";
import HeroButton from "../Components/HeroButton";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

const slides = [
  {
    src: "/assets/carousel/baby/piramis.jpg",
    title: "First Slide",
    description: "Description for the first slide.",
  },
  {
    src: "/assets/carousel/baby/piramis.jpg",
    title: "Second Slide",
    description: "Description for the second slide.",
  },
  {
    src: "/assets/carousel/baby/piramis.jpg",
    title: "Third Slide",
    description: "Description for the third slide.",
  },
  {
    src: "/assets/carousel/baby/piramis.jpg",
    title: "Fourth Slide",
    description: "Description for the fourth slide.",
  },
];

const Accordion = React.memo(({ items, initialOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-xl">
      {items.map((item, index) => (
        <div key={index} className="pt-5">
          <button
            className="w-full px-4 py-5 text-left bg-elderly-normal/50 hover:bg-elderly-normal/60 text-white rounded-xl focus:outline-none flex items-center justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <FontAwesomeIcon
              icon={openIndex === index ? faMinus : faChevronDown}
              className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            style={{ maxHeight: openIndex === index ? "1000px" : "0" }} // Adjust maxHeight as needed
          >
            <div className="p-4 bg-elderly-normal/80 text-white/80 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const Elderly = () => {
  const canvasRef = useRef();
  const chartRef = useRef();
  const isMobile = window.innerWidth <= 768;
  const containerRef = useRef();

  const as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: as.map((a) => a + " bulan"),
          datasets: [
            {
              label: "Tinggi",
              data: [
                53.8, 56.1, 56.2, 59.9, 62.2, 64, 65.7, 67.3, 68.8, 70, 71.6,
                72.8,
              ],
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              backgroundColor: "rgba(66, 90, 148, 0.25)",
              borderColor: "#004BFF",
            },
            {
              label: "Berat",
              data: [4.3, 5.3, 5.3, 6, 6.6, 6.9, 7.3, 7.9, 8.2, 8.5, 8.8, 9],
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              backgroundColor: "rgba(255, 104, 44, 0.25)",
              borderColor: "#FF682C ",
            },
          ],
        },
        options: {
          hover: {
            mode: "index",
            intersect: false,
          },
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    const container = document.querySelector(".page-container");
    container.classList.add("fade-in");
  }, []);

  return (
    <section ref={containerRef} className="pt-24">
      <Navbar buttonColor="bg-elderly-dark">
        <Navbar.Item to={"#"} title={"Beranda"} />
        <Navbar.Item to={"#panduan"} title={"Panduan"} />
        <Navbar.Item to={"#gizi"} title={"Gizi"} />
        <Navbar.Item to={"#imunisasi"} title={"Imunisasi"} />
        <Navbar.Item to={"#perawatan"} title={"Perawatan"} />
        <Navbar.Item to={"#lingkungan"} title={"Lingkungan"} />
      </Navbar>

      {/* hero section start */}
      <section
        id="Home"
        className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden page-container"
      >
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h1
                  className="font-bold text-4xl text-elderly-dark"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="700"
                >
                  Tantangan Kesehatan Bayi di Indonesia: Menangani Masalah Gizi
                  dan Perkembangan.
                </h1>

                <p
                  className="text-lg text-tertiary"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  Di Indonesia, sekitar 30% bayi mengalami stunting akibat pola
                  makan yang tidak memadai, dan infeksi saluran pernapasan akut
                  (ISPA) menyumbang hingga 20% dari kematian bayi. Hanya 60%
                  bayi mendapatkan ASI eksklusif selama 6 bulan, dan cakupan
                  imunisasi dasar lengkap masih di bawah 80%. Tantangan ini
                  menekankan perlunya perbaikan dalam pola makan, sanitasi, dan
                  layanan kesehatan untuk meningkatkan gaya hidup dan kesehatan
                  bayi.
                </p>

                <HeroButton
                  to="#panduan"
                  circle="bg-elderly-normal"
                  textColor="text-elderly-normal"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/elderly/wave.svg"
                alt="Wave Decoration"
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
                <Kakek />
              </Canvas>
              {/* card glassmorphism */}
              <div
                className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="700"
              >
                <img
                  src="/icons/baby/LANSIA-1.png"
                  alt="Health"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                />
                <p className="font-bold text-xl text-white text-center">
                  Kesehatan
                </p>
              </div>

              <div
                className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="700"
              >
                <img
                  src="/icons/baby/LANSIA-2.png"
                  alt="Happiness"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="700"
                />
                <p className="font-bold text-xl text-elderly-dark text-center">
                  Bahagia
                </p>
              </div>

              {/* Animated Balls */}
              <Ball
                classList="absolute -right-8 top-10 animation-delay-1000"
                size={100}
                color="#08D28B"
              />
              <Ball
                classList="absolute right-40 top-64 animation-delay-1500"
                size={70}
                color="#08D28B"
              />
              <Ball
                classList="absolute right-24 bottom-12 animation-delay-1500"
                size={110}
                color="#08D28B"
              />
              <Ball classList="absolute -right-14 top-1/2" color="#fff" />
              <Ball
                classList="absolute right-1/3 top-10 -z-10"
                color="#0A6847"
                size={70}
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}


      {/* video bayi start */}
      <section id="video" className="relative">
        <img
          src="/background/awan-putih.png"
          alt="White Clouds"
          className="absolute w-full top-0 z-10"
        />
        <CustomVideo src={"/assets/carousel/baby/tahap.mp4"} />
        <img
          src="/background/awan-toska.png"
          alt="Blue Clouds"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="gizi" className="bg-elderly-dark py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <h2
                className="text-2xl md:text-4xl font-bold mb-4 text-white"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="700"
              >
                Rencana <span className="text-elderly-light">Asi Bayi</span>
              </h2>
              <p
                className="text-lg text-white mb-8"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
                Menyusun rencana ASI yang efektif membantu memastikan bayi
                mendapatkan nutrisi optimal dan pengalaman menyusui yang nyaman.
                Temukan strategi dan tips untuk membuat proses menyusui lebih
                lancar dan menyenangkan.
              </p>
              {/* Accordion Section */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="900"
              >
                <Accordion items={accordionItems} initialOpenIndex={0} />
              </div>
            </div>
            <div
              className="flex-shrink-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="900"
            >
              <img
                src="/assets/OrangTua.png"
                alt="Mother and Child"
                className="w-96 h-auto"
              />
            </div>
          </div>
          {/* Ball components here */}
          <div className="absolute top-5 right-4 md:right-36">
            <Ball classList="animation-delay-1000" size={60} color="#ffff" />
          </div>
          <div className="absolute bottom-0 md:bottom-10 right-0 md:right-10">
            <Ball classList="animation-delay-1000 " size={80} color="#ffff" />
          </div>
        </div>
      </section>
      {/* rencana asi bayi end */}

      {/* rencana gizi bayi start */}
      <section id="gizi-2" className="min-h-[70vh] items-center justify-center py-36">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1
              className="text-elderly-normal font-bold text-3xl md:text-4xl text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <span className="text-elderly-dark">Informasi </span> Gizi Anak
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat sangat penting untuk mendukung pertumbuhan dan perkembangan anak. Informasi gizi anak mencakup kebutuhan nutrisi utama, termasuk protein, karbohidrat, lemak sehat, vitamin, dan mineral yang mendukung kesehatan dan energi mereka. Memahami kebutuhan gizi anak membantu memastikan mereka mendapatkan makanan yang seimbang untuk mendukung perkembangan fisik dan mental yang optimal.
            </p>
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="py-20 bg-[url('/background/bg-imunisasi-toska.png')]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-elderly-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Usia <span className="text-elderly-normal">Efektif Imunisasi</span> Bayi</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi bayi dimulai segera setelah lahir dan berlanjut pada usia tertentu untuk melindungi dari penyakit serius. Vaksin Hepatitis B dan BCG diberikan pada usia 0-1 bulan, vaksin Polio, DTP, dan Hib pada usia 2-4 bulan, serta vaksin MMR pada usia 12 bulan. Jadwal ini memastikan bayi terlindungi secara optimal dari berbagai infeksi.</p>
            </div>
            <div className="w-full md:w-2/3">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                modules={[Pagination, Autoplay]}
                className="mb-20 w-full h-full min-h-[300px]"
                data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800"
              >

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-Influenza.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Influenza <span className="text-elderly-normal"></span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis tahunan.
                        Permasalahan: Lansia memiliki risiko tinggi terkena komplikasi flu. Vaksin tahunan penting untuk melindungi dari flu musiman, tetapi cakupannya sering kali tidak optimal.

                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img
                        src="/assets/carousel/baby/Vaksin-Pneumokokus.jpg"
                        alt="Immunization"
                      />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">
                        Vaksin Pneumokokus{" "}
                        <span className="text-elderly-normal">
                          dan Vaksinasi
                        </span>
                      </h1>
                      <p className="text-tertiary text-sm">
                        Jadwal: Dosis pertama pada usia 65 tahun, dengan dosis
                        kedua 5 tahun kemudian (jika sesuai indikasi medis).
                        Permasalahan: Lansia rentan terhadap infeksi paru-paru.
                        Keterlambatan atau ketidakteraturan dalam vaksinasi
                        pneumokokus dapat meningkatkan risiko infeksi pneumonia
                        dan komplikasi serius.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img
                        src="/assets/carousel/baby/Vaksin-Shingles.jpg"
                        alt="Immunization"
                      />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">
                        Vaksin Shingles{" "}
                        <span className="text-elderly-normal">
                          (Herpes Zoster)
                        </span>
                      </h1>
                      <p className="text-tertiary text-sm">
                        Vaksin polio melindungi bayi dari poliomielitis,
                        penyakit virus yang dapat menyebabkan kelumpuhan
                        permanen. Vaksin polio diberikan dalam beberapa dosis
                        pada usia 2, 3, dan 4 bulan untuk memastikan
                        perlindungan penuh terhadap virus polio.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img
                        src="/assets/carousel/baby/Vaksin-DT.jpg"
                        alt="Immunization"
                      />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">
                        Vaksin Tetanus-diphtheria{" "}
                        <span className="text-elderly-normal">(Td)</span>
                      </h1>
                      <p className="text-tertiary text-sm">
                        Vaksin DTP melindungi bayi dari tiga penyakit serius:
                        difteri, tetanus, dan pertusis (batuk rejan). Difteri
                        dapat menyebabkan masalah pernapasan, tetanus menyerang
                        sistem saraf dan bisa berakibat fatal, sementara
                        pertusis adalah penyakit pernapasan yang sangat menular.
                        Vaksin ini diberikan pada usia 2, 3, dan 4 bulan.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img
                        src="/assets/carousel/baby/hib.jpeg"
                        alt="Immunization"
                      />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">
                        VAKSIN HIB{" "}
                        <span className="text-elderly-normal">
                          dan Vaksinasi
                        </span>
                      </h1>
                      <p className="text-tertiary text-sm">
                        Vaksin Hib melindungi bayi dari infeksi bakteri
                        Haemophilus influenzae tipe B, yang dapat menyebabkan
                        penyakit serius seperti meningitis (radang selaput
                        otak), pneumonia, dan epiglotitis. Vaksin Hib diberikan
                        pada usia 2, 3, dan 4 bulan.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img
                        src="/assets/carousel/baby/mmr.jpg"
                        alt="Immunization"
                      />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-elderly-dark font-bold text-3xl mb-4">
                        VAKSIN MMR{" "}
                        <span className="text-elderly-normal">
                          dan Vaksinasi
                        </span>
                      </h1>
                      <p className="text-tertiary text-sm">
                        Vaksin MMR melindungi lansia dari risiko komplikasi yang
                        disebabkan oleh infeksi campak (measles), gondongan
                        (mumps), dan rubella. Meskipun lebih umum diberikan
                        kepada anak-anak, vaksin ini juga penting untuk orang
                        dewasa dan lansia yang belum divaksin atau memiliki
                        risiko tinggi terhadap infeksi ini. Penerimaan vaksin
                        MMR dapat membantu melindungi kesehatan jangka panjang
                        dan mencegah komplikasi serius.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section
        id="perawatan"
        className="md:bg-[url('/background/wave-toska.png')] bg-cover md:h-[150vh]"
      >
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row h-[100vh] items-center justify-center gap-10">
            <div
              className="w-full md:w-1/2"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="700"
            >
              <Swiper
                spaceBetween={16}
                direction={isMobile ? "horizontal" : "vertical"}
                effect={"coverflow"}
                coverflowEffect={{
                  slideShadows: false,
                  rotate: 0,
                  stretch: -20,
                  depth: 100,
                  modifier: 2.5,
                }}
                centeredSlides={false}
                slidesPerView={isMobile ? 1 : 3}
                modules={[EffectCoverflow, Autoplay]}
                autoplay={{ delay: 2000 }}
                loop
                className="h-[400px]"
              >
                {as.map(() => (
                  <SwiperSlide>
                    <div className="bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                      <h1 className="font-semibold mb-2">
                        Peluk dan Timang Bayi untuk Menumbuhkan Rasa Aman
                      </h1>
                      <p className="text-tertiary">
                        Sentuhan fisik, seperti memeluk dan menimang bayi,
                        memberikan rasa aman dan kenyamanan. Ini juga membantu
                        mengurangi stres pada bayi dan memperkuat ikatan antara
                        bayi dan orang tua.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div>
                <h1
                  className="text-elderly-normal font-bold text-4xl mb-4"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="700"
                >
                  Panduan Perawatan{" "}
                  <span className="text-elderly-normal">Jiwa Bayi</span>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  Merawat jiwa bayi adalah bagian penting dari perkembangan
                  mereka yang sering kali terabaikan. Jiwa yang sehat membantu
                  bayi tumbuh menjadi anak yang bahagia dan percaya diri.
                  Berikut adalah beberapa tips untuk merawat jiwa bayi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* panduan perawatan jiwa bayi end */}

      {/* panduan lingkungan start */}
      <section id="lingkungan">
        <div className="w-full bg-white rounded-t-[150px] md:-mt-28 py-20">
          <div className="container">
            <h1
              className="text-4xl font-bold text-elderly-dark text-center mb-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="700"
            >
              Panduan Lingkungan{" "}
              <span className="text-elderly-normal">Sehat untuk Bayi</span>
            </h1>
            <p
              className="text-center text-tertiary max-w-screen-md mx-auto"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              Menjaga lingkungan yang sehat dan aman adalah salah satu cara
              terbaik untuk melindungi bayi dari berbagai risiko yang dapat
              membahayakan kesehatannya. Berikut adalah beberapa hal yang harus
              dihindari untuk menciptakan lingkungan yang aman bagi bayi.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">
                    Hindari Mainan Kecil yang Bisa Tertelan
                  </h5>
                  <p className="text-sm text-elderly-dark group-hover/item:text-white">
                    Mainan dengan ukuran kecil atau bagian-bagian kecil yang
                    dapat terlepas dapat tertelan oleh bayi dan menyebabkan
                    tersedak. Pastikan mainan sesuai dengan usia bayi dan tidak
                    memiliki bagian yang mudah lepas.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* panduan lingkungan end */}
      <Footer backgroundColor="#253B70" />
    </section>
  );
};

export default Elderly;
