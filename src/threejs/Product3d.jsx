import { Canvas } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls, Center } from "@react-three/drei"

const SCALE_MAP = {
    'iPhone 12 Pro': 0.035,
    'iPhone 13 Pro Max': 3.5,
    'iPhone 14 Pro Max': 20,
    'iPhone 15 Pro Max': 20,
    'MacBook Air 15-inch (M2)': 0.8,
    'MacBook Pro 14-inch (M3)': 7,
    'MacBook (Base Model)': 0.4,
    'Apple Vision Pro': 3,
}

export default function Product3d({ data }) {

    if (!data || !data.three) {
        return <div className="p-4">Loading product...</div>
    }

    let size = SCALE_MAP[data.title] || 1

    const item = useGLTF(data.three)

    return (
        <Canvas camera={{ position: [0, 0, -5], fov: 45 }} className="cursor-grab">
            <Center>
                <primitive object={item.scene} scale={size} position={[0, 0, 0]} />
            </Center>
            <OrbitControls enableZoom />
            <Environment preset="city" />
        </Canvas>
    )
}