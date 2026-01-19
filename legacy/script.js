// Three.js 3D Scene Setup
let scene, camera, renderer, particles, particleSystem;
let mouseX = 0, mouseY = 0;
let shapes = [];
let pointLights = [];
let particlePositions = [];
let time = 0;

function initThreeJS() {
    const canvas = document.getElementById('threejs-canvas');
    if (!canvas) return;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 8;

    // Renderer with enhanced settings
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Create enhanced particles
    createParticles();

    // Create diverse geometric shapes
    createShapes();

    // Create particle connections
    createParticleConnections();

    // Enhanced lighting
    createLighting();

    // Mouse movement
    document.addEventListener('mousemove', onMouseMove);

    // Window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
}

function createParticles() {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);

    const colors = [
        new THREE.Color(0xFB923C), // Orange
        new THREE.Color(0xFACC15), // Yellow
        new THREE.Color(0xA3E635), // Lime
        new THREE.Color(0xFF7D30), // Deep Orange
    ];

    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Position
        const radius = 8 + Math.random() * 6;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        posArray[i3] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        posArray[i3 + 2] = radius * Math.cos(phi);

        particlePositions.push({
            x: posArray[i3],
            y: posArray[i3 + 1],
            z: posArray[i3 + 2],
            speed: 0.0005 + Math.random() * 0.001,
            theta: theta,
            phi: phi
        });

        // Color
        const color = colors[Math.floor(Math.random() * colors.length)];
        colorArray[i3] = color.r;
        colorArray[i3 + 1] = color.g;
        colorArray[i3 + 2] = color.b;

        // Size variation
        sizeArray[i] = Math.random() * 0.03 + 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function createParticleConnections() {
    const geometry = new THREE.BufferGeometry();
    const maxConnections = 5000;
    const positions = new Float32Array(maxConnections * 3);

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
        color: 0xFB923C,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.LineSegments(geometry, material);
    scene.add(particleSystem);
}

function createShapes() {
    shapes = [];
    const colors = [0xFB923C, 0xFACC15, 0xA3E635, 0xFF7D30, 0xD9F99D];

    // Create diverse shapes
    const shapeTypes = [
        { type: 'icosahedron', params: [0.4, 0] },
        { type: 'octahedron', params: [0.5, 0] },
        { type: 'torusKnot', params: [0.3, 0.1, 64, 8, 2, 3] },
        { type: 'torus', params: [0.4, 0.15, 16, 32] },
        { type: 'tetrahedron', params: [0.5, 0] },
        { type: 'dodecahedron', params: [0.35, 0] },
        { type: 'torusKnot', params: [0.25, 0.08, 64, 16, 3, 4] },
        { type: 'octahedron', params: [0.45, 0] },
    ];

    shapeTypes.forEach((shapeConfig, i) => {
        let geometry;
        switch (shapeConfig.type) {
            case 'icosahedron':
                geometry = new THREE.IcosahedronGeometry(...shapeConfig.params);
                break;
            case 'octahedron':
                geometry = new THREE.OctahedronGeometry(...shapeConfig.params);
                break;
            case 'torusKnot':
                geometry = new THREE.TorusKnotGeometry(...shapeConfig.params);
                break;
            case 'torus':
                geometry = new THREE.TorusGeometry(...shapeConfig.params);
                break;
            case 'tetrahedron':
                geometry = new THREE.TetrahedronGeometry(...shapeConfig.params);
                break;
            case 'dodecahedron':
                geometry = new THREE.DodecahedronGeometry(...shapeConfig.params);
                break;
            default:
                geometry = new THREE.IcosahedronGeometry(0.4, 0);
        }

        if (!geometry) return;

        // Solid material
        const solidMaterial = new THREE.MeshStandardMaterial({
            color: colors[i % colors.length],
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.7,
            emissive: colors[i % colors.length],
            emissiveIntensity: 0.2
        });

        const solidMesh = new THREE.Mesh(geometry, solidMaterial);

        // Wireframe material
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: colors[i % colors.length],
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });

        const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);

        // Group both meshes
        const group = new THREE.Group();
        group.add(solidMesh);
        group.add(wireframeMesh);

        // Random position
        const radius = 4 + Math.random() * 3;
        const theta = (i / shapeTypes.length) * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        group.position.x = radius * Math.sin(phi) * Math.cos(theta);
        group.position.y = radius * Math.sin(phi) * Math.sin(theta);
        group.position.z = radius * Math.cos(phi);

        group.rotation.x = Math.random() * Math.PI;
        group.rotation.y = Math.random() * Math.PI;
        group.rotation.z = Math.random() * Math.PI;

        shapes.push({
            group: group,
            solid: solidMesh,
            wireframe: wireframeMesh,
            baseRotation: {
                x: Math.random() * 0.02,
                y: Math.random() * 0.02,
                z: Math.random() * 0.02
            },
            basePosition: {
                x: group.position.x,
                y: group.position.y,
                z: group.position.z
            },
            index: i
        });

        scene.add(group);
    });
}

function createLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Multiple colored point lights
    const lightColors = [0xFB923C, 0xFACC15, 0xA3E635, 0xFF7D30, 0xFDE047];
    const lightPositions = [
        [6, 6, 6],
        [-6, -6, 6],
        [6, -6, -6],
        [-6, 6, -6],
        [0, 8, 0]
    ];

    lightPositions.forEach((pos, i) => {
        const light = new THREE.PointLight(lightColors[i % lightColors.length], 2, 50);
        light.position.set(pos[0], pos[1], pos[2]);
        scene.add(light);
        pointLights.push(light);
    });

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
}

function updateParticleConnections() {
    if (!particleSystem || !particles) return;

    const positions = particleSystem.geometry.attributes.position.array;
    const particlePos = particles.geometry.attributes.position.array;
    const maxDistance = 1.5;
    let connectionCount = 0;
    const maxConnections = 3000;

    for (let i = 0; i < particlePos.length / 3 && connectionCount < maxConnections; i += 10) {
        for (let j = i + 10; j < particlePos.length / 3 && connectionCount < maxConnections; j += 10) {
            const dx = particlePos[i * 3] - particlePos[j * 3];
            const dy = particlePos[i * 3 + 1] - particlePos[j * 3 + 1];
            const dz = particlePos[i * 3 + 2] - particlePos[j * 3 + 2];
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < maxDistance) {
                const i6 = connectionCount * 6;
                positions[i6] = particlePos[i * 3];
                positions[i6 + 1] = particlePos[i * 3 + 1];
                positions[i6 + 2] = particlePos[i * 3 + 2];
                positions[i6 + 3] = particlePos[j * 3];
                positions[i6 + 4] = particlePos[j * 3 + 1];
                positions[i6 + 5] = particlePos[j * 3 + 2];
                connectionCount++;
            }
        }
    }

    particleSystem.geometry.setDrawRange(0, connectionCount * 2);
    particleSystem.geometry.attributes.position.needsUpdate = true;
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // Animate particles in spherical pattern
    if (particles && particlePositions.length > 0) {
        const positions = particles.geometry.attributes.position.array;
        particlePositions.forEach((particle, i) => {
            const i3 = i * 3;
            const radius = 8 + Math.sin(time + particle.theta) * 1.5;

            positions[i3] = radius * Math.sin(particle.phi + time * particle.speed) * Math.cos(particle.theta + time * particle.speed);
            positions[i3 + 1] = radius * Math.sin(particle.phi + time * particle.speed) * Math.sin(particle.theta + time * particle.speed);
            positions[i3 + 2] = radius * Math.cos(particle.phi + time * particle.speed);
        });
        particles.geometry.attributes.position.needsUpdate = true;
    }

    // Update particle connections
    updateParticleConnections();

    // Animate shapes
    shapes.forEach((shape, index) => {
        shape.group.rotation.x += shape.baseRotation.x;
        shape.group.rotation.y += shape.baseRotation.y;
        shape.group.rotation.z += shape.baseRotation.z;

        // Floating animation
        const floatOffset = Math.sin(time * 2 + index) * 0.3;
        shape.group.position.y = shape.basePosition.y + floatOffset;

        // Pulsing scale
        const scale = 1 + Math.sin(time * 3 + index) * 0.1;
        shape.group.scale.set(scale, scale, scale);

        // Rotate around center
        const angle = time * 0.5 + index;
        shape.group.position.x = shape.basePosition.x * Math.cos(angle) - shape.basePosition.z * Math.sin(angle);
        shape.group.position.z = shape.basePosition.x * Math.sin(angle) + shape.basePosition.z * Math.cos(angle);
    });

    // Animate lights
    pointLights.forEach((light, index) => {
        const radius = 8;
        const angle = time * 0.3 + (index * Math.PI * 2) / pointLights.length;
        light.position.x = Math.cos(angle) * radius;
        light.position.y = Math.sin(angle * 2) * 3;
        light.position.z = Math.sin(angle) * radius;

        // Pulse light intensity
        light.intensity = 2 + Math.sin(time * 2 + index) * 0.5;
    });

    // Enhanced camera movement
    camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.03;
    camera.position.z = 8 + Math.sin(time * 0.5) * 1;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate numbers on scroll
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.service-card, .portfolio-item, .about-text, .contact-form, .contact-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });

        // Show success message
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// Initialize everything when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initThreeJS();
        animateNumbers();
    });
} else {
    initThreeJS();
    animateNumbers();
}
