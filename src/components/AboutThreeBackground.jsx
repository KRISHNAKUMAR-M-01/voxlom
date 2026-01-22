import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric particles
const Particle = ({ position, color, index }) => {
    const mesh = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!mesh.current) return;
        
        // Floating motion with slight rotation
        mesh.current.position.y = position[1] + Math.sin(t * 0.5 + index) * 0.3;
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} position={position}>
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                metalness={0.7}
                roughness={0.3}
            />
        </mesh>
    );
};

// Rotating wireframe sphere
const WireframeSphere = () => {
    const mesh = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!mesh.current) return;
        mesh.current.rotation.x = t * 0.2;
        mesh.current.rotation.y = t * 0.3;
    });

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[3, 1]} />
            <meshBasicMaterial
                color="#FB923C"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
};

// Orbiting rings
const OrbitingRing = ({ radius, speed, color, rotationAxis }) => {
    const ring = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!ring.current) return;
        
        if (rotationAxis === 'x') {
            ring.current.rotation.x = t * speed;
        } else if (rotationAxis === 'y') {
            ring.current.rotation.y = t * speed;
        } else {
            ring.current.rotation.z = t * speed;
        }
    });

    return (
        <mesh ref={ring}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.3}
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
};

// Particle system
const ParticleSystem = () => {
    const particles = useMemo(() => {
        const colors = ['#FB923C', '#A3E635', '#FACC15'];
        return Array.from({ length: 60 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 15
            ],
            color: colors[i % colors.length],
            index: i
        }));
    }, []);

    return (
        <group>
            {particles.map((p, i) => (
                <Particle key={i} {...p} />
            ))}
        </group>
    );
};

// Lights
const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#FB923C" />
            <pointLight position={[-10, -10, -10]} intensity={0.6} color="#A3E635" />
            <pointLight position={[0, 10, -10]} intensity={0.5} color="#FACC15" />
        </>
    );
};

// Main scene
const Scene = () => {
    const { camera, mouse } = useThree();
    
    useFrame(() => {
        // Smooth camera movement based on mouse - same as home page
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <Sparkles
                count={100}
                scale={[20, 20, 20]}
                size={3}
                speed={0.3}
                opacity={0.4}
                color="#FB923C"
            />
            <Sparkles
                count={80}
                scale={[15, 15, 15]}
                size={4}
                speed={0.2}
                opacity={0.3}
                color="#A3E635"
            />
            <WireframeSphere />
            <OrbitingRing radius={4} speed={0.15} color="#FB923C" rotationAxis="y" />
            <OrbitingRing radius={4.5} speed={-0.12} color="#A3E635" rotationAxis="x" />
            <OrbitingRing radius={5} speed={0.18} color="#FACC15" rotationAxis="z" />
            <ParticleSystem />
            <Lights />
            <fog attach="fog" args={['#020617', 8, 40]} />
        </>
    );
};

const AboutThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
                dpr={[1, 2]}
                eventSource={document.getElementById('root') || undefined}
                eventPrefix="client"
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default AboutThreeBackground;
