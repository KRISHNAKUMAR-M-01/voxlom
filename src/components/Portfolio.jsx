import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import arunaLogo from '../assets/portfolio/aruna.avif';
import sancoLogo from '../assets/portfolio/sanco.avif';
import bringtonLogo from '../assets/portfolio/Brington.avif';
import quantumLogo from '../assets/portfolio/quantum.avif';

const clients = [
    { id: 1, name: "Aruna Diagnostics", logo: arunaLogo },
    { id: 2, name: "Sanco Life Science", logo: sancoLogo },
    { id: 3, name: "Brington", logo: bringtonLogo },
    { id: 4, name: "Quantum Power Systems", logo: quantumLogo }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <motion.div
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="portfolio-title">Our Clients</h2>
                    <p className="portfolio-subtitle">Collaborating with local and global brands to deliver exceptional digital experiences.</p>
                </motion.div>

                <div className="portfolio-logo-grid">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            className="portfolio-logo-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="client-logo"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
