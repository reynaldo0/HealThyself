import React, { useEffect } from "react";
import Navbar from "../Components/HomeNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

const Team = () => {
  useEffect(() => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in'); // Apply fade-in class on load
  }, []);

  return (
    <section className="page-container"> {/* Keep the class for targeting */}
      <Navbar teamText="Kembali ke Home" teamLink="/" direction="right" />

      <div className="px-10 md:px-40 py-12">
        <h1 className="text-center text-3xl font-poppins font-bold mb-8">TEAM KAMI</h1>
        {/* Responsive Swiper with breakpoints */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2000 }}
          spaceBetween={16}
          className="cursor-grab"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide on mobile
              spaceBetween: 16, // Default space on mobile
            },
            640: {
              slidesPerView: 2, // 2 slides on tablet
              spaceBetween: 16, // Default space on tablet
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
              spaceBetween: 16, // Default space on larger screens
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/salman.jpg"
                alt="Muhammad Salman Alfarisi"
              />
              <h3 className="text-xl font-semibold mt-4">Muhammad Salman Alfarisi</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/akmal.jpg"
                alt="Muhammad Akmal Saban"
              />
              <h3 className="text-xl font-semibold mt-4">Muhammad Akmal Saban</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/aldo.jpg"
                alt="Reynaldo Yuselino"
              />
              <h3 className="text-xl font-semibold mt-4">Reynaldo Yuselino</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/rama.jpg"
                alt="Ramadina Al Muzthazam"
              />
              <h3 className="text-xl font-semibold mt-4">Ramadina Al Muzthazam</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center">
              <img
                className="w-45 h-45 mx-auto rounded-full object-cover border-4 border-gray-200"
                src="/team/nazla.jpg"
                alt="Nazla Rahma"
              />
              <h3 className="text-xl font-semibold mt-4">Nazla Rahma</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
