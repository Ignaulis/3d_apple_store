import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { ShopContext } from "../Context/ShopContext";

function VisionModel() {

    const visionRef = useRef()
    const {products} = useContext(ShopContext)
    
    const appleVision = products.find(i => i.category === 'mixed reality')
    const vision = useGLTF(appleVision?.three || '')

    if(!appleVision) {
        return null
    }


    useFrame((_, delta) => {
        if (visionRef.current) {
            visionRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <primitive
            object={vision.scene}
            position={[0, 0, -1]}
            ref={visionRef}
        />
    );
}

export default function Vision() {

    const {isMobile} = useContext(ShopContext)

    return (
            <Canvas
                className="w-full h-full absolute inset-0 "
                camera={{ position: [0, 0, 0], fov: isMobile ? 65 : 54 }}
            >
                <Environment preset="city" />
                <VisionModel />
            </Canvas>
    );
}
