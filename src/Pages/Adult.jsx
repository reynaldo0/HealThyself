import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import accordionadult from "../docs/AccordionAdult";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale } from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Footer from "../Components/Footer";
import { Dewasa } from "../Components/Models/Dewasa";
import ImageCarousel from "../Components/Corousel";
import HeroButton from "../Components/HeroButton";
import ToUp from "../Components/ToUp";
import { Bar } from "react-chartjs-2";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

const slides = [
  { src: '/assets/carousel/adult/1.jpg', title: 'First Slide', description: 'Description for the first slide.' },
  { src: '/assets/carousel/adult/2.jpg', title: 'Second Slide', description: 'Description for the second slide.' },
  { src: '/assets/carousel/adult/3.jpg', title: 'Third Slide', description: 'Description for the third slide.' },
  { src: '/assets/carousel/adult/4.jpg', title: 'Fourth Slide', description: 'Description for the fourth slide.' },
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
            className="w-full px-4 py-5 text-left bg-adult-normal hover:bg-adult-vsoft text-white rounded-xl focus:outline-none flex items-center justify-between"
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
            <div className="p-4 bg-adult-dark/50 text-white/80 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const Adult = () => {
  const canvasRef = useRef();
  const chartRef = useRef();
  const isMobile = window.innerWidth <= 768;
  const containerRef = useRef();

  const as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const chartData = [
    { tinggi: 160, berat: 55 },
    { tinggi: 170, berat: 60 },
    { tinggi: 175, berat: 65 },
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
      <ToUp color={'bg-adult-light'} />

      <Navbar buttonColor="bg-adult-dark">
        <Navbar.Item to={'#'} title={'Beranda'} />
        <Navbar.Item to={'#panduan'} title={'Panduan'} />
        <Navbar.Item to={'#gizi'} title={'Gizi'} />
        <Navbar.Item to={'#imunisasi'} title={'Vaksin'} />
        <Navbar.Item to={'#perawatan'} title={'Perawatan'} />
        <Navbar.Item to={'#lingkungan'} title={'Lingkungan'} />
      </Navbar>

      {/* hero section start */}
      <section id="Home" className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden page-container">
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">

                <h1 className="font-bold text-4xl text-adult-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Sulitnya Sehat Saat Tumbuh Dewasa
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Di Indonesia, masalah kesehatan serius seperti diabetes (8%) dan hipertensi (30%) diperburuk oleh gaya hidup tidak aktif dan pola makan buruk. Akses terbatas ke layanan kesehatan juga memperburuk kondisi. Fokus pada pencegahan dan promosi gaya hidup sehat sangat penting untuk meningkatkan kualitas hidup.
                </p>

                <HeroButton to="#panduan" circle="bg-adult-normal" textColor="text-adult-normal" />

              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/adult/wave.svg"
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
                <Dewasa />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/baby/DEWASA-2.png" alt="Health" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/baby/DEWASA-1.png" alt="Happiness" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-adult-dark text-center">Bahagia</p>
              </div>

              {/* Animated Balls */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" size={100} color="#FF8E8E" />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" size={70} color="#FF8E8E" />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" size={110} color="#FF8E8E" />
              <Ball classList="absolute -right-14 top-1/2" color="#fff" />
              <Ball classList="absolute right-1/3 top-10 -z-10" color="#DF4B10" size={70} />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* grafik perkembangan bayi start */}
      <section id="panduan" className="min-h-[70vh] py-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">

            <h1 className="text-adult-normal font-bold text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              <span className="text-adult-dark">Pantau </span> <span className="underline-box after:bg-adult-normal/20">Perkembangan Orang Dewasa</span></h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Jelajahi panduan kami untuk memahami kesehatan dewasa, termasuk manajemen stres, pencegahan penyakit, dan tips untuk gaya hidup sehat. Temukan cara menjaga kesehatan tubuh dan pikiran serta strategi menghadapi tantangan kesehatan dewasa.
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
                backgroundColor: 'rgb(243, 105, 50, 0.25)',
                borderColor: '#F36932'
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
        <CustomVideo src={"/background/dewasa.mp4"} />
        <img
          src="/background/awan-orange.png"
          alt="Blue Clouds"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="gizi" className="bg-adult-bg py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-white">Makan Seimbang </span></h2>
              <p className="text-lg text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                Menyusun rencana kesehatan yang efektif memastikan kesejahteraan fisik dan mental optimal. Temukan strategi untuk gaya hidup sehat, pengelolaan stres, dan peningkatan kualitas hidup.
              </p>
              {/* Accordion Section */}
              <div data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="900">
                <Accordion items={accordionadult} initialOpenIndex={0} />
              </div>
            </div>
            <div className="flex-shrink-0" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="900">
              <img src="/assets/Dewasa.png" alt="Mother and Child" className="w-96 h-auto" />
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
              className="text-adult-normal font-bold text-3xl md:text-4xl text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <span className="text-adult-dark">Informasi </span> <span className="underline-box after:bg-adult-normal/20">Gizi Orang Dewasa</span>
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat penting untuk kesehatan dewasa. Protein mendukung pemeliharaan otot, karbohidrat kompleks memberikan energi berkelanjutan, lemak sehat mendukung kesehatan jantung dan otak, serta vitamin dan mineral penting untuk fungsi tubuh yang optimal. Memenuhi kebutuhan gizi ini membantu menjaga kesehatan dan gaya hidup aktif.
            </p>
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="py-20 bg-[url('/background/bg-imunisasi-orange.png')]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-adult-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Usia <span className="text-adult-normal">Efektif Imunisasi</span> Dewasa</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi dewasa penting untuk mencegah penyakit menular. Vaksin flu, Tdap, herpes zoster, dan pneumokokus direkomendasikan, terutama untuk usia di atas 50 tahun, guna mendukung kesehatan jangka panjang.</p>
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
                      <img src="/assets/carousel/baby/Vaksin-Influenza.jpg" alt="Vaksin Influenza" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Influenza</h1>
                      <p className="text-tertiary text-sm">Jadwal: Tahunan. Vaksin ini mencegah flu musiman. Banyak dewasa melewatkannya, meningkatkan risiko flu dan komplikasi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-DT.jpg" alt="Vaksin Tetanus-diphtheria" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Tetanus-diphtheria (Td)</h1>
                      <p className="text-tertiary text-sm">Jadwal: Booster setiap 10 tahun. Keterlambatan booster dapat menurunkan kekebalan, meningkatkan risiko infeksi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-Pneumokokus.jpg" alt="Vaksin Pneumokokus" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Pneumokokus</h1>
                      <p className="text-tertiary text-sm">Jadwal: Usia 65 tahun atau lebih awal jika berisiko. Vaksin ini mencegah pneumonia dan infeksi paru-paru.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-HEPATITIS-B.jpg" alt="Vaksin Hepatitis B" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Hepatitis B</h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis lengkap jika belum pernah atau berisiko tinggi. Melindungi dari infeksi hepatitis B.</p>
                    </div>
                  </div>
                </SwiperSlide>


              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="perawatan" className="md:bg-[url('/background/wave-orange.png')] bg-cover md:h-[150vh]">
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
                  <div className="bg-white p-4 border-r-8 shadow-md border-adult-normal">
                    <h1 className="font-semibold mb-2">Teknik Relaksasi</h1>
                    <p className="text-tertiary">Meditasi, pernapasan dalam, atau yoga dapat mengurangi stres dan meningkatkan kesejahteraan mental. Luangkan waktu setiap hari untuk teknik ini.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-adult-normal">
                    <h1 className="font-semibold mb-2">Keseimbangan Kerja dan Kehidupan</h1>
                    <p className="text-tertiary">Tetapkan batas waktu kerja dan luangkan waktu untuk aktivitas pribadi untuk mengurangi stres dan kelelahan.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-adult-normal">
                    <h1 className="font-semibold mb-2">Hubungan Sosial Positif</h1>
                    <p className="text-tertiary">Hubungan yang sehat dengan keluarga dan teman meningkatkan dukungan emosional dan kebahagiaan. Investasikan waktu dalam hubungan sosial.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-adult-normal">
                    <h1 className="font-semibold mb-2">Waktu untuk Diri Sendiri</h1>
                    <p className="text-tertiary">Jadwalkan waktu untuk hobi dan istirahat untuk menjaga keseimbangan emosional dan kesehatan mental.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-adult-normal">
                    <h1 className="font-semibold mb-2">Mengelola Emosi</h1>
                    <p className="text-tertiary">Gunakan teknik seperti menulis jurnal atau berbicara dengan profesional untuk mengelola emosi secara efektif.</p>
                  </div>
                </SwiperSlide>


              </Swiper>
            </div>

            <div className="w-full md:w-1/2 flex items-center mt-20">
              <div>
                <h1 className="text-adult-dark font-bold text-4xl mb-4" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">Panduan Menjaga <span className="text-adult-normal">Jiwa Saat Dewasa</span></h1>
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">Merawat kesehatan jiwa dewasa melibatkan pengelolaan stres, keseimbangan kerja-hidup, dan hubungan sosial positif. Luangkan waktu untuk aktivitas menyenangkan dan cari dukungan profesional jika perlu. Ini semua penting untuk kesehatan mental dan kualitas hidup yang lebih baik.
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
            <h1 className="text-4xl font-bold text-adult-dark text-center mb-4" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              Panduan Lingkungan <span className="text-adult-normal underline-box after:bg-adult-normal/20">Sehat untuk Orang </span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              Menjaga lingkungan yang sehat dan aman sangat penting untuk mendukung kesejahteraan orang dewasa. Lingkungan yang bersih, teratur, dan bebas dari stres dapat meningkatkan kualitas hidup dan kesehatan secara keseluruhan. Temukan cara untuk menciptakan ruang yang mendukung kesehatan mental dan fisik Anda dengan menghindari faktor-faktor risiko seperti polusi, kekacauan, dan stres berlebihan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">

              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Ciptakan Ruang Kerja Ergonomis</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Atur kursi dan meja agar nyaman untuk mencegah masalah postur dan nyeri punggung.</p>
              </div>

              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Jaga Kebersihan dan Ventilasi</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Bersihkan debu dan pastikan ventilasi baik untuk mencegah masalah pernapasan dan meningkatkan kenyamanan.</p>
              </div>

              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Kurangi Paparan Polusi</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Hindari polusi dan bahan kimia berbahaya dengan memilih produk ramah lingkungan dan menggunakan filter udara.</p>
              </div>

              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Rencanakan Ruang Relaksasi</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Ciptakan area tenang dengan tanaman, pencahayaan lembut, dan perabot nyaman untuk mengurangi stres.</p>
              </div>


              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Implementasikan Pola Hidup Sehat</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Adopsi gaya hidup sehat dengan menu seimbang, olahraga rutin, dan area untuk aktivitas fisik di rumah.</p>
              </div>

              <div className="bg-adult-normal/20 group/item hover:bg-adult-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Prioritaskan Keamanan Rumah</h5>
                <p className="text-sm text-adult-normal group-hover/item:text-white">Jaga keamanan rumah dengan mengatasi bahaya seperti permukaan licin, kabel berserakan, dan peralatan rusak. Pasang alat pemadam kebakaran dan detektor asap.</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* panduan lingkungan end */}
      <Footer backgroundColor="#253B70">
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'kemkes.go.id'} />
        <Footer.Source link={'http://halodoc.com/'} title={'halodoc.com'} />
        <Footer.Source link={'http://who.int'} title={'who.int'} />
        <Footer.Source link={'http://dinkes.kalbarprov.go.id'} title={'dinkes.kalbar'} />
        <Footer.Source link={'http://telemed.ihc.id'} title={'telemed.ihc.id'} />
        <Footer.Source link={'http://biofarma.co.id'} title={'biofarma.co.id'} />
      </Footer>
    </section>
  );
};

export default Adult;