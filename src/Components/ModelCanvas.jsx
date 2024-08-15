import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelCanvas = ({ model, title, description, gradientColors, width = "300px", height = "300px" }) => {
  return (
    <div
      className="relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-lg overflow-visible"
      style={{
        background: `linear-gradient(${gradientColors[0]}, ${gradientColors[1]})`,
        width: width, 
        height: height,
      }}
    >
      <div className="absolute -top-20 z-10">
        <Canvas className="bg-transparent" style={{ width: "200px", height: "250px" }}>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          {React.cloneElement(model, { scale: [5, 5, 5] })}
        </Canvas>
      </div>
      <div className="relative mt-24 text-center z-10">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Tombol
      </button>
    </div>
  );
};

export default ModelCanvas;
