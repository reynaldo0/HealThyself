// ModelCanvas.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ModelCanvas = ({ model, title, description }) => {
  return (
    <div className="relative flex flex-col items-center p-16 bg-white shadow-lg rounded-lg overflow-visible">
      {/* Perbesar ukuran Canvas dan pastikan model keluar dari card */}
      <div className="absolute -top-20 z-10">
        <Canvas className="bg-transparent h-40 w-40">
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          {React.cloneElement(model, { scale: [1.5, 1.5, 1.5] })}
        </Canvas>
      </div>
      <div className="mt-24 text-center z-0">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tombol</button>
    </div>
  );
};

export default ModelCanvas;
