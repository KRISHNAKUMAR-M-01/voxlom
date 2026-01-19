import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    return (
        <main className="about-page">
            {/* HERO */}
            <section className="about-hero">
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
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
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
                        <p>At Voxlom Innovative Solution, our mission is to leverage the power of technology to drive innovation, empower individuals, and transform communities. We're dedicated to creating sustainable solutions that address real-world challenges and make a lasting impact.</p>
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
                        <p>To lead with innovation and purpose, transforming ideas into intelligent solutions that create a better, smarter, and more connected world.</p>
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
                        <p>Innovation, Integrity, Quality, and Customer-Centric Excellence.</p>
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

            {/* CTA */}
            <section className="about-cta">
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
    );
}
