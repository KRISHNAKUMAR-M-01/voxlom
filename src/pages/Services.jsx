import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from "../components/ServiceCard";
import IndustryCard from "../components/IndustryCard";
import {
    AIIcon,
    ConsultingIcon,
    CloudIcon,
    TrainingIcon,
    DesignIcon,
    CodeIcon,
    SecurityIcon,
    AutomationIcon,
    DataIcon,
    WebIcon,
    SourcingIcon
} from "../components/ServiceIcons";

import manufacturingImg from '../assets/manufacturing.jpg';
import pharmaImg from '../assets/pharma.jpg';
import telecomImg from '../assets/telecom.webp';
import medicalImg from '../assets/medical.jpeg';
import educationImg from '../assets/education.jpg';
import civilImg from '../assets/civil.webp';
import powerImg from '../assets/power.jpeg';
import salesImg from '../assets/sales.avif';
import itImg from '../assets/it.avif';
import bankingImg from '../assets/Banking.jpg';

import "./Services.css";

const Services = () => {
    const { hash } = useLocation();
    const [expandedId, setExpandedId] = useState(null);

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

    useEffect(() => {
        // Prevent background scroll when a card is expanded
        if (expandedId) {
            document.body.classList.add("services-modal-open");
        } else {
            document.body.classList.remove("services-modal-open");
        }
        return () => document.body.classList.remove("services-modal-open");
    }, [expandedId]);

    const services = [
        {
            icon: <AIIcon />,
            title: "Artificial Intelligence & Machine Learning",
            id: "ai-ml",
            shortText: "We provide AI and machine learning solutions...",
            fullText: "We provide AI and machine learning solutions that automate workflows, surface predictive insights, and improve decision-making. Our data scientists build custom models for forecasting, anomaly detection, NLP, computer vision, and recommender systems, deployed on scalable MLOps pipelines for measurable business outcomes."
        },
        {
            icon: <ConsultingIcon />,
            title: "IT & Business Consulting",
            id: "consulting",
            shortText: "We offer expert IT and business consulting...",
            fullText: "We align technology roadmaps with business goals through IT and business consulting, covering digital transformation strategy, process re-engineering, operating models, and technology selection. We deliver PMO support, governance, and measurable KPIs to reduce risk and accelerate time-to-value."
        },
        {
            icon: <CloudIcon />,
            title: "Data Management & Cloud Engineering",
            id: "cloud-data",
            shortText: "We deliver secure and scalable data management...",
            fullText: "We design secure, scalable data platforms and cloud architectures across AWS, Azure, and GCP. Our teams implement data lakes, warehouses, and real-time pipelines with strong security, observability, and cost optimization to unlock analytics and AI at scale."
        },
        {
            icon: <TrainingIcon />,
            title: "Technology Training & Consulting",
            id: "training",
            shortText: "We provide comprehensive technology training...",
            fullText: "We deliver hands-on technology training and consulting that upskill teams in cloud, DevOps, data engineering, AI/ML, cybersecurity, and modern app development. Programs are role-based, project-focused, and aligned to your tech stack for faster adoption and certification readiness."
        },
        {
            icon: <DesignIcon />,
            title: "UI/UX Design & Development",
            id: "design",
            shortText: "We design intuitive and user-centric digital experiences...",
            fullText: "We craft user-centered UI/UX for web and mobile, combining research, journey mapping, wireframes, and high-fidelity prototypes. Our design systems improve accessibility, consistency, and conversion while front-end engineers ship performant, responsive interfaces."
        },
        {
            icon: <CodeIcon />,
            title: "Software Development & Consulting",
            id: "software-dev",
            shortText: "We develop customized software solutions...",
            fullText: "We build custom software and product platforms with modern stacks, secure APIs, and cloud-native architectures. From discovery to delivery, we provide product strategy, agile execution, QA automation, and DevOps to launch reliable, scalable applications."
        },
        {
            icon: <SecurityIcon />,
            title: "Cyber Protection & Security",
            id: "security",
            shortText: "We provide advanced cybersecurity solutions...",
            fullText: "We provide cybersecurity strategy, security architecture, and managed protection to defend critical assets. Services include risk assessments, zero-trust design, cloud security hardening, IAM, vulnerability management, SOC monitoring, and incident response playbooks."
        },
        {
            icon: <AutomationIcon />,
            title: "Automation Solutions",
            id: "automation",
            shortText: "We implement intelligent automation solutions...",
            fullText: "We implement intelligent automation with RPA, orchestration, and AI to streamline repetitive tasks, improve accuracy, and cut operational costs. We assess processes, build bots, and integrate with ERP/CRM systems for measurable productivity gains."
        },
        {
            icon: <DataIcon />,
            title: "Data Management & Analytics",
            id: "data-mgmt",
            shortText: "We help organizations manage and utilize data...",
            fullText: "We modernize data management and analytics with governed data models, BI dashboards, and self-service insights. Our teams build ETL/ELT pipelines, semantic layers, and KPI frameworks so stakeholders trust the data and act faster."
        },
        {
            icon: <WebIcon />,
            title: "Web & App Development",
            id: "web-app",
            shortText: "We develop responsive web and mobile applications...",
            fullText: "We develop responsive, high-performance web and mobile apps with secure backends, optimized UX, and SEO-friendly frontends. From MVPs to enterprise-grade products, we cover architecture, API design, performance tuning, and app store readiness."
        },
        {
            icon: <SourcingIcon />,
            title: "Sourcing Specialist & Talent Acquisition",
            id: "sourcing",
            shortText: "We offer professional sourcing solutions...",
            fullText: "We deliver sourcing and talent acquisition for technology and business roles, combining targeted outreach, assessments, and employer-brand alignment. Our recruiters shorten time-to-hire and improve fit with vetted pipelines for niche skills."
        }
    ];

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
        "description": "Leading technology solutions provider offering AI/ML, cloud engineering, software development, cybersecurity, and IT consulting services.",
        "url": "https://voxlom.com/services",
        "serviceType": services.map(s => s.title),
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.fullText
                }
            }))
        }
    };

    return (
        <>
            <Helmet>
                <title>Our Services - Technology Solutions | Voxlom Innovative Solution</title>
                <meta name="description" content="Explore Voxlom's comprehensive technology services including AI/ML, cloud engineering, software development, cybersecurity, UI/UX design, and IT consulting. Serving manufacturing, healthcare, finance, and more." />
                <meta name="keywords" content="AI services, machine learning, cloud engineering, software development, cybersecurity, IT consulting, web development, mobile app development, data analytics, automation solutions" />
                <link rel="canonical" href="https://voxlom.com/services" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Services - Technology Solutions | Voxlom" />
                <meta property="og:description" content="Comprehensive technology services including AI/ML, cloud engineering, software development, and IT consulting." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/services" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services - Technology Solutions | Voxlom" />
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
                        <h1 id="services-heading">What We Offer at Voxlom</h1>
                        <p className="services-intro">
                            From AI & Machine Learning to Cloud Engineering, Software Development, Cybersecurity, and IT Consulting,
                            we deliver innovative technology solutions that empower businesses to transform, grow, and succeed in the digital era.
                        </p>
                    </header>

                    <div className="services-grid" role="list">
                        {services.map((service, index) => (
                            <article key={index} id={service.id} role="listitem">
                                <ServiceCard
                                    {...service}
                                    open={expandedId === service.id}
                                    onToggle={() =>
                                        setExpandedId((prev) => (prev === service.id ? null : service.id))
                                    }
                                />
                            </article>
                        ))}
                    </div>
                </section>

                {/* INDUSTRIES SECTION */}
                <section className="industries-section" aria-labelledby="industries-heading">
                    <header className="industry-header">
                        <div>
                            <p className="small-title">Industries We Serve</p>
                            <h2 id="industries-heading">Trusted Across Multiple Sectors</h2>
                            <p className="industry-description">
                                We bring deep industry expertise and tailored solutions to organizations across diverse sectors,
                                helping them navigate digital transformation and achieve operational excellence.
                            </p>
                        </div>
                    </header>

                    <div className="industry-grid" role="list">
                        {industries.map((industry, index) => (
                            <article key={index} role="listitem" aria-label={`${industry.title} industry`}>
                                <IndustryCard {...industry} />
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="services-cta">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Partner with Voxlom to leverage cutting-edge technology solutions tailored to your unique needs.
                            Let's discuss how we can help you achieve your digital transformation goals.
                        </p>
                        <a href="/contact" className="btn btn-primary">Get Started Today</a>
                    </div>
                </section>
            </main>

            {expandedId && (
                <div
                    className="services-modal-overlay"
                    role="presentation"
                    onClick={() => setExpandedId(null)}
                />
            )}
        </>
    );
};

export default Services;
