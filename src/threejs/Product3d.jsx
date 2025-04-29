import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

const SCALE_MAP = {
    'iPhone 12 Pro': 0.035,
    'iPhone 13 Pro Max': 3.5,
    'iPhone 14 Pro Max': 20,
    'iPhone 15 Pro Max': 20,
    'MacBook Air 15-inch (M2)': 0.8,
    'MacBook Pro 14-inch (M3)': 7,
    'MacBook (Base Model)': 0.4,
    'Apple Vision Pro': 3,
};

function Model({ scale, url }) {
    const objectRef = useRef();
    const { scene } = useGLTF(url || '');

    useFrame((_, delta) => {
        if (objectRef.current) {
            objectRef.current.rotation.y += delta;
        }
    });

    if (!url) {
        return null;
    }

    return (
        <primitive object={scene} ref={objectRef} scale={scale} position={[0, 0, 0]} />
    );
}

export default function Product3d({ data }) {
    const [modelUrl, setModelUrl] = useState(null);
    let size = SCALE_MAP[data?.title] || 1;

    useEffect(() => {
        setModelUrl(data?.three || null);
    }, [data]);

    if (!data || !data.three) {
        return null;
    }

    return (
        <Canvas camera={{ position: [0, 0, -5], fov: 45 }}>
            <Center>
                {modelUrl && <Model url={modelUrl} scale={size} />}
            </Center>
            <Environment preset="city" />
        </Canvas>
    );
}