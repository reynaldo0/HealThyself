import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const AnimatedBox = ({ isHovered }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsedTime = clock.getElapsedTime();
      meshRef.current.scale.set(
        isHovered ? Math.sin(elapsedTime * 3) + 2.5 : 3,
        isHovered ? Math.sin(elapsedTime * 3) + 2.5 : 3,
        isHovered ? Math.sin(elapsedTime * 3) + 2.5 : 3
      );
      meshRef.current.position.y = isHovered ? Math.sin(elapsedTime * 3) * 0.5 : 0;
    }
  });

  return <Box ref={meshRef} />;
};

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

  return (
    <div
      className={`relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-3xl overflow-visible transform transition-transform duration-500 ease-in-out ${isHovered ? "scale-105" : "scale-100"
        }`}
      style={{
        background: `linear-gradient(${gradientColors[0]}, ${gradientColors[1]})`,
        width: width,
        height: height,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute bottom-16 z-10 pb-16 transform transition-transform duration-500 ease-in-out`}
      >
        <Canvas className="bg-transparent" style={{ width: canvasWidth, height: canvasHeight }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <AnimatedBox isHovered={isHovered} />
        </Canvas>
      </div>

      <div className="px-4 w-full">
        <div className=" mt-24 z-10 right-10 md:right-16 flex flex-col items-start">
          <h2 className="text-xl font-bold mb-2 text-white/80">
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
