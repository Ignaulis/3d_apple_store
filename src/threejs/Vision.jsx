import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { ShopContext } from "../Context/ShopContext";

function VisionModel() {

    const visionRef = useRef()

    const vision = useGLTF('/apple_vision_pro/scene.gltf')

    useFrame((_, delta) => {
        if (visionRef.current) {
            visionRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <primitive
            object={vision.scene}
            position={[0, 0, -1]}
            rotation={[0, 4.2, 0]}
            ref={visionRef}
        />
    );
}

export default function Vision() {

    const {isMobile} = useContext(ShopContext)

    return (
        <div className="w-full md:w-7/12 h-[400px] md:h-[500px] relative -z-10">
            <Canvas
                className="w-full h-full absolute inset-0 "
                camera={{ position: [0, 0, 0], fov: isMobile ? 65 : 54 }}
            >
                <Environment preset="city" />
                <VisionModel />
            </Canvas>
        </div>
    );
}
