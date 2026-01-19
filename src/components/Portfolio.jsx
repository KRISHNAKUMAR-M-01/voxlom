import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import arunaImg from '../assets/aruna_diagnostics.png';
import bringtonImg from '../assets/brington.png';
import sancoImg from '../assets/sanco_life_science.png';
import quantumImg from '../assets/quantum_power.png';

const projects = [
    { id: 0, isIntro: true, title: "Our Portfolio", desc: "Showcasing our finest work in web and software development." },
    { id: 1, tag: "Healthcare", title: "Aruna Diagnostics", desc: "Trusted Lab Equipment Suppliers", image: arunaImg, bgPosition: "left top", link: "https://www.arunadiagnosticslab.in/" },
    { id: 2, tag: "Life Science", title: "Sanco Life Science", desc: "Ayurvedic Wisdom & Nature", image: sancoImg, bgPosition: "center top", link: "https://www.sancolife.com/" },
    { id: 3, tag: "IT Solutions", title: "Brington", desc: "Empowering Client Growth", image: bringtonImg, link: "https://www.brington.in/about", bgPosition: "left top" },
    { id: 4, tag: "Energy", title: "Quantum Power Systems", desc: "Powering Progress Since 2009", image: quantumImg, bgPosition: "center center", link: "https://www.quantumups.com/" }
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
                            className={`bento-item ${project.isIntro ? 'bento-intro' : ''}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {project.isIntro ? (
                                <div className="portfolio-intro-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="intro-decoration">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div
                                        className="portfolio-image"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: project.bgPosition || 'top center'
                                        }}
                                    ></div>
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-tag">{project.tag}</span>
                                        <h3>{project.title}</h3>
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project <span>→</span></a>
                                        ) : (
                                            <div className="portfolio-link">View Project <span>→</span></div>
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
