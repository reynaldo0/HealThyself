import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";
import CustomVideo from "../Components/CustomVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMinus } from "@fortawesome/free-solid-svg-icons";
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
import accordionlansia from "../docs/AccordionLansia";
import { Bar } from "react-chartjs-2";

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Legend);

const slides = [
    {
        src: "/assets/carousel/elderly/1.jpg",
        title: "First Slide",
        description: "Description for the first slide.",
    },
    {
        src: "/assets/carousel/elderly/2.jpg",
        title: "Second Slide",
        description: "Description for the second slide.",
    },
    {
        src: "/assets/carousel/elderly/3.jpg",
        title: "Third Slide",
        description: "Description for the third slide.",
    },
    {
        src: "/assets/carousel/elderly/4.jpg",
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

    const chartData = [
        { tinggi: 150, berat: 46 },
        { tinggi: 155, berat: 50 },
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
                                    Lansia Juga Harus Mengambil Langkah
                                </h1>

                                <p
                                    className="text-lg text-tertiary"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="800"
                                >
                                    Menyusun rencana kesehatan untuk lansia penting untuk menjaga kualitas hidup dan kesejahteraan mereka. Fokuskan pada nutrisi yang seimbang, aktivitas fisik yang sesuai, dan pemeriksaan kesehatan rutin untuk memastikan lansia tetap sehat dan aktif. Temukan strategi dan tips untuk mengelola kesehatan dengan lebih efektif.
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

            <section id="panduan" className="min-h-[70vh] py-28">
                <div className="container">
                    <div className="flex flex-col justify-center items-center gap-5">

                        <h1 className="text-elderly-normal font-bold text-4xl text-center" data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="700">
                            <span className="text-elderly-dark">Pantau</span> Orang Tua Kita
                        </h1>
                        <p className="text-sm text-tertiary text-center max-w-[600px]" data-aos="fade-up"
                            data-aos-easing="ease-in-out">
                            Jelajahi panduan lengkap untuk memantau kesehatan lansia. Fokus pada pengelolaan penyakit kronis, pencegahan risiko, dan perawatan rutin untuk mendukung kualitas hidup mereka. Temukan cara efektif untuk menjaga kesehatan fisik dan mental lansia agar tetap aktif dan sejahtera.
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
                                backgroundColor: 'rgb(22, 174, 121, 0.25)',
                                borderColor: '#16AE79   '
                            }
                        ]
                    }} options={chartOptions} className="max-w-full w-[750px] mx-auto" />

                </div>
            </section>


            {/* video bayi start */}
            <section id="video" className="relative">
                <img
                    src="/background/awan-putih.png"
                    alt="White Clouds"
                    className="absolute w-full top-0 z-10"
                />
                <CustomVideo src={"/background/lansia.mp4"} />
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

                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="700">Pola Makan <span className="text-elderly-light">Saat Lansia</span></h2>
                            <p className="text-lg text-white mb-8" data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="800">
                                Rencanakan diet bergizi untuk mendukung kesehatan lansia, dengan fokus pada makanan yang mudah dicerna dan kebutuhan gizi khusus.
                            </p>
                            {/* Accordion Section */}
                            <div data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="900">
                                <Accordion items={accordionlansia} initialOpenIndex={0} />
                            </div>
                        </div>
                        <div className="flex-shrink-0" data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="900">
                            <img src="/assets/OrangTua.png" alt="Mother and Child" className="w-96 h-auto" />
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
                            <span className="text-elderly-dark">Informasi </span> Gizi Saat Lansia
                        </h1>
                        <p
                            className="md:text-base text-sm text-tertiary text-center max-w-[600px]"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                        >
                            Nutrisi yang tepat penting untuk kesehatan lansia. Kebutuhan utama meliputi protein, serat, lemak sehat, vitamin, dan mineral untuk kesehatan tulang, sistem kekebalan, dan energi. Memahami kebutuhan gizi membantu memastikan pola makan seimbang yang mendukung kualitas hidup dan mencegah penyakit terkait usia.
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
                                data-aos-easing="ease-in-out" data-aos-duration="700"><span className="text-elderly-normal">Efektifitas Vaksinasi</span></h1>
                            <p className="text-[#575757]" data-aos="fade-up"
                                data-aos-easing="ease-in-out" data-aos-duration="800">Imunisasi lansia penting untuk melindungi dari penyakit. Vaksin flu tahunan dan pneumonia, serta vaksin Tdap setiap 10 tahun, membantu mencegah infeksi pernapasan dan penyakit serius.</p>
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
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Influenza</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Tahunan. Melindungi dari flu musiman dan komplikasi terkait.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                                        <div className="flex-1">
                                            <img src="/assets/carousel/baby/Vaksin-Pneumokokus.jpg" alt="Immunization" />
                                        </div>
                                        <div className="flex-[2]">
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Pneumokokus</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Dosis pertama pada usia 65 tahun, dosis kedua 5 tahun kemudian. Melindungi dari infeksi pneumonia.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                                        <div className="flex-1">
                                            <img src="/assets/carousel/baby/Vaksin-Shingles.jpg" alt="Immunization" />
                                        </div>
                                        <div className="flex-[2]">
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Shingles</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Satu dosis. Melindungi dari herpes zoster (shingles) dan komplikasinya.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                                        <div className="flex-1">
                                            <img src="/assets/carousel/baby/Vaksin-DT.jpg" alt="Immunization" />
                                        </div>
                                        <div className="flex-[2]">
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Tetanus-diphtheria (Td)</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Setiap 10 tahun. Melindungi dari tetanus dan difteri.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                                        <div className="flex-1">
                                            <img src="/assets/carousel/baby/hib.jpeg" alt="Immunization" />
                                        </div>
                                        <div className="flex-[2]">
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin Hib</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Tidak umum untuk lansia. Melindungi dari infeksi Haemophilus influenzae tipe B.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full bg-white rounded-lg p-8 md:p-5 flex flex-col items-center md:flex-row overflow-hidden gap-5 md:gap-10">
                                        <div className="flex-1">
                                            <img src="/assets/carousel/baby/mmr.jpg" alt="Immunization" />
                                        </div>
                                        <div className="flex-[2]">
                                            <h1 className="text-elderly-dark font-bold text-3xl mb-4">Vaksin MMR</h1>
                                            <p className="text-tertiary text-sm">Jadwal: Jika belum divaksin atau berisiko tinggi. Melindungi dari campak, gondongan, dan rubella.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section id="perawatan" className="md:bg-[url('/background/wave-toska.png')] bg-cover md:h-[150vh]">
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
                                    <div className=" bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                                        <h1 className="font-semibold mb-2">Aktif Secara Sosial</h1>
                                        <p className="text-tertiary">Berpartisipasi dalam kegiatan sosial dan komunitas dapat meningkatkan suasana hati dan mengurangi rasa kesepian.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                                        <h1 className="font-semibold mb-2">Menjaga Pola Tidur yang Sehat</h1>
                                        <p className="text-tertiary">Tidur yang cukup dan berkualitas penting untuk kesehatan mental. Ciptakan rutinitas tidur yang konsisten.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                                        <h1 className="font-semibold mb-2">Aktivitas Fisik Teratur</h1>
                                        <p className="text-tertiary">Olahraga ringan seperti jalan kaki atau yoga dapat membantu menjaga kesehatan mental dan fisik.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                                        <h1 className="font-semibold mb-2">Dukungan Emosional</h1>
                                        <p className="text-tertiary">Berbicara dengan keluarga, teman, atau profesional kesehatan dapat membantu mengatasi perasaan cemas atau depresi.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="bg-white p-4 border-r-8 shadow-md border-elderly-normal">
                                        <h1 className="font-semibold mb-2">Pola Makan Seimbang</h1>
                                        <p className="text-tertiary">Diet yang sehat dapat mempengaruhi suasana hati dan energi. Pastikan asupan nutrisi yang cukup dan seimbang.</p>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center">
                            <div>
                                <h1 className="text-elderly-normal font-bold text-4xl mb-4" data-aos="fade-up"
                                    data-aos-easing="ease-in-out" data-aos-duration="700">Panduan Perawatan <span className="text-elderly-normal">Jiwa Lansia</span></h1>
                                <p data-aos="fade-up"
                                    data-aos-easing="ease-in-out" data-aos-duration="800">"Merawat jiwa lansia penting untuk kesejahteraan mereka. Kesehatan mental yang baik membantu lansia merasa bahagia dan puas. Berikut beberapa tips untuk merawat jiwa lansia.</p>
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
                        <h1 className="text-4xl font-bold text-elderly-dark text-center mb-4" data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="700">
                            Panduan Lingkungan <span className="text-elderly-normal">Sehat Untuk Lansia</span>
                        </h1>
                        <p className="text-center text-tertiary max-w-screen-md mx-auto" data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="800">
                            Menjaga lingkungan yang sehat dan aman sangat penting untuk kesejahteraan lansia. Berikut adalah beberapa hal yang harus diperhatikan untuk menciptakan lingkungan yang aman bagi lansia.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 mt-10 group" data-aos="fade-up"
                            data-aos-easing="ease-in-out" data-aos-duration="800">

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Ciptakan Ruang yang Terang dan Terang</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Pastikan ruangan memiliki pencahayaan yang cukup untuk menghindari kecelakaan dan meningkatkan kenyamanan. Lampu yang baik juga membantu menjaga kesehatan mata lansia.</p>
                            </div>

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Pastikan Aksesibilitas yang Mudah</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Gunakan pegangan dan ramp untuk membantu mobilitas. Pastikan bahwa lantai bebas dari hambatan yang dapat menyebabkan terjatuh atau kesulitan bergerak.</p>
                            </div>

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Pertahankan Suhu Ruangan yang Nyaman</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Pastikan suhu ruangan tetap stabil dan nyaman. Hindari suhu ekstrem yang dapat mempengaruhi kesehatan lansia, seperti dingin berlebih atau panas berlebih.</p>
                            </div>

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Gunakan Perabot yang Aman dan Stabil</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Pilih perabot yang stabil dan mudah diakses. Hindari perabot yang dapat menyebabkan terjatuh atau kesulitan dalam penggunaan sehari-hari.</p>
                            </div>

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Pastikan Kualitas Udara yang Baik</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Gunakan alat pembersih udara dan pastikan ventilasi yang baik. Kualitas udara yang bersih penting untuk pernapasan dan kesehatan umum lansia.</p>
                            </div>

                            <div
                                className="bg-elderly-light/20 group/item hover:bg-elderly-dark px-10 py-5 min-h-[180px] transition flex-col flex items-center justify-center text-center group-hover:opacity-100 group-hover:text-white hover:scale-105"
                            >
                                <h5 className="font-semibold mb-2 text-elderly-dark group-hover/item:text-white">Jaga Kebersihan dan Kerapian Lingkungan</h5>
                                <p className="text-sm text-elderly-dark group-hover/item:text-white">Pastikan lingkungan selalu bersih dan rapi untuk menghindari risiko infeksi dan cedera. Kebersihan yang baik juga mendukung kesehatan mental dan fisik lansia.</p>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            {/* lingkungan end */}
            <Footer backgroundColor="#253B70">
                <Footer.Source link={'http://ayosehat.kemkes.go.id/'} title={'kemkes.go.id'} />
                <Footer.Source link={'http://golansia.com/'} title={'golansia.com'} />
                <Footer.Source link={'http://who.int'} title={'who.int'} />
                <Footer.Source link={'http://stikestelogorejo.ac.id'} title={'stikestelogorejo'} />
                <Footer.Source link={'http://nestlehealthscience.co.id'} title={'nestlehealth'} />
                <Footer.Source link={'http://rsprespira.jogjaprov.go.id'} title={'rsprespira.jogja'} />
            </Footer>
        </section>
    );
};

export default Elderly;
