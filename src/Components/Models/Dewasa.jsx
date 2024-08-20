import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Dewasa(props) {
  const { nodes, materials } = useGLTF('/Model/Dewasa.glb');
  const meshRef = useRef();
  const { isHovered } = props; // Get isHovered from props

  useFrame(() => {
    if (meshRef.current) {
      const targetScale = isHovered ? 4.1 : 4;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
      meshRef.current.rotation.y += isHovered ? 0.05 : 0.01;
    }
  });

  return (
    <group {...props} dispose={null} position={[0, -0.7, 0]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        scale={6}
      />
    </group>
  );
}

useGLTF.preload('/Model/Dewasa.glb');
  