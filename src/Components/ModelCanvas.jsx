import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelCanvas = ({
  model,
  title,
  description,
  gradientColors,
  titleColor = "black",
  descriptionColor = "gray",
  width = "300px",
  height = "300px",
  canvasWidth = "200px",
  canvasHeight = "250px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const dynamicCanvasWidth = isHovered ? '220px' : canvasWidth;
  const dynamicCanvasHeight = isHovered ? '250px' : canvasHeight;

  return (
    <div
      className={`relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-3xl overflow-visible transform transition-transform duration-500 ease-in-out ${isHovered ? "scale-105" : "scale-100"}`}
      style={{
        background: `linear-gradient(${gradientColors[0]}, ${gradientColors[1]})`,
        width: width,
        height: height,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute bottom-16 z-50 pb-20"
        style={{ width: dynamicCanvasWidth, height: dynamicCanvasHeight }}
      >
        <Canvas className="bg-transparent">
          <OrbitControls enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2} />
          <ambientLight intensity={0.6} />
          {model ? React.cloneElement(model, { isHovered }) : <AnimatedBox isHovered={isHovered} />}
        </Canvas>
      </div>

      <div className="px-4 w-full">
        <div className="mt-24 z-10 right-10 md:right-16 flex flex-col items-start">
          <h2 className="text-xl font-bold mb-2 text-white/80" style={{ color: titleColor }}>
            {title}
          </h2>
          <p className="text-gray-600" style={{ color: descriptionColor }}>
            Usia <span className="font-bold">{description}</span>
          </p>
        </div>
        <button className="mt-4 px-4 md:right-20 bg-white/20 w-full border border-white/25 hover:bg-white/30 backdrop-blur-md text-white py-2 rounded">
          Tombol
        </button>
      </div>
    </div>
  );
};

export default ModelCanvas;
