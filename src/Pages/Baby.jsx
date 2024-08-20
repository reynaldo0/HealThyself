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

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend, Tooltip);

const Accordion = React.memo(({ items, initialOpenIndex }) => {
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
            <div className="p-4 bg-baby-ldark text-white/80 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

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
                  Tantangan Kesehatan Bayi di Indonesia: Menangani Masalah Gizi dan Perkembangan.
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Di Indonesia, sekitar 30% bayi mengalami stunting akibat pola makan yang tidak memadai, dan infeksi saluran pernapasan akut (ISPA) menyumbang hingga 20% dari kematian bayi. Hanya 60% bayi mendapatkan ASI eksklusif selama 6 bulan, dan cakupan imunisasi dasar lengkap masih di bawah 80%. Tantangan ini menekankan perlunya perbaikan dalam pola makan, sanitasi, dan layanan kesehatan untuk meningkatkan gaya hidup dan kesehatan bayi.
                </p>
                <button
                  className="learn-more relative inline-block h-auto w-48 cursor-pointer border-none bg-transparent align-middle font-radioCasnada text-inherit outline-none"
                  onClick={() => window.location.href = '#panduan'}
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="900"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text translate-x-2">Selengkapnya</span>
                </button>

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
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4">
                <img src="/icons/baby/susu.png" alt="Health" />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md">
                <img src="/icons/baby/kura-kura.png" alt="Happiness" />
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
              <span className="text-baby-dark">Panduan</span> Perkembangan Bayi
            </h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Jelajahi panduan komprehensif kami untuk memahami berbagai tahap perkembangan bayi. Dari perkembangan fisik hingga keterampilan motorik dan bahasa, temukan informasi berharga untuk mendukung pertumbuhan bayi Anda di setiap langkahnya. Dapatkan wawasan tentang apa yang diharapkan pada setiap tahap usia dan cara terbaik untuk mendukung perkembangan optimal bayi Anda.
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
      <section id="gizi" className="bg-baby-dark py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-baby-vlight">Asi Bayi</span></h2>
              <p className="text-lg text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                Menyusun rencana ASI yang efektif membantu memastikan bayi mendapatkan nutrisi optimal dan pengalaman menyusui yang nyaman. Temukan strategi dan tips untuk membuat proses menyusui lebih lancar dan menyenangkan.
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
      <section id="gizi-2" className="min-h-[70vh] items-center justify-center pt-36">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-baby-normal font-bold text-3xl md:text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              <span className="text-baby-dark">Informasi </span> Gizi Bayi
            </h1>
            <p className="md:text-base text-sm text-tertiary text-center max-w-[600px] mb-4" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Gizi yang tepat sangat penting untuk pertumbuhan dan perkembangan bayi. Informasi gizi bayi mencakup kebutuhan nutrisi esensial, termasuk protein, lemak, vitamin, dan mineral yang mendukung kesehatan optimal. Memahami kebutuhan gizi bayi membantu memastikan mereka mendapatkan nutrisi yang diperlukan untuk tumbuh sehat dan kuat.
            </p>
            {/* <ImageCarousel /> */}
            <div className="relative">
              <div className="absolute hidden md:block -left-14 top-1/2 -translate-y-1/2 transform z-10">
                <button className="custom-prev bg-none border border-baby-dark text-baby-dark transition hover:bg-baby-dark hover:text-white size-10 justify-center items-center rounded-full">&lt;</button>
              </div>
              <div className="absolute hidden md:block -right-14 transform z-10 top-1/2 -translate-y-1/2">
                <button className="custom-next bg-none border border-baby-dark text-baby-dark transition hover:bg-baby-dark hover:text-white size-10 flex justify-center items-center rounded-full">&gt;</button>
              </div>

              <Swiper className="max-w-screen-sm w-screen h-[300px]" effect={'coverflow'} spaceBetween={16} coverflowEffect={{
                slideShadows: false,
                rotate: 0,
                stretch: -20,
                depth: 100,
                modifier: 2.5,
              }} centeredSlides={false} slidesPerView={isMobile ? 1 : 3} modules={[EffectCoverflow, Navigation]} autoplay={{ delay: 2000 }} loop navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev'
              }}>
                <SwiperSlide>
                  <div className="bg-white shadow-lg border w-[300px] mx-auto h-28">
                    <img src="/assets/carousel/baby/piramis.jpg" alt="pyramid" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white shadow-lg border w-[300px] mx-auto h-28">
                    <img src="/assets/carousel/baby/piramis.jpg" alt="pyramid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white shadow-lg border w-[300px] mx-auto h-28">
                    <img src="/assets/carousel/baby/piramis.jpg" alt="pyramid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white shadow-lg border w-[300px] mx-auto h-28">
                    <img src="/assets/carousel/baby/piramis.jpg" alt="pyramid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white shadow-lg border w-[300px] mx-auto h-28">
                    <img src="/assets/carousel/baby/piramis.jpg" alt="pyramid" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
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
                data-aos-easing="ease-in-out" data-aos-duration="700">Usia <span className="text-baby-normal">Efektif Imunisasi</span> Bayi</h1>
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
                      <img src="/assets/carousel/baby/hepatis.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin Hepatitis B <span className="text-baby-light"></span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama segera setelah lahir, dosis kedua pada usia 1-2 bulan, dan dosis ketiga pada usia 6-18 bulan.
                      Permasalahan: Vaksin Hepatitis B melindungi bayi dari infeksi hepatitis B yang dapat menyebabkan kerusakan hati serius. Terkadang, dosis pertama mungkin tidak diberikan segera setelah lahir karena keterlambatan di fasilitas kesehatan atau masalah administratif, yang meningkatkan risiko penularan dari ibu yang terinfeksi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/bcg.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">VAKSIN BCG <span className="text-baby-light"> (Tuberkulosis)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Diberikan segera setelah lahir.
                      Permasalahan: BCG melindungi dari tuberkulosis (TB) yang dapat mempengaruhi paru-paru dan organ lain. Ada kemungkinan vaksin ini tidak diberikan tepat waktu di beberapa daerah dengan akses kesehatan terbatas atau kurangnya informasi kepada orang tua baru.

