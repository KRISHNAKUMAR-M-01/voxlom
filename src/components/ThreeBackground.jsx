import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 3000 }) => {
    const points = useRef();
    const { viewport } = useThree();

    const [positions, colors, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const siz = new Float32Array(count);
        const colorOptions = [
            new THREE.Color(0xFB923C), // Orange
            new THREE.Color(0xFACC15), // Yellow
            new THREE.Color(0xA3E635), // Lime
            new THREE.Color(0xFF7D30), // Deep Orange
        ];

        for (let i = 0; i < count; i++) {
            const radius = 8 + Math.random() * 6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);

            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            col[i * 3] = color.r;
            col[i * 3 + 1] = color.g;
            col[i * 3 + 2] = color.b;

            siz[i] = Math.random() * 0.03 + 0.01;
        }
        return [pos, col, siz];
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        points.current.rotation.y = time * 0.05;
        points.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

const Shape = ({ type, position, color, index }) => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
        mesh.current.position.y = position[1] + Math.sin(time * 2 + index) * 0.3;

        const angle = time * 0.2 + index;
        const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2);
        mesh.current.position.x = radius * Math.cos(angle);
        mesh.current.position.z = radius * Math.sin(angle);
    });

    const getGeometry = () => {
        switch (type) {
            case 'icosahedron': return <icosahedronGeometry args={[0.4, 0]} />;
            case 'octahedron': return <octahedronGeometry args={[0.5, 0]} />;
            case 'torusKnot': return <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />;
            case 'torus': return <torusGeometry args={[0.4, 0.15, 16, 32]} />;
            case 'tetrahedron': return <tetrahedronGeometry args={[0.5, 0]} />;
            case 'dodecahedron': return <dodecahedronGeometry args={[0.35, 0]} />;
            default: return <icosahedronGeometry args={[0.4, 0]} />;
        }
    };

    return (
        <group ref={mesh} position={position}>
            <mesh>
                {getGeometry()}
                <meshStandardMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.7}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
            <mesh>
                {getGeometry()}
                <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

const FloatingShapes = () => {
    const shapeConfigs = useMemo(() => {
        const types = ['icosahedron', 'octahedron', 'torusKnot', 'torus', 'tetrahedron', 'dodecahedron'];
        const colors = [0xFB923C, 0xFACC15, 0xA3E635, 0xFF7D30, 0xD9F99D];
        return Array.from({ length: 8 }).map((_, i) => ({
            type: types[i % types.length],
            color: colors[i % colors.length],
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ],
            index: i
        }));
    }, []);

    return (
        <>
            {shapeConfigs.map((config, i) => (
                <Shape key={i} {...config} />
            ))}
        </>
    );
};

const Lights = () => {
    const lights = useRef([]);
    const lightColors = [0xFB923C, 0xFACC15, 0xA3E635, 0xFF7D30, 0xFDE047];

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        lights.current.forEach((light, i) => {
            if (!light) return;
            const radius = 8;
            const angle = time * 0.3 + (i * Math.PI * 2) / 5;
            light.position.x = Math.cos(angle) * radius;
            light.position.y = Math.sin(angle * 2) * 3;
            light.position.z = Math.sin(angle) * radius;
            light.intensity = 2 + Math.sin(time * 2 + i) * 0.5;
        });
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            {lightColors.map((color, i) => (
                <pointLight
                    key={i}
                    ref={(el) => (lights.current[i] = el)}
                    color={color}
                    distance={50}
                    intensity={2}
                />
            ))}
            <directionalLight position={[5, 5, 5]} intensity={0.5} />
        </>
    );
};

const Scene = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <Particles />
            <FloatingShapes />
            <Lights />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
