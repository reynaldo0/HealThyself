import React, { useEffect } from "react";
import Navbar from "../Components/HomeNav";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/stateContext.jsx";

const Home = ({ teamText = "Tim Kami" }) => {
  const { setOpen } = useStateContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="fixed inset-0 overflow-hidden">
      <Navbar />  {/* Navbar stays static without transition */}

      <div className="page-container absolute inset-0 transition-all duration-500">  {/* Apply transition effect here */}
        <div className="absolute -z-10 inset-0 bg-black/60 w-screen h-screen"></div>

        <video
          autoPlay
          loop
          muted
          className="absolute -z-20 inset-0 w-full h-full object-cover"
        >
          <source src="/background/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="px-4 mx-auto max-w-screen-xl text-center py-40 md:py-24 lg:py-40">
          <h1 className="mb-4 text-4xl text-secondary font-extrabold tracking-tight font-poppins leading-none md:text-5xl lg:text-6xl">
            Bagaimana Cara <span className="text-primary">Hidup Sehat?</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex justify-center items-center py-3 px-24 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-secondary/90 mt-5 xl:mt-20"
            >
              Mulai
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
