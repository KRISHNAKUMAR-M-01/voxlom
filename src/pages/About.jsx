import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import aboutVideo from '../assets/abut video.mp4';
import ceoImage from '../assets/ceo1.jpeg';
import aboutBg from '../assets/about bg.jpg';
import whoImage from '../assets/who.avif';
import './About.css';

const StatItem = ({ target, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(target);
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-number">{count}{typeof target === 'string' && target.includes('+') ? '+' : ''}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default function About() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Voxlom Innovative Solution",
        "description": "Learn about Voxlom's mission, vision, and values. We are a technology-driven company focused on delivering innovative digital solutions.",
        "url": "https://voxlom.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "Voxlom Innovative Solution",
            "foundingDate": "2016",
            "description": "Technology-driven company focused on delivering modern digital experiences and scalable software solutions."
        }
    };

    return (
        <>
            <Helmet>
                <title>About Us - Voxlom Innovative Solution | Our Mission & Vision</title>
                <meta name="description" content="Discover Voxlom's journey, mission, and vision. We blend creativity with engineering to help businesses transform and succeed in the digital era with 8+ years of experience." />
                <meta name="keywords" content="about voxlom, technology company, digital transformation, software solutions, innovation, mission, vision, values" />
                <link rel="canonical" href="https://voxlom.com/about" />

                {/* Open Graph */}
                <meta property="og:title" content="About Voxlom - Our Mission & Vision" />
                <meta property="og:description" content="Learn about Voxlom's mission to drive innovation and transform businesses through technology." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/about" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Voxlom - Our Mission & Vision" />
                <meta name="twitter:description" content="Learn about Voxlom's mission to drive innovation and transform businesses through technology." />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <main className="about-page">
                {/* HERO */}
                <section className="about-hero">
                    <div className="about-hero-bg">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="about-video"
                        >
                            <source src={aboutVideo} type="video/mp4" />
                        </video>
                        <div className="hero-video-overlay"></div>
                    </div>
                    <div className="container">
                        <motion.div
                            className="about-hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="section-title">About Voxlom</h1>
                            <p className="hero-subtitle">
                                Driving innovation through technology, creativity, and smart solutions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="about-section">
                    <div className="container about-grid">
                        <motion.div
                            className="who-text-bg"
                            style={{ backgroundImage: `url(${whoImage})` }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="who-overlay"></div>
                            <div className="who-text-content">
                                <h2 className="section-title-alt">Who We Are</h2>
                                <p className="about-p">
                                    Voxlom Innovative Solution is a technology-driven company focused on
                                    delivering modern digital experiences, scalable software solutions,
                                    and cutting-edge innovation.
                                </p>
                                <p className="about-p">
                                    We blend creativity with engineering to help businesses grow,
                                    transform, and succeed in the digital era.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-highlight"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>Our Expertise</h3>
                            <ul>
                                <li>Web & Software Development</li>
                                <li>UI / UX & Product Design</li>
                                <li>3D & Interactive Experiences</li>
                                <li>AI & Emerging Technologies</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* MISSION / VISION */}
                <section className="about-section dark-alt">
                    <div className="container mission-grid">
                        <motion.div
                            className="mission-card"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Our Mission</h3>
                            <p>At Voxlom Innovative Solution, our mission is to leverage the power of technology to drive innovation, empower individuals, and transform communities. We are committed to designing and delivering sustainable, future-ready solutions that address real-world challenges and create lasting impact. By embracing integrity, excellence, and empathy, we ensure every solution is purposeful, reliable, and scalable. We continuously adopt emerging technologies and best practices to deliver measurable value to our clients and stakeholders. Through collaboration and responsible innovation, we strive to contribute positively to society and build a smarter, more inclusive digital future.</p>
                        </motion.div>

                        <motion.div
                            className="mission-card featured"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>Our Vision</h3>
                            <p>At Voxlom Innovative Solution, our vision is to be a trusted global leader in technology-driven innovation that creates meaningful and sustainable impact. We aspire to build intelligent solutions that simplify complexity, enable growth, and enhance lives. By fostering creativity, collaboration, and continuous learning, we aim to stay at the forefront of technological advancement. We envision a future where technology bridges gaps, empowers communities, and drives inclusive progress. Through responsible innovation, we strive to shape a smarter, more connected, and better world.</p>
                        </motion.div>

                        <motion.div
                            className="mission-card"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3>Our Values</h3>
                            <ul className="values-list">
                                <li>Innovation</li>
                                <li>Integrity</li>
                                <li>Quality</li>
                                <li>Customer-Centric Excellence</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* STATS */}
                <section className="about-section">
                    <div className="container stats-grid">
                        <StatItem target="160+" label="Projects Delivered" />
                        <StatItem target="50+" label="Happy Clients" />
                        <StatItem target="8+" label="Years Experience" />
                    </div>
                </section>

                {/* CEO MESSAGE */}
                <section className="about-section">
                    <div className="container">
                        <div className="ceo-wrapper">

                            {/* LEFT: CEO IMAGE */}
                            <div className="ceo-image">
                                <img
                                    src={ceoImage}
                                    alt="CEO of Voxlom"
                                />
                            </div>

                            {/* RIGHT: CEO MESSAGE */}
                            <div className="ceo-content">
                                <h2>Message from the CEO</h2>

                                <p className="ceo-quote">
                                    “At Voxlom, our vision is to empower businesses through intelligent
                                    technology and innovative thinking. We believe technology should
                                    create opportunities, not complexity. Our team is dedicated to
                                    delivering scalable, reliable, and future-ready solutions that help
                                    organizations grow with confidence.”
                                </p>

                                <span className="ceo-name">
                                    — Mrs.SUGANTHI KAMARAJ, CEO, Voxlom Innovative Solutions
                                </span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta" style={{ backgroundImage: `url(${aboutBg})` }}>
                    <div className="cta-overlay"></div>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="cta-content"
                        >
                            <h2>Let’s Build Something Amazing</h2>
                            <p>Partner with Voxlom to turn your ideas into reality.</p>
                            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
