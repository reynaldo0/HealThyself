import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelCanvas = ({
  model,
  title,
  description,
  bgColor,
  titleColor = "black",
  descriptionColor = "gray",
  width = "300px",
  height = "300px",
  href = '#',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-3xl overflow-visible transform transition-transform duration-1000 ease-in-out
        ${isHovered ? "scale-105" : "scale-100"} 
        ${isMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} 
        transition-all duration-700 ease-in-out`}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`absolute bottom-16 z-50 pb-20 transition-all duration-700 ease-in-out transform w-[300px] h-[400px] 
        ${isMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <Canvas className="bg-transparent">
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.6} />
          {model
            ? React.cloneElement(model, { isHovered })
            : "No model available"}
        </Canvas>
      </div>

      <div className="px-4 w-full">
        <div className="mt-24 z-10 right-10 md:right-16 flex flex-col items-start">
          <h2
            className="text-xl font-bold mb-2 text-white/80"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <p className="text-white/80" style={{ color: descriptionColor }}>
            Usia <span className="font-semibold">{description}</span>
          </p>
        </div>
        <a href={href} className="mt-4 px-4 md:right-20 inline-block text-center bg-white/20 w-full border border-white/25 hover:bg-white/30 backdrop-blur-md text-white py-2 rounded">
          Pilih
        </a>
      </div>
    </div>
  );
};

export default ModelCanvas;
