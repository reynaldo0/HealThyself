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

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

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

const Child = () => {
  const canvasRef = useRef();
  const chartRef = useRef();
  const isMobile = window.innerWidth <= 768;
  const containerRef = useRef(); // Ref for container element

  // const labels = ["1 bulan", "2 bulan", "3 bulan", "4 bulan", "5 bulan","6 bulan", "7 bulan"];
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

                <h1 className="font-bold text-4xl text-child-dark" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="700">
                  Gaya Hidup Tidak Sehat Pada Anak Ancaman Bagi Generasi Mendatang
                </h1>

                <p className="text-lg text-tertiary" data-aos="fade-up"
                  data-aos-easing="ease-in-out" data-aos-duration="800">
                  Di Indonesia, gaya hidup tidak sehat menjadi salah satu faktor utama yang menghambat pertumbuhan dan perkembangan anak-anak. Kurangnya aktivitas fisik, konsumsi makanan tinggi gula dan lemak, serta rendahnya kesadaran akan pentingnya pola hidup sehat, telah menyebabkan peningkatan obesitas dan risiko penyakit kronis pada usia dini. Perbaikan pola makan, peningkatan aktivitas fisik, dan edukasi kesehatan sangat penting untuk memastikan generasi mendatang tumbuh menjadi individu yang sehat dan produktif.
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
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4">
                <img src="/icons/baby/susu.png" alt="Health" />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md">
                <img src="/icons/baby/kura-kura.png" alt="Happiness" />
                <p className="font-bold text-xl text-child-dark text-center">Bahagia</p>
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
              <span className="text-child-dark">Panduan</span> Perkembangan Anak
            </h1>
            <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
             Telusuri panduan lengkap kami untuk memahami berbagai tahap perkembangan anak. Dari pertumbuhan fisik hingga perkembangan keterampilan motorik, sosial, dan bahasa, temukan informasi penting untuk mendukung anak Anda di setiap fase. Dapatkan wawasan mengenai apa yang diharapkan pada setiap usia, serta cara-cara terbaik untuk mendukung perkembangan optimal anak Anda menuju masa depan yang sehat dan sukses.
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
      <section id="gizi" className="bg-baby-dark py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Rencana <span className="text-baby-vlight">Makanan Seimbang</span></h2>
              <p className="text-lg text-white mb-8" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">
               Menyusun rencana makan seimbang sangat penting untuk memastikan anak mendapatkan nutrisi yang diperlukan untuk tumbuh kembang optimal. Temukan strategi dan tips untuk merancang menu yang bervariasi, mencakup semua kelompok makanan, dan mendukung kesehatan jangka panjang anak Anda. Dengan pendekatan yang tepat, Anda dapat mempromosikan pola makan yang sehat dan menyenangkan untuk seluruh keluarga.
              </p>
              {/* Accordion Section */}
              <div data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="900">
                <Accordion items={accordionchild} initialOpenIndex={0} />
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
            <h1 className="text-baby-normal font-bold text-3xl md:text-4xl text-center" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              <span className="text-baby-dark">Informasi </span> Gizi Anak
            </h1>
            <p className="md:text-base text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
              data-aos-easing="ease-in-out">
              Nutrisi yang tepat sangat penting untuk mendukung pertumbuhan dan perkembangan anak. Informasi gizi anak mencakup kebutuhan nutrisi utama, termasuk protein, karbohidrat, lemak sehat, vitamin, dan mineral yang mendukung kesehatan dan energi mereka. Memahami kebutuhan gizi anak membantu memastikan mereka mendapatkan makanan yang seimbang untuk mendukung perkembangan fisik dan mental yang optimal.
            </p>
            <ImageCarousel />
          </div>
        </div>
      </section>
      {/* rencana gizi bayi end */}

      {/* jenis vaksinasi start */}
      <section id="imunisasi" className="pt-20 bg-[url('/background/bg-imunisasi.png')] min-h-screen">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <h1 className="text-5xl font-bold text-baby-dark" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="700">Usia <span className="text-baby-normal">Efektif Imunisasi</span> Anak</h1>
              <p className="text-[#575757]" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi anak dilakukan pada usia-usia kunci untuk melindungi dari penyakit serius dan infeksi. Vaksin DTP, Polio, dan Hib biasanya diberikan pada usia 18 bulan, diikuti dengan vaksin MMR dan Hepatitis B pada usia 2-3 tahun. Vaksin lanjutan seperti varicella dan flu juga dianjurkan pada usia 4-6 tahun. Jadwal ini membantu memastikan anak terlindungi dari berbagai penyakit menular dan mendukung kesehatan jangka panjang mereka.</p>
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
                      <img src="/assets/carousel/baby/bcg.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin Varicella <span className="text-baby-light">(Cacar Air)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 1-2 tahun, dan dosis kedua pada usia 4-6 tahun.
                      Permasalahan: Vaksin varicella melindungi anak dari cacar air, yang dapat menyebabkan komplikasi serius. Keterlambatan atau ketidakteraturan dalam menerima dosis kedua pada usia 4-6 tahun dapat meningkatkan risiko infeksi cacar air. Orang tua mungkin kurang menyadari pentingnya dosis kedua atau mengalami kesulitan akses ke fasilitas kesehatan.</p>
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
                      <p className="text-tertiary text-sm">Jadwal: Dosis keempat diberikan pada usia 4-6 tahun.
                      Permasalahan : Meskipun vaksin polio umumnya diberikan pada usia awal, beberapa anak mungkin melewatkan dosis booster pada usia 4-6 tahun, yang diperlukan untuk memastikan perlindungan jangka panjang. Kendala akses dan ketidakpahaman mengenai pentingnya dosis tambahan dapat menyebabkan peningkatan risiko infeksi polio.</p>
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
                      <p className="text-tertiary text-sm">Jadwal: Booster pertama pada usia 4-6 tahun, dan booster tambahan pada usia 11-12 tahun.
                      Permasalahan: Anak-anak sering kali melewatkan booster vaksin DTP yang diperlukan untuk memastikan perlindungan berkelanjutan dari difteri, tetanus, dan pertusis. Keterlambatan dalam mendapatkan booster dapat meningkatkan risiko penyakit, terutama jika orang tua tidak mengikuti jadwal imunisasi secara ketat atau jika ada kekurangan informasi mengenai vaksinasi.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/hib.jpeg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">Vaksin HPV <span className="text-baby-light">(Human Papillomavirus)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 11-12 tahun, dengan dosis kedua 1-2 bulan setelah dosis pertama, dan dosis ketiga 6 bulan setelah dosis pertama.
                      Permasalahan: Vaksin HPV melindungi dari infeksi virus HPV yang dapat menyebabkan kanker serviks dan jenis kanker lainnya. Beberapa anak mungkin tidak menerima dosis pertama pada usia 11-12 tahun atau melupakan jadwal dosis lanjutan, yang mengurangi efektivitas vaksin dalam mencegah kanker di kemudian hari.</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                    <div className="flex-1">
                      <img src="/assets/carousel/baby/mmr.jpg" alt="Immunization" />
                    </div>
                    <div className="flex-[2]">
                      <h1 className="text-baby-dark font-bold text-3xl mb-4">VAKSIN MMR <span className="text-baby-light"> (Campak, Gondongan, Rubella)</span></h1>
                      <p className="text-tertiary text-sm">Jadwal: Dosis kedua pada usia 4-6 tahun.
                      Permasalahan: Vaksin MMR melindungi anak dari campak, gondongan, dan rubella. Kasus campak dan gondongan kembali meningkat di beberapa area akibat cakupan vaksinasi yang tidak mencukupi dan misinformasi. Beberapa anak mungkin tidak mendapatkan dosis kedua pada usia 4-6 tahun, yang penting untuk perlindungan optimal.</p>
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

export default Child;
