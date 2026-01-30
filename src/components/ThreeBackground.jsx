
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Tetrahedron, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Blob = ({ position, color, speed = 1, distort = 0.4, scale = 1 }) => {
    return (
        <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
            <Sphere args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={1.0}
                    transparent
                    opacity={0.35}
                    roughness={0.4}
                    metalness={0.1}
                />
            </Sphere>
        </Float>
    );
};

const WireframePyramid = ({ position, rotation, scale, color, speed = 1 }) => {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.x = Math.sin(t * 0.2 * speed + position[0]) * 0.3;
            ref.current.rotation.y += 0.005 * speed;
            ref.current.rotation.z = Math.cos(t * 0.15 * speed + position[1]) * 0.2;
        }
    });

    return (
        <Float speed={2 * speed} rotationIntensity={1} floatIntensity={0.5}>
            <group position={position} rotation={rotation} scale={scale} ref={ref}>
                {/* Outer Wireframe */}
                <Tetrahedron args={[1, 0]}>
                    <meshStandardMaterial
                        color={color}
                        wireframe={true}
                        transparent
                        opacity={0.8}
                        roughness={0}
                        metalness={0.8}
                        emissive={color}
                        emissiveIntensity={0.1}
                    />
                </Tetrahedron>
            </group>
        </Float>
    );
};

const ThreeBackground = () => {
    return (
        <div className="three-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1D4F91" />

                <group position={[0, 0, -2]}>
                    {/* Background Blobs - Brand Colors */}
                    <Blob
                        position={[-3.5, 1.5, -2]}
                        color="#1D4F91" // Voxlom Blue
                        scale={[3.2, 3.2, 3.2]}
                        speed={0.5}
                        distort={0.4}
                    />

                    <Blob
                        position={[3.5, -1.5, -3]}
                        color="#F15A24" // Voxlom Orange
                        scale={[3.8, 3.8, 3.8]}
                        speed={0.4}
                        distort={0.5}
                    />

                    <Blob
                        position={[0, 2.5, -5]}
                        color="#8CC63F" // Voxlom Green
                        scale={[2.5, 2.5, 2.5]}
                        speed={0.6}
                        distort={0.3}
                    />
                </group>

                {/* Floating Pyramids - Primary Brand Colors */}
                {/* Orange Accents */}
                <WireframePyramid position={[2.5, 1.5, 0]} rotation={[0.2, 0, 0]} scale={[0.8, 0.8, 0.8]} color="#F15A24" speed={0.8} />
                <WireframePyramid position={[-3, -1.5, 1]} rotation={[0.5, 0.2, 0]} scale={[0.5, 0.5, 0.5]} color="#D9E021" speed={0.5} />
                <WireframePyramid position={[4, 2, -2]} rotation={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} color="#F15A24" speed={1.2} />

                {/* Blue & Green Accents */}
                <WireframePyramid position={[-2.5, 2, 0.5]} rotation={[0.1, 0.1, 0.1]} scale={[0.6, 0.6, 0.6]} color="#1D4F91" speed={0.7} />
                <WireframePyramid position={[3, -2.5, 1.5]} rotation={[0, 0.3, 0]} scale={[0.7, 0.7, 0.7]} color="#8CC63F" speed={0.6} />
                <WireframePyramid position={[0, -3.5, 0]} rotation={[0.3, 0, 0]} scale={[0.4, 0.4, 0.4]} color="#1D4F91" speed={1} />

                {/* Subtle Dust/Sparkles for atmosphere */}
                <Sparkles
                    count={30}
                    scale={10}
                    size={2}
                    speed={0.4}
                    opacity={0.4}
                    color="#1D4F91"
                />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
