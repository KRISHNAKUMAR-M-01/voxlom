
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 40 }) => {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < count; i++) {
            p.push({
                position: [
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10
                ],
                size: Math.random() * 0.15 + 0.05,
                speed: Math.random() * 0.2 + 0.1,
                rotationSpeed: [
                    Math.random() * 0.01,
                    Math.random() * 0.01,
                    Math.random() * 0.01
                ]
            });
        }
        return p;
    }, [count]);

    return (
        <group>
            {points.map((p, i) => (
                <Crystal key={i} {...p} />
            ))}
        </group>
    );
};

const Crystal = ({ position, size, rotationSpeed }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed[0];
            meshRef.current.rotation.y += rotationSpeed[1];
            meshRef.current.rotation.z += rotationSpeed[2];
            meshRef.current.position.y += Math.sin(t + position[0]) * 0.002;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <octahedronGeometry args={[size, 0]} />
            <meshStandardMaterial
                color="#0a192f"
                transparent
                opacity={0.12}
                metalness={0.9}
                roughness={0.1}
                envMapIntensity={2}
            />
        </mesh>
    );
};

const AbstractLines = () => {
    const lines = useMemo(() => {
        const l = [];
        for (let i = 0; i < 8; i++) {
            const points = [];
            for (let j = 0; j < 5; j++) {
                points.push(new THREE.Vector3(
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 5
                ));
            }
            const curve = new THREE.CatmullRomCurve3(points);
            l.push(curve);
        }
        return l;
    }, []);

    return (
        <group>
            {lines.map((curve, i) => (
                <LineMesh key={i} curve={curve} index={i} />
            ))}
        </group>
    );
};

const LineMesh = ({ curve, index }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.05 * (index % 2 === 0 ? 1 : -1);
            meshRef.current.rotation.x = Math.sin(t * 0.1 + index) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <tubeGeometry args={[curve, 64, 0.005, 8, false]} />
            <meshBasicMaterial color="#0a192f" transparent opacity={0.08} />
        </mesh>
    );
};

const Scene = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        // Subtle parallax
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, 5, -10]} intensity={0.5} color="#3b82f6" />

            <ParticleField count={50} />
            <AbstractLines />

            <Sparkles
                count={40}
                scale={[20, 20, 10]}
                size={2}
                speed={0.2}
                opacity={0.1}
                color="#0a192f"
            />

            <fog attach="fog" args={['#ffffff', 5, 25]} />
        </>
    );
};

const NewAboutThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default NewAboutThreeBackground;
