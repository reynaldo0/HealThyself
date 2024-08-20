import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import { Teen as Remaja } from '../Components/Models/Teen'
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import accordionteen from "../docs/AccordionTeen";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale } from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Footer from "../Components/Footer";
import HeroButton from "../Components/HeroButton";
import ImageCarousel from "../Components/Corousel";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

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
            className="w-full px-4 py-5 text-left bg-teen-dark hover:bg-teen-dark/80 text-white rounded-xl focus:outline-none flex items-center justify-between"
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
            <div className="p-4 bg-teen-dark/50 text-white/80 text-sm">
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

const Teen = () => {
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
      <Navbar buttonColor="bg-teen-dark">
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

                <h1 className="font-bold text-4xl text-teen-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Krisis Kesehatan Remaja Di Indonesia
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Di Indonesia, 25% remaja obesitas, 15% mengalami depresi, dan 20% kecemasan. Hanya 30% mendapatkan dukungan mental yang cukup. Diperlukan edukasi kesehatan, promosi gaya hidup sehat, dan dukungan psikologis.
                </p>
                <HeroButton circle="bg-teen-normal" textColor="text-teen-normal" />

              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/teen/wave.svg"
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
                <Remaja />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/headset.png" alt="Health" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-white text-center">Bahagia</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/baby/kura-kura.png" alt="Happiness" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-baby-dark text-center">Bahagia</p>
              </div>

              {/* Animated Balls */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" color="#29D3A3" size={100} />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" color="#29D3A3" size={70} />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" color="#29D3A3" size={110} />
              <Ball classList="absolute -right-14 top-1/2" color="#ffff" />
              <Ball classList="absolute right-1/3 top-10 -z-10" color="#1B856D" size={70} />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* grafik perkembangan bayi start */}
      <section id="panduan" className="min-h-[70vh] py-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">

            <h1 className="text-teen-normal font-bold text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              <span className="text-teen-dark">Pantau</span> <span className="underline-box after:bg-teen-normal/20">Perkembangan Remaja</span>
            </h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Perkembangan remaja melibatkan perubahan fisik, emosional, dan sosial yang penting, dan dukungan yang tepat membantu mereka tumbuh sehat dan percaya diri.
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
          src="/background/awan-hijau.png"
          alt="Blue Clouds"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="gizi" className="bg-teen-light py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-white">Makan Remaja Sehat</span></h2>
              <p className="text-base text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                Pola makan seimbang untuk remaja penting untuk mendukung pertumbuhan dan kesehatan jangka panjang, dengan fokus pada protein, kalsium, dan zat besi.
              </p>
              {/* Accordion Section */}
              <div data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="900">
                <Accordion items={accordionteen} initialOpenIndex={0} />
              </div>
            </div>
            <div className="flex-shrink-0" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="900">
              <img src="/assets/Remaja.png" alt="Mother and Child" className="w-96 h-auto" />
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
              className="text-teen-normal font-bold text-3xl md:text-4xl text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <span className="text-teen-dark">Informasi </span> <span className="underline-box after:bg-teen-normal/20">Gizi Remaja</span>
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat mendukung pertumbuhan anak, meliputi protein, karbohidrat, lemak sehat, vitamin, dan mineral. Memahami kebutuhan gizi anak memastikan makanan seimbang untuk perkembangan fisik dan mental yang optimal.
            </p>
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="py-20 bg-[url('/background/bg-imunisasi-hijau.png')]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-teen-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700"> <span className="text-teen-normal"></span> Efektifitas Imunisasi</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi remaja, seperti HPV, DTP, dan MMR, penting untuk melindungi dari penyakit menular. Vaksin-vaksin ini diberikan pada usia 11-12 tahun untuk menjaga kesehatan remaja saat memasuki masa dewasa.</p>
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
                      <img src="/assets/carousel/baby/Vaksin-Meningokokus.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-teen-dark font-bold text-3xl mb-4">Vaksin Meningokokus</h1>
                      <p className="text-tertiary text-sm">Dosis pertama pada usia 11-12 tahun dan dosis kedua pada usia 16 tahun. Mencegah infeksi meningitis fatal. Dosis kedua sering terlewat.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-Tetanus-diphtheria-pertussis.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-teen-dark font-bold text-3xl mb-4">Vaksin Tdap</h1>
                      <p className="text-tertiary text-sm">Booster pada usia 11-12 tahun. Melindungi dari difteri, tetanus, dan pertusis. Keterlambatan dapat meningkatkan risiko infeksi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-HPV.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-teen-dark font-bold text-3xl mb-4">Vaksin HPV</h1>
                      <p className="text-tertiary text-sm">Dosis pertama pada usia 11-12 tahun, dosis kedua 1-2 bulan setelah, dan dosis ketiga 6 bulan setelah dosis pertama. Keterlambatan mengurangi efektivitas.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/Vaksin-Varicella-CACAR.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-teen-dark font-bold text-3xl mb-4">Vaksin Varicella</h1>
                      <p className="text-tertiary text-sm">Dosis pertama pada usia 13-18 tahun, dengan dosis kedua 4-8 minggu kemudian jika belum lengkap sebelumnya. Mencegah cacar air di usia dewasa muda.</p>
                    </div>
                  </div>
                </SwiperSlide>



              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="perawatan" className="md:bg-[url('/background/wave-hijau.png')] bg-cover md:h-[150vh]">
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
                  <div className="bg-white p-4 border-r-8 shadow-md border-teen-normal">
                    <h1 className="font-semibold mb-2">Komunikasi Terbuka untuk Kesehatan Mental</h1>
                    <p className="text-tertiary">Berbicara terbuka dengan remaja tentang perasaan mereka membantu mengurangi stres dan meningkatkan kesejahteraan.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-teen-normal">
                    <h1 className="font-semibold mb-2">Aktivitas Fisik dan Kesehatan Remaja</h1>
                    <p className="text-tertiary">Aktivitas fisik rutin bermanfaat untuk tubuh dan mental. Ajak remaja berolahraga atau aktivitas fisik yang mereka suka.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-teen-normal">
                    <h1 className="font-semibold mb-2">Kelola Stres dengan Relaksasi</h1>
                    <p className="text-tertiary">Meditasi dan latihan pernapasan membantu mengelola stres. Ajarkan teknik-teknik ini sebagai rutinitas harian.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-teen-normal">
                    <h1 className="font-semibold mb-2">Keseimbangan Akademis dan Sosial</h1>
                    <p className="text-tertiary">Bantu remaja menyeimbangkan waktu antara akademis dan sosial untuk mengurangi tekanan dan meningkatkan kesejahteraan.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-teen-normal">
                    <h1 className="font-semibold mb-2">Keterampilan Coping untuk Remaja</h1>
                    <p className="text-tertiary">Ajarkan keterampilan coping seperti memecahkan masalah dan mengatur waktu untuk membantu remaja menghadapi stres.</p>
                  </div>
                </SwiperSlide>


              </Swiper>
            </div>
            <div className="w-full md:w-1/2 flex items-center mt-20">
              <div>
                <h1 className="text-teen-normal font-bold text-4xl mb-4" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">Panduan Perawatan <span className="text-teen-dark">Kesehatan Remaja</span></h1>
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">Perawatan kesehatan mental remaja adalah aspek penting dalam mendukung mereka selama masa-masa penuh perubahan ini. Dengan memberikan dukungan yang tepat dan mengajarkan keterampilan hidup yang sehat, Anda dapat membantu remaja tumbuh menjadi individu yang seimbang dan percaya diri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* panduan lingkungan start */}
      <section id="lingkungan">
        <div className="w-full bg-white rounded-t-[150px] md:-mt-28 py-20">
          <div className="container">
            <h1 className="text-2xl md:text-4xl font-bold text-teen-dark text-center mb-4" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              Remaja Juga Butuh <span className="text-teen-light underline-box after:bg-teen-normal/20">Lingkungan Sehat & Aman </span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              Lingkungan yang aman dan positif sangat penting untuk kesejahteraan remaja. Pastikan lingkungan melindungi kesehatan mereka dan mendukung perkembangan emosional serta sosial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Ruang Belajar Nyaman</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Ciptakan area belajar yang tenang dan nyaman untuk meningkatkan konsentrasi.</p>
              </div>

              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Aktivitas Fisik Rutin</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Dorong remaja berolahraga secara teratur untuk kesehatan tubuh dan mental.</p>
              </div>

              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Dukungan Kesehatan Mental</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Berikan dukungan emosional dan akses ke konseling jika diperlukan.</p>
              </div>

              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Pola Makan Sehat</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Sediakan makanan bergizi dan teratur untuk mendukung kesehatan.</p>
              </div>

              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Atur Waktu Layar</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Batasi waktu layar untuk mencegah gangguan tidur dan dorong aktivitas luar ruangan.</p>
              </div>

              <div className="bg-teen-light/10 group/item hover:bg-teen-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="font-semibold mb-2 text-teen-normal group-hover/item:text-white">Lingkungan Sosial Positif</h5>
                <p className="text-sm text-teen-light group-hover/item:text-white">Ajak remaja bergaul dengan teman yang mendukung untuk meningkatkan kesejahteraan.</p>
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
        <Footer.Source link={'http://rscarolus.or.id'} title={'rscarolus.or.id'} />
        <Footer.Source link={'http://klikdokter.com'} title={'klikdokter.com'} />
        <Footer.Source link={'http://rsprespira.jogjaprov.go.id'} title={'rsprespira.jogja'} />
      </Footer>
    </section>
  );
};

export default Teen;
