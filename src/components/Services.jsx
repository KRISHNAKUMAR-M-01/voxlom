import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AIIcon, CloudIcon, ConsultingIcon, TrainingIcon, DesignIcon, AutomationIcon } from './ServiceIcons';
import './Services.css';

const services = [
    {
        icon: <AIIcon />,
        title: "AI & ML",
        color: "#EEF2FF",
        textColor: "#4F46E5",
        position: { top: '15%', left: '15%' },
        speed: 1.2
    },
    {
        icon: <CloudIcon />,
        title: "Cloud & Data",
        color: "#FFF7ED",
        textColor: "#EA580C",
        position: { top: '10%', left: '80%' },
        speed: 0.8
    },
    {
        icon: <ConsultingIcon />,
        title: "Consulting",
        color: "#FFF1F2",
        textColor: "#E11D48",
        position: { top: '50%', left: '5%' },
        speed: 1.5
    },
    {
        icon: <TrainingIcon />,
        title: "Training",
        color: "#F5F3FF",
        textColor: "#7C3AED",
        position: { top: '55%', left: '90%' },
        speed: 0.7
    },
    {
        icon: <DesignIcon />,
        title: "UI/UX Design",
        color: "#ECFDF5",
        textColor: "#059669",
        position: { top: '80%', left: '20%' },
        speed: 1.3
    },
    {
        icon: <AutomationIcon />,
        title: "Automation",
        color: "#FEFCE8",
        textColor: "#CA8A04",
        position: { top: '85%', left: '75%' },
        speed: 0.9
    }
];

const ParallaxItem = ({ service, index, scrollYProgress }) => {
    // Each item gets a different parallax speed
    const yRange = [300 * -service.speed, 300 * service.speed];
    const y = useTransform(scrollYProgress, [0, 1], yRange);

    return (
        <motion.div
            className="floating-item"
            style={{
                top: service.position.top,
                left: service.position.left,
                y
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <motion.div
                className="floating-circle"
                style={{ backgroundColor: service.color }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="floating-icon" style={{ color: service.textColor }}>
                    {service.icon}
                </div>
            </motion.div>
            <span className="floating-label">{service.title}</span>
        </motion.div>
    );
};

const Services = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="services" className="services-section-floating" ref={sectionRef}>
            <div className="container floating-container">
                <div className="central-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="central-title">Innovative Technology Solutions</h2>
                        <p className="central-subtitle">
                            Streamline your business operations with a complete digital toolkit—from
                            intelligence and automation to enterprise software and security.
                        </p>
                        <Link to="/services" className="btn btn-outline-primary">
                            LEARN MORE <span className="arrow">›</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="floating-elements">
                    {services.map((service, index) => (
                        <ParallaxItem
                            key={index}
                            service={service}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
