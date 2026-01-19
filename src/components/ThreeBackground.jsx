import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ type, position, color, index }) => {
    const mesh = useRef();

    // Orbital animation
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Orbit logic
        const angle = time * 0.1 + index * 0.5; // Slower, more majestic orbit
        const radius = 6 + Math.sin(time * 0.2 + index) * 2; // Dynamic radius

        // Update position of the container group
        mesh.current.position.x = Math.cos(angle) * radius;
        mesh.current.position.z = Math.sin(angle) * radius;
        mesh.current.position.y = Math.sin(time * 0.3 + index) * 1.5;
    });

    const getGeometry = () => {
        switch (type) {
            case 'icosahedron': return <icosahedronGeometry args={[0.5, 0]} />;
            case 'octahedron': return <octahedronGeometry args={[0.6, 0]} />;
            case 'torusKnot': return <torusKnotGeometry args={[0.4, 0.15, 64, 16]} />;
            case 'torus': return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
            case 'tetrahedron': return <tetrahedronGeometry args={[0.6, 0]} />;
            case 'dodecahedron': return <dodecahedronGeometry args={[0.5, 0]} />;
            default: return <icosahedronGeometry args={[0.5, 0]} />;
        }
    };

    return (
        <group ref={mesh}>
            <Float
                speed={2}
                rotationIntensity={2}
                floatIntensity={1}
                floatingRange={[-0.2, 0.2]}
            >
                {/* Solid Core */}
                <mesh>
                    {getGeometry()}
                    <meshStandardMaterial
                        color={color}
                        metalness={0.8}
                        roughness={0.2}
                        transparent
                        opacity={0.8}
                        emissive={color}
                        emissiveIntensity={0.4}
                    />
                </mesh>
                {/* Wireframe Shell */}
                <mesh scale={[1.2, 1.2, 1.2]}>
                    {getGeometry()}
                    <meshBasicMaterial
                        color={color}
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </mesh>
            </Float>
        </group>
    );
};

const FloatingShapes = () => {
    const shapeConfigs = useMemo(() => {
        const types = ['icosahedron', 'octahedron', 'torusKnot', 'torus', 'tetrahedron', 'dodecahedron'];
        const colors = [0xFB923C, 0xFACC15, 0xA3E635, 0xFF7D30, 0xD9F99D];
        return Array.from({ length: 12 }).map((_, i) => ({
            type: types[i % types.length],
            color: new THREE.Color(colors[i % colors.length]),
            index: i
        }));
    }, []);

    return (
        <group>
            {shapeConfigs.map((config, i) => (
                <Shape key={i} {...config} />
            ))}
        </group>
    );
};

const Lights = () => {
    const lights = useRef([]);
    const lightColors = [0xFB923C, 0xA3E635, 0xFACC15];

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        lights.current.forEach((light, i) => {
            if (!light) return;
            light.position.y = Math.sin(time * 0.5 + i) * 5;
            light.position.x = Math.cos(time * 0.3 + i) * 8;
            light.intensity = 2 + Math.sin(time + i) * 1;
        });
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A3E635" />

            {lightColors.map((color, i) => (
                <pointLight
                    key={i}
                    ref={(el) => (lights.current[i] = el)}
                    color={color}
                    distance={20}
                    decay={2}
                    intensity={2}
                />
            ))}
        </>
    );
};

const Scene = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        // Smooth camera movement based on mouse
        // Note: depends on eventSource being correct on Canvas
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
            <Sparkles
                count={150}
                scale={[20, 20, 10]}
                size={4}
                speed={0.4}
                opacity={0.5}
                color="#FB923C"
            />
            <Sparkles
                count={100}
                scale={[15, 15, 15]}
                size={6}
                speed={0.3}
                opacity={0.3}
                color="#A3E635"
            />
            <FloatingShapes />
            <Lights />
            <fog attach="fog" args={['#020617', 10, 50]} />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
                dpr={[1, 2]}
                eventSource={document.getElementById('root') || undefined}
                eventPrefix="client"
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;

