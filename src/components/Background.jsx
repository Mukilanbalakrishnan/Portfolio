import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Sphere, Box } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Stars Component
const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.02;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color='#f272c8' size={0.004} sizeAttenuation depthWrite={false} />
            </Points>
        </group>
    );
};

// Floating Object with Gold Border
const FloatingObject = ({ position, speed, shape }) => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
        ref.current.position.x += Math.cos(state.clock.elapsedTime * speed) * 0.002;
        ref.current.rotation.y += delta * 0.5;
        ref.current.rotation.x += delta * 0.3;
    });

    return (
        <mesh ref={ref} position={position}>
            {shape === "sphere" ? (
                <Sphere args={[0.1, 16, 16]}>
                    <meshStandardMaterial color="gold" wireframe />
                </Sphere>
            ) : (
                <Box args={[0.15, 0.15, 0.15]}>
                    <meshStandardMaterial color="gold" wireframe />
                </Box>
            )}
        </mesh>
    );
};

// Background Component
const Background = () => {
    return (
        <div className='w-full h-auto absolute blur-[0.5px] inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                    <FloatingObject position={[0.3, 0.5, -0.5]} speed={2} shape="sphere" />
                    <FloatingObject position={[-0.5, -0.3, -0.6]} speed={1.5} shape="box" />
                    <FloatingObject position={[0.6, -0.5, -0.8]} speed={2.5} shape="sphere" />
                </Suspense>
                <ambientLight intensity={0.5} />
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Background;
