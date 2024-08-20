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

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

const slides = [
  { src: '/assets/carousel/baby/piramis.jpg', title: 'First Slide', description: 'Description for the first slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Second Slide', description: 'Description for the second slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Third Slide', description: 'Description for the third slide.' },
  { src: '/assets/carousel/baby/piramis.jpg', title: 'Fourth Slide', description: 'Description for the fourth slide.' },
];

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
            <div className="p-4 bg-adult-dark text-white/80 text-sm">
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

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: as.map(a => a + ' bulan'),
          datasets: [
            {
              label: "Tinggi",
              data: [53.8, 56.1, 56.2, 59.9, 62.2, 64, 65.7, 67.3, 68.8, 70, 71.6, 72.8],
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              backgroundColor: 'rgba(66, 90, 148, 0.25)',
              borderColor: '#004BFF'
            },
            {
              label: "Berat",
              data: [4.3, 5.3, 5.3, 6, 6.6, 6.9, 7.3, 7.9, 8.2, 8.5, 8.8, 9],
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              backgroundColor: 'rgba(255, 104, 44, 0.25)',
              borderColor: '#FF682C '
            },
          ],
        },
        options: {
          hover: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            tooltip: {
              enabled: true
            }
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
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in');
  }, []);

  return (
    <section ref={containerRef} className="pt-24">
      <Navbar buttonColor="bg-adult-dark">
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

                <h1 className="font-bold text-4xl text-adult-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Tantangan Kesehatan Dewasa di Indonesia!
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                 Di Indonesia, banyak orang dewasa menghadapi masalah kesehatan serius, termasuk diabetes dan hipertensi, yang diperburuk oleh gaya hidup tidak aktif dan pola makan tidak sehat. Akses terbatas ke layanan kesehatan juga menjadi masalah. Mengatasi tantangan ini memerlukan fokus pada pencegahan, pengelolaan penyakit, dan promosi gaya hidup sehat untuk meningkatkan kualitas hidup.
                </p>
                
                <HeroButton  to="#panduan" circle="bg-adult-normal" textColor="text-adult-normal" />

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
                  data-aos-easing="ease-in-out" data-aos-duration="1200"  />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md"data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/baby/DEWASA-1.png" alt="Happiness"  data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-adult-dark text-center">Bahagia</p>
              </div>

              {/* Animated Balls */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" size={100} color="#FF8E8E" />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" size={70} color="#FF8E8E" />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" size={110 } color="#FF8E8E" />
              <Ball classList="absolute -right-14 top-1/2"  color="#fff" />
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
              <span className="text-adult-dark">Panduan Kesehatan </span> Perkembangan Orang Dewasa</h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Jelajahi panduan menyeluruh kami untuk memahami berbagai aspek kesehatan dewasa. Dari manajemen stres dan pencegahan penyakit hingga tips untuk gaya hidup aktif dan sehat, temukan informasi berharga untuk meningkatkan kualitas hidup Anda. Dapatkan wawasan tentang cara menjaga kesehatan tubuh dan pikiran, serta strategi efektif untuk menghadapi tantangan kesehatan di usia dewasa.
            </p>
          </div>

          <canvas ref={canvasRef} className="max-w-full w-[750px] mx-auto"></canvas>

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
      <section id="gizi" className="bg-adult-dark py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
    data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-adult-light">Kesehatan Dewasa</span></h2>
<p className="text-lg text-white mb-8" data-aos="fade-up"
    data-aos-easing="ease-in-out" data-aos-duration="800">
    Menyusun rencana kesehatan yang efektif membantu memastikan kesejahteraan fisik dan mental dewasa secara optimal. Temukan strategi dan tips untuk menjaga gaya hidup sehat, mengelola stres, dan meningkatkan kualitas hidup Anda.
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
              <span className="text-adult-dark">Informasi </span> Gizi Orang Dewasa
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat sangat penting untuk menjaga kesehatan dan kesejahteraan orang dewasa. Ini mencakup kebutuhan gizi utama seperti protein untuk pemeliharaan otot, karbohidrat kompleks untuk energi berkelanjutan, lemak sehat untuk kesehatan jantung dan otak, serta vitamin dan mineral untuk fungsi tubuh yang optimal. Memahami dan memenuhi kebutuhan gizi ini membantu mendukung kesehatan jangka panjang dan gaya hidup aktif.
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
              <h1 className="text-5xl font-bold text-adult-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Usia <span className="text-adult-normal">Efektif Imunisasi</span> Dewasa</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi dewasa penting untuk menjaga kesehatan dan melindungi dari penyakit menular yang masih dapat mempengaruhi kehidupan sehari-hari. Vaksin flu tahunan, vaksin Tdap (difteri, tetanus, dan pertusis), serta vaksin herpes zoster dan pneumokokus, direkomendasikan untuk orang dewasa, terutama yang berusia di atas 50 tahun. Menjaga jadwal imunisasi ini membantu mengurangi risiko penyakit serius dan mendukung kesehatan jangka panjang.</p>
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
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Influenza <span className="text-adult-light"></span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis tahunan.
                      Permasalahan: Vaksin influenza tahunan penting untuk mencegah flu musiman. Banyak dewasa yang tidak mendapatkan vaksin tahunan secara konsisten, terutama pada musim flu, yang dapat menyebabkan peningkatan kasus flu dan komplikasi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-DT.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Tetanus-diphtheria <span className="text-adult-light">(Td)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Booster setiap 10 tahun.
                      Permasalahan: Keterlambatan dalam menerima booster Td setiap 10 tahun dapat menyebabkan penurunan kekebalan terhadap tetanus dan difteri, berpotensi meningkatkan risiko infeksi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-Pneumokokus.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Pneumokokus <span className="text-adult-light"></span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 65 tahun, atau lebih awal jika memiliki kondisi kesehatan tertentu.
                      Permasalahan: Vaksin pneumokokus melindungi dari infeksi paru-paru. Dewasa muda dengan risiko tinggi mungkin melewatkan vaksin ini, yang penting untuk mencegah pneumonia dan infeksi serius lainnya.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-HEPATITIS-B.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-adult-dark font-bold text-3xl mb-4">Vaksin Hepatitis B <span className="text-adult-light"></span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis lengkap jika belum pernah menerima sebelumnya atau pada risiko tinggi.
                      Permasalahan: Vaksin Hepatitis B melindungi dari infeksi virus hepatitis B. Dewasa yang belum mendapatkan vaksinasi lengkap atau yang berisiko tinggi mungkin terpapar infeksi hepatitis B.</p>
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
    <h1 className="font-semibold mb-2">Kelola Stres dengan Teknik Relaksasi</h1>
    <p className="text-tertiary">Menggunakan teknik relaksasi seperti meditasi, pernapasan dalam, atau yoga dapat membantu mengurangi tingkat stres dan meningkatkan kesejahteraan mental. Luangkan waktu setiap hari untuk melakukan aktivitas ini dan rasakan manfaatnya bagi kesehatan mental Anda.</p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
    <h1 className="font-semibold mb-2">Jaga Keseimbangan Kerja dan Kehidupan Pribadi</h1>
    <p className="text-tertiary">Menyeimbangkan antara pekerjaan dan kehidupan pribadi penting untuk menjaga kesehatan mental. Tetapkan batas waktu kerja dan luangkan waktu untuk aktivitas yang Anda nikmati di luar pekerjaan untuk mengurangi kelelahan dan stres.</p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
    <h1 className="font-semibold mb-2">Bangun Hubungan Sosial yang Positif</h1>
    <p className="text-tertiary">Memiliki hubungan sosial yang sehat dapat memberikan dukungan emosional dan meningkatkan rasa kebahagiaan. Berinvestasi dalam hubungan dengan keluarga dan teman, serta bergabung dalam komunitas sosial, dapat memperkuat kesejahteraan mental Anda.</p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
    <h1 className="font-semibold mb-2">Prioritaskan Waktu untuk Diri Sendiri</h1>
    <p className="text-tertiary">Melakukan aktivitas yang Anda nikmati dan memberi diri Anda waktu untuk istirahat adalah kunci untuk menjaga kesehatan mental. Jadwalkan waktu untuk hobi, bersantai, atau refleksi diri untuk mendukung keseimbangan emosional.</p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="bg-white p-4 border-r-8 shadow-md border-baby-normal">
    <h1 className="font-semibold mb-2">Praktikkan Keterampilan Mengelola Emosi</h1>
    <p className="text-tertiary">Mengelola emosi secara efektif adalah bagian penting dari kesehatan mental. Teknik seperti menulis jurnal, berbicara dengan seorang profesional, atau menerapkan teknik pengelolaan emosi dapat membantu Anda menangani perasaan dengan lebih baik.</p>
  </div>
</SwiperSlide>

                
              </Swiper>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div>
                <h1 className="text-adult-dark font-bold text-4xl mb-4" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">Panduan Menjaga <span className="text-adult-light">Jiwa Saat Dewasa</span></h1>
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">Merawat kesehatan jiwa dewasa penting untuk kesejahteraan yang seimbang. Mengelola stres melalui teknik relaksasi, menjaga keseimbangan antara pekerjaan dan kehidupan pribadi, serta membangun hubungan sosial yang positif adalah kunci. Luangkan waktu untuk aktivitas yang menyenangkan, dan jangan ragu untuk mencari dukungan profesional bila diperlukan. Langkah-langkah ini membantu menjaga kesehatan mental dan meningkatkan kualitas hidup.






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
              Panduan Lingkungan <span className="text-adult-light">Sehat untuk Orang </span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
             Menjaga lingkungan yang sehat dan aman sangat penting untuk mendukung kesejahteraan orang dewasa. Lingkungan yang bersih, teratur, dan bebas dari stres dapat meningkatkan kualitas hidup dan kesehatan secara keseluruhan. Temukan cara untuk menciptakan ruang yang mendukung kesehatan mental dan fisik Anda dengan menghindari faktor-faktor risiko seperti polusi, kekacauan, dan stres berlebihan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              
                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Ciptakan Ruang Kerja yang Ergonomis</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">Menyusun lingkungan kerja dengan prinsip ergonomi dapat mencegah masalah kesehatan seperti nyeri punggung dan gangguan postur. Pastikan kursi dan meja Anda berada pada ketinggian yang nyaman, dan gunakan peralatan yang mendukung postur tubuh yang baik. </p>
                </div>

                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Jaga Kebersihan dan Ventilasi Ruangan</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">MKebersihan ruangan dan ventilasi yang baik adalah kunci untuk menghindari masalah pernapasan dan meningkatkan kenyamanan. Rutin membersihkan debu dan memastikan adanya sirkulasi udara yang baik dapat mengurangi risiko alergi dan meningkatkan kualitas udara di sekitar Anda.</p>
                </div>

                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Kurangi Paparan Polusi dan Zat Berbahaya</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">Hindari paparan polusi udara dan bahan kimia berbahaya dengan memilih produk yang ramah lingkungan dan mengurangi penggunaan bahan kimia rumah tangga. Jika memungkinkan, gunakan filter udara dan pastikan lingkungan sekitar bebas dari asap rokok dan polusi.</p>
                </div>

                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Rencanakan Ruang Relaksasi yang Tenang</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">Menciptakan ruang khusus untuk relaksasi membantu mengurangi stres dan meningkatkan kesejahteraan mental. Tempatkan elemen-elemen yang menenangkan seperti tanaman hias, pencahayaan lembut, dan perabot yang nyaman untuk menciptakan suasana yang damai.</p>
                </div>

                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-baby-normal group-hover/item:text-white">Implementasikan Pola Hidup Sehat di Rumah</h5>
                  <p className="text-sm text-baby-light group-hover/item:text-white">Mengadopsi gaya hidup sehat di rumah termasuk menyusun menu makanan seimbang dan menjaga kebiasaan olahraga rutin. Pertimbangkan untuk membuat area khusus untuk aktivitas fisik dan memastikan Anda memiliki akses ke makanan bergizi yang mendukung kesehatan.</p>
                </div>

                <div
                  className="bg-baby-vlight/20 group/item hover:bg-baby-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                >
                  <h5 className="font-semibold mb-2 text-adult-normal group-hover/item:text-white">Prioritaskan Keamanan di Lingkungan Rumah</h5>
                  <p className="text-sm text-adult-light group-hover/item:text-white">Pastikan lingkungan rumah Anda aman dengan mengatasi potensi bahaya seperti permukaan licin, kabel yang berserakan, dan peralatan listrik yang rusak. Pemasangan alat pemadam kebakaran dan detektor asap juga penting untuk menjaga keselamatan di rumah.</p>
                </div>
            </div>
          </div>
        </div>
      </section>


      {/* panduan lingkungan end */}
      <Footer backgroundColor="#253B70" />
    </section>
  );
};

export default Adult;