import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
            <div className="stat-number">{count}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Driving innovation through technology and expertise
                    </motion.p>
                </div>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Empowering Business Transformation</h3>
                        <p>Voxlom Innovative Solution is a forward-thinking technology partner dedicated to delivering scalable software, AI-driven insights, and widely accessible digital platforms. We blend engineering excellence with strategic innovation to help enterprises navigate the complexities of the digital era.</p>
                        <p>From cloud-native architectures to intelligent automation, we transform ambitious ideas into robust, high-performance realities that drive sustainable growth and operational efficiency.</p>
                    </motion.div>
                    <div className="about-stats">
                        <StatItem target="160" label="Projects" />
                        <StatItem target="50" label="Clients" />
                        <StatItem target="8" label="Years Experience" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