</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/polio.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">VAKSIN POLIO <span className="text-baby-light">(OPV/IPV)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 2 bulan, diikuti dosis kedua pada usia 4 bulan, dosis ketiga pada usia 6 bulan, dan dosis keempat pada usia 18 bulan.
                      Permasalahan : Vaksin polio penting untuk mencegah poliomielitis. Keterlambatan dalam jadwal vaksinasi atau ketidaklengkapan dosis dapat menyebabkan risiko infeksi polio, terutama di daerah dengan cakupan vaksinasi rendah.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/dtp.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">VAKSIN DTP <span className="text-baby-light">(Difteri, Tetanus, Pertusis)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 2 bulan, dosis kedua pada usia 4 bulan, dosis ketiga pada usia 6 bulan, dan dosis keempat pada usia 18 bulan.
                      Permasalahan: Kekurangan dosis DTP pada bayi dapat meningkatkan risiko terkena difteri, tetanus, dan pertusis. Beberapa orang tua mungkin kurang menyadari pentingnya dosis lanjutan, terutama dalam kasus kesehatan yang tidak optimal atau akses terbatas ke layanan kesehatan.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/hib.jpeg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">VAKSIN HIB <span className="text-baby-light">(Haemophilus influenzae tipe B)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 2 bulan, dosis kedua pada usia 4 bulan, dosis ketiga pada usia 6 bulan, dan dosis keempat pada usia 12-15 bulan.
                      Permasalahan: Vaksin Hib melindungi bayi dari infeksi bakteri yang dapat menyebabkan penyakit serius. Masalah akses atau keterlambatan dosis dapat meningkatkan risiko penyakit seperti meningitis.</p>
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
                {as.map(() => (
                  <SwiperSlide>
                    <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
                      <h1 className="font-semibold mb-2">Peluk dan Timang Bayi untuk Menumbuhkan Rasa Aman</h1>
                      <p className="text-tertiary">Sentuhan fisik, seperti memeluk dan menimang bayi, memberikan rasa aman dan kenyamanan. Ini juga membantu mengurangi stres pada bayi dan memperkuat ikatan antara bayi dan orang tua.</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div>
                <h1 className="text-baby-dark font-bold text-4xl mb-4" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">Panduan Perawatan <span className="text-baby-light">Jiwa Bayi</span></h1>
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">Merawat jiwa bayi adalah bagian penting dari perkembangan mereka yang sering kali terabaikan. Jiwa yang sehat membantu bayi tumbuh menjadi anak yang bahagia dan percaya diri. Berikut adalah beberapa tips untuk merawat jiwa bayi.</p>
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
              Panduan Lingkungan <span className="text-baby-light">Sehat untuk Bayi</span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              Menjaga lingkungan yang sehat dan aman adalah salah satu cara terbaik untuk melindungi bayi dari berbagai risiko yang dapat membahayakan kesehatannya. Berikut adalah beberapa hal yang harus dihindari untuk menciptakan lingkungan yang aman bagi bayi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Hindari Mainan Kecil yang Bisa Tertelan</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">Mainan dengan ukuran kecil atau bagian-bagian kecil yang dapat terlepas dapat tertelan oleh bayi dan menyebabkan tersedak. Pastikan mainan sesuai dengan usia bayi dan tidak memiliki bagian yang mudah lepas.</p>
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

export default Baby;