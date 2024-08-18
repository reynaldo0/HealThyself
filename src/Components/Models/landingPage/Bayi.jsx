import { useGLTF } from '@react-three/drei'

const Bayi = ({ ...props }) => {
    const { nodes, materials } = useGLTF('/Model/Bayi.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                scale={5}
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    )

}

export default Bayi;
