import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import { Canvas } from "react-three-fiber";
import Bayi from "../Components/Models/landingPage/Bayi";
import { OrbitControls } from "@react-three/drei";
import Ball from "../Components/Ball";

const Baby = () => {

  return (
    <section className="pt-24">
      <Navbar />

      {/* hero section start */}
      <section id="Home" className="md:pt-28 lg:pt-0 relative min-h-[689px] overflow-x-hidden">
        <div className="container">
          <div className="flex min-h-[70vh] flex-wrap-reverse items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl text-baby-dark">Lorem ipsum dolor sit amet consectur?</h1>
                <p className="text-xl text-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-baby-normal text-white p-4 rounded-lg w-fit">Mulai Eksplorasi</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end md:items-center min-h-[500px]">
              {/* wave */}
              <img src="/assets/wave.svg" alt="wave baby" className="absolute right-0 top-0 -z-10" draggable="false" />
              {/* 3D */}
              <Canvas className="bg-transparent w-[300px] h-[400px] md:h-[500px]">
                <ambientLight intensity={1.4} />
                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI * 0.3} maxPolarAngle={Math.PI * 0.6} />
                <Bayi />
              </Canvas>
              {/* card glassmorphism */}
              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/40 backdrop-blur-[50px] border border-white rounded-[34px] right-40 top-10 p-4">
                <img src="/icons/baby/susu.png" alt="susu bayi" />
                <p className="font-bold text-xl text-white text-center">Kesehatan</p>
              </div>

              <div className="hidden md:block absolute w-[150px] h-[190px] bg-white/30 border backdrop-blur-[50px] border-white rounded-[34px] right-[500px] top-[300px] p-4 shadow-md">
                <img src="/icons/baby/kura-kura.png" alt="kura kura" />
                <p className="font-bold text-xl text-baby-dark text-center">Bahagia</p>
              </div>

              {/* bola bola ayam */}
              <Ball classList="absolute -right-8 top-10 animation-delay-1000" size={100} />
              <Ball classList="absolute right-40 top-64 animation-delay-1500" size={70} />
              <Ball classList="absolute right-24 bottom-12 animation-delay-1500" size={110} />
              <Ball classList="absolute -right-14 top-1/2" />
              <Ball classList="absolute right-1/3 top-10 -z-10" color="#253B70" size={70} />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}


      {/* grafik perkembangan bayi start */}

      {/* grafik perkembangan bayi end */}


      {/* video bayi start */}

      {/* video bayi end */}


      {/* kecukupan gizi bayi start */}

      {/* kecukupan gizi bayi end */}
    </section>
  );
};

export default Baby;
