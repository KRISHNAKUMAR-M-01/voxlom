import React from 'react';
import { motion } from 'framer-motion';
import './LegalLayout.css';

const LegalLayout = ({ title, children }) => {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <div className="container">
                    <motion.div
                        className="legal-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="legal-title">{title}</h1>
                    </motion.div>
                </div>
            </div>

            <div className="legal-main">
                <div className="container">
                    <motion.div
                        className="legal-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
