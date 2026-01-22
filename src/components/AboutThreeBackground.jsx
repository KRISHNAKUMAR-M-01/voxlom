
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Float, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

// A sophisticated tech node featuring nested geometries
const TechGlobe = () => {
    const group = useRef();
    const innerRef = useRef();
    const outerRef = useRef();
    const pointsRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Rotate the entire group gently
        if (group.current) {
            group.current.rotation.y = t * 0.05;
        }
        // Inner core rotates faster
        if (innerRef.current) {
            innerRef.current.rotation.x = t * 0.2;
            innerRef.current.rotation.y = t * 0.2;
        }
        // Outer shell rotates opposite
        if (outerRef.current) {
            outerRef.current.rotation.x = -t * 0.1;
            outerRef.current.rotation.z = t * 0.05;
        }
        // Points pulse
        if (pointsRef.current) {
            pointsRef.current.rotation.y = t * 0.02;
            const scale = 1 + Math.sin(t * 1.5) * 0.02;
            pointsRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group ref={group} position={[0, 0, 0]}>
            {/* Core Glow */}
            <mesh>
                <sphereGeometry args={[1.8, 32, 32]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.9} />
            </mesh>

            {/* Inner Wireframe - Orange */}
            <mesh ref={innerRef}>
                <icosahedronGeometry args={[2, 2]} />
                <meshStandardMaterial
                    color="#FB923C"
                    wireframe
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Outer Shell - Tech Blue/Green */}
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[2.8, 1]} />
                <meshStandardMaterial
                    color="#A3E635"
                    wireframe
                    transparent
                    opacity={0.15}
                    emissive="#A3E635"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Floating Points representing nodes */}
            <points ref={pointsRef}>
                <icosahedronGeometry args={[3.5, 4]} />
                <pointsMaterial
                    color="#FACC15"
                    size={0.05}
                    transparent
                    opacity={0.6}
                    sizeAttenuation={true}
                />
            </points>
        </group>
    );
};

// Abstract data cubes floating around
const DataFragment = ({ position, color, speed, offset }) => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = t * speed + offset;
            mesh.current.rotation.y = t * speed * 0.5 + offset;
            // Slight bobbing is handled by Float wrapper in Scene, 
            // but we can add local spin here.
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial
                color={color}
                roughness={0.2}
                metalness={0.8}
                emissive={color}
                emissiveIntensity={0.4}
            />
        </mesh>
    );
};

const Scene = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        // Parallax camera movement
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    // Generate random data fragments
    const fragments = useMemo(() => {
        const items = [];
        const colors = ['#FB923C', '#A3E635', '#38bdf8']; // Orange, Green, Sky Blue
        for (let i = 0; i < 30; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 8
                ],
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 0.5 + 0.2,
                offset: Math.random() * 10
            });
        }
        return items;
    }, []);

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#FB923C" />
            <pointLight position={[-10, -5, -10]} intensity={0.8} color="#38bdf8" />

            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <Environment preset="city" />

            <TechGlobe />

            {fragments.map((frag, i) => (
                <Float key={i} speed={2} rotationIntensity={2} floatIntensity={4}>
                    <DataFragment {...frag} />
                </Float>
            ))}

            <Sparkles
                count={50}
                scale={[12, 12, 12]}
                size={4}
                speed={0.4}
                opacity={0.5}
                color="#ffffff"
            />
        </>
    );
};

const AboutThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 9], fov: 50 }}
                gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default AboutThreeBackground;
