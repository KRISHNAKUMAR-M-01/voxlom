import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from "../components/ServiceCard";
import IndustryCard from "../components/IndustryCard";
import { servicesData } from '../data/servicesData.jsx';

import manufacturingImg from '../assets/manufacturing.avif';
import pharmaImg from '../assets/pharma.avif';
import telecomImg from '../assets/telecom.avif';
import medicalImg from '../assets/medical.avif';
import educationImg from '../assets/education.avif';
import civilImg from '../assets/civil.avif';
import powerImg from '../assets/power.avif';
import salesImg from '../assets/sales.avif';
import itImg from '../assets/it.avif';
import bankingImg from '../assets/Banking.jpg';
import servicesVideo from '../assets/services.mp4';

import "./Services.css";

const Services = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const industries = [
        { title: "Manufacturing", image: manufacturingImg },
        { title: "Pharma", image: pharmaImg },
        { title: "Telecom", image: telecomImg },
        { title: "Medical", image: medicalImg },
        { title: "Education", image: educationImg },
        { title: "Civil", image: civilImg },
        { title: "Power", image: powerImg },
        { title: "Sales & Business", image: salesImg },
        { title: "IT & Software", image: itImg },
        { title: "Banking", image: bankingImg },
    ];

    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Voxlom Innovative Solution",
        "description": "Leading technology solution provider offering AI/ML, cloud engineering, software development, cybersecurity, and IT consulting services.",
        "url": "https://voxlom.com/services",
        "serviceType": servicesData.map(s => s.title),
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": servicesData.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                }
            }))
        }
    };

    return (
        <>
            <Helmet>
                <title>Our Services - Technology solution | Voxlom Innovative Solution</title>
                <meta name="description" content="Explore Voxlom's technology services including AI/ML, cloud, software development, and UI/UX design. Delivering excellence across all major industries." />
                <meta name="keywords" content="AI services, machine learning, cloud engineering, software development, cybersecurity, IT consulting, web development, mobile app development, data analytics, automation solution" />
                <link rel="canonical" href="https://voxlom.com/services" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Services - Technology solution | Voxlom" />
                <meta property="og:description" content="Comprehensive technology services including AI/ML, cloud engineering, software development, and IT consulting." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/services" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services - Technology solution | Voxlom" />
                <meta name="twitter:description" content="Comprehensive technology services including AI/ML, cloud engineering, software development, and IT consulting." />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <main className="services-page">
                {/* SERVICES SECTION */}
                <section className="services-section" aria-labelledby="services-heading">
                    <header className="services-header">
                        <motion.h1
                            id="services-heading"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            What We Offer at Voxlom
                        </motion.h1>
                        <motion.p
                            className="services-intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            From AI & Machine Learning to Cloud Engineering, Software Development, Cybersecurity, and IT Consulting,
                            we deliver innovative technology solution that empower businesses to transform, grow, and succeed in the digital era.
                        </motion.p>
                    </header>

                    <div className="services-grid" role="list">
                        {servicesData.map((service, index) => (
                            <motion.article
                                key={index}
                                id={service.id}
                                role="listitem"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ServiceCard {...service} />
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* INDUSTRIES SECTION */}
                <section className="industries-section" aria-labelledby="industries-heading">
                    <header className="industry-header">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="small-title">Industries We Serve</p>
                            <h2 id="industries-heading">Trusted Across Multiple Sectors</h2>
                            <p className="industry-description">
                                We bring deep industry expertise and tailored solution to organizations across diverse sectors,
                                helping them navigate digital transformation and achieve operational excellence.
                            </p>
                        </motion.div>
                    </header>

                    <div className="industry-grid" role="list">
                        {industries.map((industry, index) => (
                            <motion.article
                                key={index}
                                role="listitem"
                                aria-label={`${industry.title} industry`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <IndustryCard {...industry} />
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="services-cta services-cta-parallax">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="cta-video"
                    >
                        <source src={servicesVideo} type="video/mp4" />
                    </video>
                    <div className="services-cta-overlay"></div>
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Partner with Voxlom to leverage cutting-edge technology solution tailored to your unique needs.
                            Let's discuss how we can help you achieve your digital transformation goals.
                        </p>
                        <a href="/contact" className="btn btn-primary">Get Started Today</a>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default Services;

