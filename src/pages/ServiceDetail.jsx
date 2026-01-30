import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, Zap, Target } from 'lucide-react';
import { servicesData } from '../data/servicesData.jsx';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    return (
        <main className="service-detail-page">
            <Helmet>
                <title>{service.title} - Services | Voxlom Innovative Solution</title>
                <meta name="description" content={service.description} />
                <meta name="keywords" content={`${service.title}, technology solution, ${service.features.join(', ')}`} />
                <link rel="canonical" href={`https://voxlom.com/services/${service.id}`} />
            </Helmet>

            <section className="service-detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="detail-hero-overlay"></div>
                <div className="container">
                    <Link to="/services" className="back-link">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                    <motion.div
                        className="hero-text-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>{service.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="service-main-section">
                <div className="container">
                    <div className="detail-grid">
                        <div className="detail-main">
                            <motion.div
                                className="content-block"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2>Overview</h2>
                                <p className="lead-text">{service.description}</p>
                                <div className="full-content">
                                    {service.fullContent}
                                </div>
                            </motion.div>

                            <motion.div
                                className="content-block"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2>Key Features</h2>
                                <div className="features-list">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <Zap className="feature-icon" size={20} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <aside className="detail-sidebar">
                            <motion.div
                                className="sidebar-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <h3>Business Benefits</h3>
                                <div className="benefits-list">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="benefit-item">
                                            <CheckCircle2 className="benefit-icon" size={18} />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="sidebar-card contact-cta-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Target className="cta-icon" size={40} />
                                <h3>Need this solution?</h3>
                                <p>Our experts are ready to help you implement {service.title} in your organization.</p>
                                <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;

