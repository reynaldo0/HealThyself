    import React from 'react';
    import { Canvas } from '@react-three/fiber';
    import { OrbitControls } from '@react-three/drei';

    const ModelCanvas = ({ model, title, description, gradientColors }) => {
    return (
        <div
        className="relative flex flex-col items-center p-16 shadow-lg rounded-lg overflow-visible"
        style={{
            background: `linear-gradient(${gradientColors[0]}, ${gradientColors[1]})`,
        }}
        >
        {/* Perbesar ukuran Canvas dan pastikan model keluar dari card */}
        <div className="absolute -top-20 z-10 py-16">
            <Canvas className="bg-transparent h-40 w-40">
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
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tombol</button>
        </div>
    );
    };

    export default ModelCanvas;
