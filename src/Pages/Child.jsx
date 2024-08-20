import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale } from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Footer from "../Components/Footer";
import ImageCarousel from "../Components/Corousel";
import { Anak } from "../Components/Models/Anak";
import accordionchild from "../docs/AccordionChild";
import { Bar } from "react-chartjs-2";
import HeroButton from "../Components/HeroButton";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

const slides = [
  { src: '/assets/carousel/child/1.jpg', title: 'First Slide', description: 'Description for the first slide.' },
  { src: '/assets/carousel/child/2.jpg', title: 'Second Slide', description: 'Description for the second slide.' },
  { src: '/assets/carousel/child/3.jpg', title: 'Third Slide', description: 'Description for the third slide.' },
  { src: '/assets/carousel/child/4.jpg', title: 'Fourth Slide', description: 'Description for the fourth slide.' },
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
            className="w-full px-4 py-5 text-left bg-child-normal hover:bg-child-normal/80 text-white rounded-xl focus:outline-none flex items-center justify-between"
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
            <div className="p-4 bg-child-normal/50 text-white/80 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const Child = () => {
  const isMobile = window.innerWidth <= 768;
  const containerRef = useRef(); // Ref for container element

  // const labels = ["1 bulan", "2 bulan", "3 bulan", "4 bulan", "5 bulan","6 bulan", "7 bulan"];
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
      <Navbar buttonColor="bg-child-dark">
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

                <h1 className="font-bold text-4xl text-child-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Gaya Hidup Anak Indonesia Terancam!
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Gaya hidup tidak sehat meningkatkan risiko obesitas dan penyakit jantung pada anak-anak. Perubahan pola makan, aktivitas fisik, dan edukasi kesehatan diperlukan untuk melindungi masa depan mereka.
                </p>

                <HeroButton to="#panduan" circle="bg-child-normal" textColor="text-child-normal" />

              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img
                src="/assets/child/wave.svg"
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
                <Anak />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700" >
                <img src="/icons/bahagia.png" alt="Health" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-white text-center">Bahagia</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">
                <img src="/icons/terampil.png" alt="Happiness" data-aos="zoom-in"
                  data-aos-easing="ease-in-out" data-aos-duration="1200" />
                <p className="font-bold text-xl text-child-dark text-center">Terampil</p>
              </div>

              {/* Animated Balls */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" size={100} color="#FF8E8E" />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" size={70} color="#FF8E8E" />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" size={110} color="#FF8E8E" />
              <Ball classList="absolute -right-14 top-1/2" color="#FFF" />
              <Ball classList="absolute right-1/3 top-10 -z-10" color="#B11414" size={70} />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* grafik perkembangan bayi start */}
      <section id="panduan" className="min-h-[70vh] py-28">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5">

            <h1 className="text-child-normal font-bold text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              <span className="text-child-dark">Pantau</span> <span className="underline-box after:bg-child-normal/20">Perkembangan Anak-Anak</span>
            </h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Telusuri panduan kami untuk memahami tahap perkembangan anak, dari pertumbuhan fisik hingga keterampilan motorik, sosial, dan bahasa. Temukan cara mendukung perkembangan optimal di setiap usia untuk masa depan sehat dan sukses.
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
                backgroundColor: 'rgb(177, 20, 20, 0.25)',
                borderColor: '#B11414'
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
          src="/background/awan-merah.png"
          alt="Red Clouds"
          className="absolute w-full bottom-0 z-10"
        />
      </section>
      {/* video bayi end */}

      {/* rencana asi bayi start */}
      <section id="gizi" className="bg-child-dark py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-child-vlight">Makanan Seimbang</span></h2>
              <p className="text-base text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
                Rencanakan makan seimbang untuk anak dengan menu bervariasi yang mencakup semua kelompok makanan. Temukan tips untuk pola makan sehat dan menyenangkan untuk keluarga.
              </p>
              {/* Accordion Section */}
              <div data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="900">
                <Accordion items={accordionchild} initialOpenIndex={0} />
              </div>
            </div>
            <div className="flex-shrink-0" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="900">
              <img src="/assets/Anak.png" alt="Mother and Child" className="w-96 h-auto" />
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
              className="text-child-normal font-bold text-3xl md:text-4xl text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <span className="text-child-dark">Informasi </span> <span className="underline-box after:bg-child-normal/20">Gizi Anak-Anak</span>
            </h1>
            <p
              className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              Nutrisi yang tepat mendukung pertumbuhan anak dengan memenuhi kebutuhan protein, karbohidrat, lemak sehat, vitamin, dan mineral. Memahami kebutuhan gizi memastikan perkembangan fisik dan mental yang optimal.
            </p>
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="py-20 bg-[url('/background/bg-imunisasi-merah.png')]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-child-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700"> <span className="text-child-normal"></span>Efektifitas Imunisasi</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi anak pada usia kunci melindungi dari penyakit serius. Vaksin DTP, Polio, dan Hib diberikan pada usia 18 bulan, diikuti MMR dan Hepatitis B pada usia 2-3 tahun. Vaksin varicella dan flu disarankan pada usia 4-6 tahun untuk perlindungan jangka panjang.</p>
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
                  <div className="w-full h-full min-h-[300px] bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/bcg.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-child-dark font-bold text-3xl mb-4">Vaksin Varicella <span className="text-child-normal">(Cacar Air)</span></h1>
                      <p className="text-tertiary text-sm">Dosis pertama pada usia 1-2 tahun, kedua pada 4-6 tahun. Melindungi dari cacar air; dosis kedua penting untuk menghindari infeksi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/polio.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-child-dark font-bold text-3xl mb-4">VAKSIN POLIO <span className="text-child-normal">(OPV/IPV)</span></h1>
                      <p className="text-tertiary text-sm">Dosis keempat pada usia 4-6 tahun. Penting untuk melindungi jangka panjang; dosis booster sering terlewat.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/dtp.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-child-dark font-bold text-3xl mb-4">VAKSIN DTP <span className="text-child-normal">(Difteri, Tetanus, Pertusis)</span></h1>
                      <p className="text-tertiary text-sm">Booster pertama pada usia 4-6 tahun, tambahan pada 11-12 tahun. Keterlambatan atau ketidaktahuan bisa meningkatkan risiko penyakit.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/hib.jpeg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-child-dark font-bold text-3xl mb-4">Vaksin HPV <span className="text-child-normal">(Human Papillomavirus)</span></h1>
                      <p className="text-tertiary text-sm">Dosis pertama pada usia 11-12 tahun, dosis kedua 1-2 bulan setelah, dan ketiga 6 bulan setelah dosis pertama. Melindungi dari kanker terkait HPV; dosis lanjutan harus diikuti.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/mmr.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-child-dark font-bold text-3xl mb-4">VAKSIN MMR <span className="text-child-normal"> (Campak, Gondongan, Rubella)</span></h1>
                      <p className="text-tertiary text-sm">Dosis kedua pada usia 4-6 tahun. Penting untuk melindungi dari campak, gondongan, dan rubella; dosis kedua sering terlewatkan.</p>
                    </div>
                  </div>
                </SwiperSlide>



              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="perawatan" className="md:bg-[url('/background/wave-merah.png')] bg-cover md:h-[150vh]">
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
                  <div className="bg-white p-4 border-r-8 shadow-md border-child-normal">
                    <h1 className="font-semibold mb-2">Kepercayaan Diri melalui Dukungan Positif</h1>
                    <p className="text-tertiary">Berikan pujian untuk setiap pencapaian anak dan dorong mereka untuk mencoba hal baru, bukan hanya fokus pada hasil.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-child-normal">
                    <h1 className="font-semibold mb-2">Keterampilan Sosial melalui Interaksi</h1>
                    <p className="text-tertiary">Ajak anak bermain dan berinteraksi dengan teman serta keluarga untuk mengembangkan pemahaman dan empati.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-child-normal">
                    <h1 className="font-semibold mb-2">Disiplin dengan Kasih Sayang</h1>
                    <p className="text-tertiary">Terapkan disiplin secara konsisten dan penuh kasih, jelaskan aturan untuk membantu anak memahami tanggung jawab.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-child-normal">
                    <h1 className="font-semibold mb-2">Mengatasi Stres dengan Relaksasi</h1>
                    <p className="text-tertiary">Ajarkan teknik relaksasi seperti pernapasan dalam dan kegiatan kreatif untuk membantu anak mengelola stres.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-4 border-r-8 shadow-md border-child-normal">
                    <h1 className="font-semibold mb-2">Ekspresi Emosional yang Sehat</h1>
                    <p className="text-tertiary">Ajak anak berbicara tentang perasaan mereka dan bantu mereka menemukan cara yang sehat untuk mengatasi emosi.</p>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
            <div className="pt-20 w-full md:w-1/2 flex items-center">
              <div>
                <h1 className="text-child-dark font-bold text-4xl mb-4" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">Membangun Dasar Kekuatan Mental <span className="text-child-normal underline-box after:bg-child-normal/20">Pada Jiwa Anak</span></h1>
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">Kesehatan mental anak vital untuk perkembangan emosional yang seimbang. Dukungan positif dan lingkungan yang baik membantu anak tumbuh percaya diri dan bahagia. Berikut cara efektif mendukungnya.</p>
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
            <h1 className="text-2xl md:text-4xl font-bold text-child-dark text-center mb-4" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="700">
              Ciptakan Lingkungan Ideal <span className="text-child-normal underline-box after:bg-child-normal/20">Untuk Anak-anak</span>
            </h1>
            <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">
              Ciptakan lingkungan bersih, aman, dan mendukung untuk perkembangan optimal anak. Hindari bahaya dan terapkan praktik terbaik untuk kesehatan mereka. Temukan panduan praktis untuk lingkungan yang sehat dan aman.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
              data-aos-easing="ease-in-out" data-aos-duration="800">

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Keamanan Utama: Ruang Bebas Bahaya</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Pastikan ruang aman dari risiko cedera dan simpan alat berbahaya di tempat tak terjangkau.</p>
              </div>

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Kebersihan: Lingkungan Sehat</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Rutin bersihkan area bermain dan tidur. Gunakan pembersih aman dan pastikan ventilasi baik.</p>
              </div>

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Stimulasi Positif: Mainan Aman</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Gunakan mainan sesuai usia tanpa bagian kecil yang dapat terlepas. Pilih yang mendukung pertumbuhan.</p>
              </div>

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Rutin dan Struktur: Rutinitas Harian</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Tetapkan rutinitas harian yang konsisten untuk rasa aman dan teratur pada anak.</p>
              </div>

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Zona Tenang: Area Relaksasi</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Sediakan area tenang untuk aktivitas menenangkan seperti membaca dan menggambar.</p>
              </div>

              <div className="bg-child-light/20 group/item hover:bg-child-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105">
                <h5 className="text-base md:text-xl font-semibold mb-2 text-child-normal group-hover/item:text-white">Dukungan Sosial: Interaksi Positif</h5>
                <p className="text-sm text-child-light group-hover/item:text-white">Fasilitasi interaksi sosial anak dengan teman dan keluarga untuk mendukung keterampilan sosial.</p>
              </div>




            </div>
          </div>
        </div>
      </section>


      {/* panduan lingkungan end */}
      <Footer backgroundColor="#253B70">
        <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'kemkes.go.id'} />
        <Footer.Source link={'http://halodoc.com/'} title={'halodoc.com'} />
        <Footer.Source link={'http://nursing.ui.ac.id'} title={'nursing.ui.ac.id'} />
        <Footer.Source link={'http://nutriclub.co.id'} title={'nutriclub.co.id'} />
        <Footer.Source link={'http://bunda.co.id'} title={'bunda.co.id'} />
        <Footer.Source link={'http://emc.id'} title={'emc.id'} />
      </Footer>
    </section>

  );
};

export default Child;
