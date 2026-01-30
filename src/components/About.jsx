import React from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const StatSidebarItem = ({ topLabel, number, bottomLabel }) => {
    const [displayNumber, setDisplayNumber] = React.useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(number.replace('+', ''));
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setDisplayNumber(end);
                    clearInterval(timer);
                } else {
                    setDisplayNumber(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, number]);

    return (
        <div className="stat-sidebar-item" ref={ref}>
            <div className="stat-sidebar-label">{topLabel}</div>
            <div className="stat-sidebar-number">{displayNumber}+</div>
            <div className="stat-sidebar-label">{bottomLabel}</div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-sidebar">
                <StatSidebarItem
                    topLabel="DELIVERED"
                    number="160+"
                    bottomLabel="PROJECTS"
                />
                <StatSidebarItem
                    topLabel="TRUSTED BY"
                    number="50+"
                    bottomLabel="CLIENTS"
                />
                <StatSidebarItem
                    topLabel="OVER"
                    number="8+"
                    bottomLabel="YEARS EXPERIENCE"
                />
            </div>

            <div className="about-main-content">

                <div className="about-header">
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        ABOUT US
                    </motion.h4>
                </div>

                <motion.h2
                    className="about-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Empowering Business Transformation
                </motion.h2>

                <motion.div
                    className="about-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p>
                        Voxlom Innovative Solution is a forward-thinking technology partner dedicated to delivering scalable software, AI-driven insights, and widely accessible digital platforms. We blend engineering excellence with strategic innovation to help enterprises navigate the complexities of the digital era.
                    </p>
                    <p>
                        From cloud-native architectures to intelligent automation, we transform ambitious ideas into robust, high-performance realities that drive sustainable growth and operational efficiency.
                    </p>
                </motion.div>

                <div className="about-divider"></div>

                <div className="about-cards">
                    <motion.div
                        className="vision-mission-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="card-text">Vision</span>
                    </motion.div>

                    <motion.div
                        className="vision-mission-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="card-text">Mission</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
