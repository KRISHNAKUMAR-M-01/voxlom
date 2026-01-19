import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Laptop, Sparkles, Rocket } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Palette size={40} />,
        title: "3D Design",
        desc: "Stunning 3D models and animations that bring your vision to life"
    },
    {
        icon: <Laptop size={40} />,
        title: "Web Development",
        desc: "Modern, responsive websites with cutting-edge technology"
    },
    {
        icon: <Sparkles size={40} />,
        title: "Interactive Experiences",
        desc: "Engaging user interfaces with smooth animations"
    },
    {
        icon: <Rocket size={40} />,
        title: "Branding",
        desc: "Complete brand identity and visual design solutions"
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">What we offer</p>
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
            </div>
        </section>
    );
};

export default Services;
