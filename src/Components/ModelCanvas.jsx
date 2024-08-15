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
      className={`relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-3xl overflow-visible transform transition-transform duration-500 ease-in-out ${
        isHovered ? "scale-105" : "scale-100"
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
      <div className="relative mt-24 z-10 right-10 md:right-16 flex flex-col items-start">
        <h2 className="text-lg font-bold mb-2" style={{ color: titleColor }}>
          {title}
        </h2>
        <p className="text-gray-600" style={{ color: descriptionColor }}>
          {description}
        </p>
      </div>
      <button className="relative mt-4 right-16 md:right-20 bg-blue-500 text-white px-4 py-2 rounded">
        Tombol
      </button>
    </div>
  );
};

export default ModelCanvas;
