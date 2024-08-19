import React, { useEffect } from "react";
import Navbar from "../Components/HomeNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Team = () => {
  useEffect(() => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in'); // Apply fade-in class on load
  }, []);

  return (
    <section className="page-container"> {/* Keep the class for targeting */}
      <Navbar teamText="Kembali ke Home" teamLink="/" direction="right" />

      <div className="px-10 md:px-40 py-12">
        <h1 className="text-center text-3xl font-poppins font-bold mb-8 ">TEAM KAMI</h1>
        {/* Scrollable row for all team members */}
        <Swiper slidesPerView={3} modules={[Autoplay]} loop autoplay={{delay: 2000}} spaceBetween={16}>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg border text-center testing">
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
            <div className="bg-white p-8 rounded-lg border text-center testing">
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
            <div className="bg-white p-8 rounded-lg border text-center testing">
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
            <div className="bg-white p-8 rounded-lg border text-center testing">
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
            <div className="bg-white p-8 rounded-lg border text-center testing">
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
        </Swiper>

      </div>
    </section>
  );
};

export default Team;
