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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Footer from "../Components/Footer";
import ImageCarousel from "../Components/Corousel";
import { Bar } from "react-chartjs-2";
import HeroButton from "../Components/HeroButton";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend, Tooltip);

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
            <div className="p-4 bg-baby-ldark text-white/80 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const slides = [
  { src: '/assets/carousel/baby/piramis.jpg', title: 'First Slide', description: 'Description for the first slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Second Slide', description: 'Description for the second slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Third Slide', description: 'Description for the third slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Fourth Slide', description: 'Description for the fourth slide.' },
];


const Baby = () => {
  const isMobile = window.innerWidth <= 768;
  const containerRef = useRef(); // Ref for container element

  const as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const chartData = [
    { tinggi: 53.8, berat: 4.3 },
    { tinggi: 56.1, berat: 5.3 },
    { tinggi: 56.2, berat: 5.5 },
    { tinggi: 59.9, berat: 6 },
    { tinggi: 62.2, berat: 6.6 },
    { tinggi: 64, berat: 6.9 },
    { tinggi: 65.7, berat: 7.3 },
    { tinggi: 67.3, berat: 7.9 },
    { tinggi: 68.8, berat: 8.2 },
    { tinggi: 70, berat: 8.5 },
    { tinggi: 71.6, berat: 8.8 },
    { tinggi: 72.8, berat: 9 },
  ]

  const chartOptions = {
    hover: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + ' cm';
          }
        }
      },
    },
  }

  useEffect(() => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in');
  }, []);

  return (
    <section ref={containerRef} className="pt-24">
      <Navbar>
        <Navbar.Item to={'#'} title={'Beranda'} />
        <Navbar.Item to={'#panduan'} title={'Panduan'} />
        <Navbar.Item to={'#gizi'} title={'Gizi'} />
        <Navbar.Item to={'#imunisasi'} title={'Imunisasi'} />
        <Navbar.Item to={'#perawatan'} title={'Perawatan'} />
        <Navbar.Item to={'#lingkungan'} title={'Lingkungan'} />
      </Navbar>

      {/* hero section start */}
      <section id="Home" className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden page-container">
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">

                <h1 className="font-bold text-4xl text-baby-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Buruk Nya Gaya Hidup Bayi
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Permasalahan gaya hidup dan kesehatan bayi di Indonesia mencakup stunting pada 30% bayi, rendahnya cakupan ASI eksklusif, dan masih tingginya kasus ISPA yang berkontribusi pada kematian bayi. Kurangnya pola makan sehat, sanitasi yang buruk, dan cakupan imunisasi yang belum optimal menjadi tantangan utama.
                </p>

                <HeroButton />

              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/wave.svg"
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
                <Bayi />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-3xl border border-white rounded-[34px] right-40 top-10 p-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/baby/susu.png" alt="Health" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-3xl border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                <img src="/icons/baby/kura-kura.png" alt="Happiness" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-baby-dark text-center">Bahagia</p>
              </div>

              {/* Animated Balls */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" size={100} />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" size={70} />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" size={110} />
              <Ball classList="absolute -right-14 top-1/2" />
              <Ball classList="absolute right-1/3 top-10 -z-10" color="#253B70" size={70} />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* grafik perkembangan bayi start */}
      <section id="panduan" className="min-h-[70vh] py-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">

            <h1 className="text-baby-normal font-bold text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              <span className="text-baby-dark">Pantau Perkembangan</span> <span className="underline-box after:bg-baby-normal/20">Bayi Ideal</span>
            </h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Pantau perkembangan bayi dengan panduan ini untuk memahami tahapan penting seperti fisik, motorik, dan bahasa. Dapatkan informasi dan tips untuk mendukung pertumbuhan bayi di setiap tahap usianya.
            </p>
          </div>

          <Bar data={{
            labels: chartData.map(data => data.berat + ' kg'),
            xLabels: 'kg',
            yLabels: 'cm',
            datasets: [
              {
                label: "Berat",
                data: chartData.map(data => data.tinggi),
                borderWidth: 1,
                borderRadius: Number.MAX_VALUE,
                backgroundColor: 'rgba(66, 90, 148, 0.25)',
                borderColor: '#004BFF'
              }
            ]
          }} options={chartOptions} className="max-w-full w-[750px] mx-auto" />

        </div>
      </section>
      {/* grafik perkembangan bayi end */}

      {/* video bayi start */}
      <section id="video" className="relative">
        <img
          src="/background/awan-putih.png"
          alt="White Clouds"
          className="absolute w-full top-0 z-10"
        />
        <CustomVideo src={"/assets/carousel/baby/tahap.mp4"} />
        <img
          src="/background/awan-biru.png"
          alt="Blue Clouds"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="gizi" className="bg-baby-dark py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700"> Gizi Bayi <span className="text-baby-vlight">Tercukupi</span></h2>
              <p className="text-lg text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                Pastikan bayi mendapat nutrisi optimal dengan rencana ASI yang tepat. Temukan tips untuk menjadikan proses menyusui lebih lancar dan nyaman.
              </p>
              {/* Accordion Section */}
              <div data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="900">
                <Accordion items={accordionItems} initialOpenIndex={0} />
              </div>
            </div>
            <div className="flex-shrink-0" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="900">
              <img src="/assets/emak-anak.webp" alt="Mother and Child" className="w-96 h-auto" />
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
              className="text-baby-normal font-bold text-3xl md:text-4xl text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <span className="text-baby-dark">Informasi </span> <span className="underline-box after:bg-baby-normal/20">Gizi Bayi</span>
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat penting untuk pertumbuhan dan perkembangan bayi. Informasi gizi mencakup kebutuhan utama seperti protein, karbohidrat, lemak sehat, vitamin, dan mineral untuk mendukung kesehatan dan energi mereka. Memahami kebutuhan ini memastikan makanan yang seimbang untuk perkembangan fisik dan mental optimal.







            </p>
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="py-20 bg-[url('/background/bg-imunisasi.png')]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-baby-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700"> <span className="text-baby-normal">Efektifitas Imunisasi</span> </h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi bayi dimulai sejak lahir dengan vaksin Hepatitis B dan BCG, dilanjutkan dengan Polio, DTP, dan Hib pada usia 2-4 bulan, serta MMR pada usia 12 bulan untuk perlindungan optimal dari penyakit serius.</p>
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
                      <img src="/assets/carousel/baby/hepatis.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin Hepatitis B</h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama setelah lahir, kedua pada 1-2 bulan, dan ketiga pada 6-18 bulan. Melindungi dari infeksi hepatitis B yang dapat merusak hati.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/bcg.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin BCG</h1>
                      <p className="text-tertiary text-sm">Jadwal: Setelah lahir. Melindungi dari tuberkulosis (TB) yang dapat mempengaruhi paru-paru dan organ lain.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/polio.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin Polio</h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada 2 bulan, kedua pada 4 bulan, ketiga pada 6 bulan, dan keempat pada 18 bulan. Mencegah poliomielitis.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/dtp.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin DTP</h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada 2 bulan, kedua pada 4 bulan, ketiga pada 6 bulan, dan keempat pada 18 bulan. Mencegah difteri, tetanus, dan pertusis.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/hib.jpeg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin Hib</h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada 2 bulan, kedua pada 4 bulan, ketiga pada 6 bulan, dan keempat pada 12-15 bulan. Melindungi dari infeksi bakteri yang dapat menyebabkan penyakit serius.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="perawatan" className="md:bg-[url('/background/wave.png')] bg-cover md:h-[150vh]">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row h-[100vh] items-center justify-center gap-10">
            <div className="w-full md:w-1/2" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              <Swiper spaceBetween={16} direction={isMobile ? 'horizontal' : 'vertical'} effect={'coverflow'} coverflowEffect={{
                slideShadows: false,
                rotate: 0,
                stretch: -20,
                depth: 100,
                modifier: 2.5,
              }} centeredSlides={false} slidesPerView={isMobile ? 1 : 3} modules={[EffectCoverflow, Autoplay]} autoplay={{ delay: 2000 }} loop className="h-[400px]">

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                    <h1 className="font-semibold mb-2">Kasih Sayang Konsisten</h1>
                    <p className="text-tertiary">Kasih sayang melalui pelukan dan kata-kata lembut membantu bayi merasa aman dan dicintai, memperkuat ikatan emosional dan kepercayaan.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                    <h1 className="font-semibold mb-2">Stimulasi Lingkungan Positif</h1>
                    <p className="text-tertiary">Lingkungan yang penuh mainan edukatif dan warna cerah merangsang perkembangan otak bayi dan mendukung pembelajaran awal mereka.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                    <h1 className="font-semibold mb-2">Waktu Bermain Berkualitas</h1>
                    <p className="text-tertiary">Bermain bersama bayi mengembangkan kemampuan sosial dan emosional serta memperkuat hubungan orang tua-anak.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                    <h1 className="font-semibold mb-2">Respon Cepat Terhadap Kebutuhan</h1>
                    <p className="text-tertiary">Merespon cepat terhadap tangisan bayi membuat mereka merasa aman dan dipahami, mendukung perkembangan emosional yang baik.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                    <h1 className="font-semibold mb-2">Tempat Tidur Aman</h1>
                    <p className="text-tertiary">Tempat tidur yang aman memberikan rasa nyaman dan mengurangi stres, memperkuat ikatan antara bayi dan orang tua.</p>
                  </div>
                </SwiperSlide>






              </Swiper>
            </div>
            <div className="w-full md:w-1/2 flex items-center mt-20">
              <div>
                <h1 className="text-baby-dark font-bold text-4xl mb-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="700">
                  Membangun Fondasi <span className="text-baby-light">Kesehatan Mental</span>
                </h1>
                <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                  Merawat kesehatan mental bayi penting untuk perkembangan emosional. Perhatian dan kasih sayang membantu bayi tumbuh menjadi anak yang percaya diri dan seimbang.
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
            <h1 className="text-4xl font-bold text-baby-dark text-center mb-4" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              Lingkungan Sehat <span className="text-baby-light underline-box after:bg-baby-normal/20">Fondasi Kesehatan Bayi Anda</span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              Jaga kebersihan, keamanan, dan kenyamanan untuk mendukung pertumbuhan bayi. Ikuti langkah-langkah penting setiap hari untuk kesehatan optimal bayi Anda.
            </p>




            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">

              <div

                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Pastikan Kebersihan Udara di Sekitar Bayi</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Hindari asap rokok, debu, dan polusi. Gunakan pembersih udara dan pastikan ventilasi ruangan baik.</p>
              </div>

              <div
                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Tempat Tidur Aman</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Gunakan kasur rata dan hindari bantal atau selimut tebal untuk mencegah SIDS.</p>
              </div>

              <div
                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Kualitas Air Minum</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Pastikan air yang dikonsumsi bayi bersih dan aman, gunakan air matang atau kemasan jika perlu.</p>
              </div>

              <div
                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Hindari Bahan Kimia</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Jauhkan produk kimia berbahaya dari jangkauan bayi, simpan di tempat aman.</p>
              </div>

              <div
                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Produk Perawatan Aman</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Pilih produk bebas bahan kimia berbahaya dan hypoallergenic.</p>
              </div>

              <div
                className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
              >
                <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Amankan Sudut Furnitur</h5>
                <p className="text-sm text-baby-light group-hover/item:text-white">Gunakan pelindung untuk sudut tajam dan tepi furnitur untuk mencegah cedera bayi.</p>
              </div>


            </div>
          </div>
        </div>
      </section>


      {/* panduan lingkungan end */}
      <Footer backgroundColor="#253B70">
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'ayosehat.kemkes.go.id'} />
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'ayosehat.kemkes.go.id'} />
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'ayosehat.kemkes.go.id'} />
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'ayosehat.kemkes.go.id'} />
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'ayosehat.kemkes.go.id'} />
      </Footer>
    </section>
  );
};

export default Baby;