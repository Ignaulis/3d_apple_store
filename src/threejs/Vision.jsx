import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useRef, useState, useEffect } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { ShopContext } from "../Context/ShopContext";

function VisionModel({ modelPath }) {
    const visionRef = useRef();
    const vision = useGLTF(modelPath || '');

    useFrame((_, delta) => {
        if (visionRef.current) {
            visionRef.current.rotation.y += delta * 0.5;
        }
    });

    if (!modelPath) {
        return null;
    }

    return (
        <primitive
            object={vision.scene}
            position={[0, 0, -1]}
            ref={visionRef}
        />
    );
}

export default function Vision() {
    const { isMobile, products } = useContext(ShopContext);
    const [visionModelPath, setVisionModelPath] = useState(null);

    useEffect(() => {
        const appleVision = products.find(i => i.category === 'mixed reality');
        setVisionModelPath(appleVision?.three || null);
    }, [products]);

    return (
        <Canvas
            className="w-full h-full absolute inset-0 "
            camera={{ position: [0, 0, 0], fov: isMobile ? 65 : 54 }}
        >
            <Environment preset="city" />
            {visionModelPath && <VisionModel modelPath={visionModelPath} />}
        </Canvas>
    );
}