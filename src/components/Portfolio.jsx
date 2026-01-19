import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
    { id: 1, tag: "Featured", title: "Project Alpha", desc: "3D Interactive Experience", type: "large" },
    { id: 2, tag: "Web", title: "Project Beta", desc: "Web Platform Design", type: "medium" },
    { id: 3, tag: "Branding", title: "Project Gamma", desc: "Brand Identity", type: "tall" },
    { id: 4, tag: "Mobile", title: "Project Delta", desc: "Mobile Experience", type: "wide" },
    { id: 5, tag: "UI/UX", title: "Project Epsilon", desc: "UI/UX Design", type: "medium" },
    { id: 6, tag: "E-commerce", title: "Project Zeta", desc: "E-commerce Solution", type: "wide" }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-background">
                <div className="portfolio-gradient-orb orb-1"></div>
                <div className="portfolio-gradient-orb orb-2"></div>
                <div className="portfolio-gradient-orb orb-3"></div>
            </div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Portfolio</h2>
                    <p className="section-subtitle">Our latest work</p>
                </div>
                <div className="portfolio-bento">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`bento-item bento-${project.type}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="portfolio-image"></div>
                            <div className="portfolio-overlay">
                                <span className="portfolio-tag">{project.tag}</span>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="portfolio-link">View Project <span>→</span></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
