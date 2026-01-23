import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AIIcon, CloudIcon, CodeIcon, ConsultingIcon } from './ServiceIcons';
import './Services.css';

const services = [
    {
        icon: <AIIcon />,
        title: "Artificial Intelligence & ML",
        desc: "Automate workflows and gain predictive insights with our custom AI/ML solutions."
    },
    {
        icon: <CodeIcon />,
        title: "Product & Software Engineering",
        desc: "Build scalable, secure, and high-performance software tailored to your business needs."
    },
    {
        icon: <CloudIcon />,
        title: "Cloud & Data Engineering",
        desc: "Modernize your infrastructure with secure cloud architectures and robust data pipelines."
    },
    {
        icon: <ConsultingIcon />,
        title: "IT & Business Consulting",
        desc: "Align technology with business goals through strategic consulting and digital transformation."
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-subtitle">
                        Comprehensive technology solutions designed to accelerate your digital transformation.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="services-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <Link to="/services" className="btn btn-primary">
                        Read More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
