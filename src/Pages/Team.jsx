import React, { useEffect } from "react";
import Navbar from "../Components/HomeNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  useEffect(() => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-in');
  }, []);

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background/golongan.png)] page-container">
      <Navbar teamText="Kembali" teamLink="/"/>

      <div className="px-10 md:px-40 py-12">
        <h1 className="text-center text-3xl font-poppins font-bold mb-8 text-primary">TIM <span className="text-secondary">KAMI</span></h1>
        {/* Responsive Swiper with breakpoints */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2000 }}
          spaceBetween={16}
          className="cursor-grab"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16, 
            },
          }}
        >
          {/* salman */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-secondary hover:bg-secondary hover:text-white">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out"
                src="/team/salman.jpg"
                alt="Muhammad Salman Alfarisi"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out">Muhammad Salman Alfarisi</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* aldo */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-secondary hover:bg-secondary hover:text-white">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out"
                src="/team/aldo.jpg"
                alt="Reynaldo Yusellino"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out">Reynaldo Yusellino</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* nazla */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-secondary hover:bg-secondary hover:text-white">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out"
                src="/team/nazla.jpg"
                alt="Nazla Rahma"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out">Nazla Rahma</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* rama */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-secondary hover:bg-secondary hover:text-white">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out"
                src="/team/rama.jpg"
                alt="Ramadina Almusthazam"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out">Ramadina Almusthazam</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* akmal */}
          <SwiperSlide>
            <div className="group transition-all bg-white p-4 rounded-xl shadow border border-gray-200 text-center ease-in-out hover:border-2 hover:border-secondary hover:bg-secondary hover:text-white">
              <img
                className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-gray-200 ease-in-out"
                src="/team/akmal.jpg"
                alt="Muhammad Akmal Saban"
              />
              <h3 className="text-xl font-semibold mt-4 ease-in-out">Muhammad Akmal Saban</h3>
              <p className="text-gray-600 text-sm ease-in-out group-hover:text-white">Lorem ipsum dolor sit amet, consectetur.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="#" className="text-secondary ease-in-out group-hover:text-white text-4xl p-5">
                  <FontAwesomeIcon icon={faInstagram}/>
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
