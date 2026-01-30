import React from 'react';
import ThreeBackground from './ThreeBackground';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <ThreeBackground />
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="title-line">Welcome to</span>
                    <span className="title-main">Voxlom</span>
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Innovative Solution for all your technology needs
                </motion.p>
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a href="#about" className="btn btn-primary">Explore</a>
                    <a href="/contact" className="btn btn-secondary">Get Started</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
