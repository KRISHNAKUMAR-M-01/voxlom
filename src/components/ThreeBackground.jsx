
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Glowing floating orbs with better visibility
const FloatingOrb = ({ position, color, size, speed }) => {
    return (
        <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2} position={position}>
            <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2.5}
                    distort={0.4}
                    radius={size}
                    transparent
                    opacity={0.35}
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
};

// Animated rotating rings
const RotatingRing = ({ position, color, radius, speed }) => {
    const ringRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.x = t * speed;
            ringRef.current.rotation.y = t * speed * 0.5;
        }
    });

    return (
        <mesh ref={ringRef} position={position}>
            <torusGeometry args={[radius, 0.05, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
    );
};

// Floating geometric shapes
const FloatingGeometry = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.08;
            groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
        }
    });

    const shapes = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 15
            ],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
            scale: Math.random() * 0.3 + 0.2,
            type: Math.floor(Math.random() * 3)
        }));
    }, []);

    return (
        <group ref={groupRef}>
            {shapes.map((shape, i) => (
                <mesh key={i} position={shape.position} rotation={shape.rotation} scale={shape.scale}>
                    {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
                    {shape.type === 1 && <octahedronGeometry args={[1, 0]} />}
                    {shape.type === 2 && <tetrahedronGeometry args={[1, 0]} />}
                    <meshBasicMaterial
                        color="#3b82f6"
                        transparent
                        opacity={0.25}
                        wireframe
                    />
                </mesh>
            ))}
        </group>
    );
};

const Scene = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        camera.position.x += (mouse.x * 3 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 3 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />

            {/* Glowing orbs */}
            <FloatingOrb position={[-6, 3, -5]} color="#3b82f6" size={2.5} speed={1.5} />
            <FloatingOrb position={[6, -2, -3]} color="#8b5cf6" size={2} speed={2} />
            <FloatingOrb position={[0, 4, -8]} color="#06b6d4" size={1.8} speed={1.8} />

            {/* Rotating rings */}
            <RotatingRing position={[-4, 0, -6]} color="#3b82f6" radius={2} speed={0.3} />
            <RotatingRing position={[4, 2, -4]} color="#8b5cf6" radius={1.5} speed={0.4} />

            {/* Geometric shapes */}
            <FloatingGeometry />

            {/* Enhanced sparkles */}
            <Sparkles
                count={100}
                scale={[30, 30, 15]}
                size={4}
                speed={0.4}
                opacity={0.4}
                color="#3b82f6"
            />

            <fog attach="fog" args={['#ffffff', 8, 30]} />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
