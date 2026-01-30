import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import './LegalPages.css';

const HelpCenter = () => {
    return (
        <div className="legal-page">
            <Helmet>
                <title>Help Center, FAQ & Technical Support | Voxlom Innovative Solution</title>
                <meta name="description" content="Get expert technical support and find answers to frequently asked questions about Voxlom's AI solutions, software development services, and business consulting." />
                <meta name="keywords" content="help center, tech support, software FAQ, AI support, business consulting India, voxlom contact, customer success, expert technical assistance" />
            </Helmet>

            <header className="legal-header">
                <div className="container">
                    <h1>Help Center</h1>
                    <p>How can we help you today? Find technical support and contact details below.</p>
                </div>
            </header>

            <main className="container">
                <div className="legal-content-wrapper">
                    <section className="legal-section">
                        <h2>1. Contact Our Global Support Teams</h2>
                        <p>Voxlom Innovative Solution provides round-the-clock assistance for all your digital needs. Our support structure is designed to handle everything from technical glitches to high-level architectural consulting.</p>

                        <div className="contact-grid-legal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                            <div className="info-card-legal" style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(29, 79, 145, 0.1)' }}>
                                <Phone className="icon" size={24} style={{ color: 'var(--voxlom-orange)', marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Customer Support</h3>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>+91 9092421284</p>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Available for priority technical issues during business hours.</p>
                            </div>
                            <div className="info-card-legal" style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(29, 79, 145, 0.1)' }}>
                                <Mail className="icon" size={24} style={{ color: 'var(--voxlom-orange)', marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Write to Us</h3>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>iyappanvox3@gmail.com</p>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Typical response time: Within 24 hours.</p>
                            </div>
                            <div className="info-card-legal" style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(29, 79, 145, 0.1)' }}>
                                <MessageSquare className="icon" size={24} style={{ color: 'var(--voxlom-orange)', marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>WhatsApp Support</h3>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>+91 9092421284</p>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Recommended for quick queries and general assistance.</p>
                            </div>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>2. Frequently Asked Questions (FAQ)</h2>
                        <div className="faq-container">
                            <div style={{ marginBottom: '1.25rem' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--voxlom-blue)' }}>Q: What services does Voxlom Innovative Solution offer?</h3>
                                <p>A: We specialize in end-to-end digital transformation, including custom software development, mobile application design, cloud infrastructure management, AI/ML integration, and strategic IT consulting.</p>
                            </div>
                            <div style={{ marginBottom: '1.25rem' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--voxlom-blue)' }}>Q: Does Voxlom provide post-development support?</h3>
                                <p>A: Yes, we offer comprehensive Maintenance and Support (M&S) packages including 24/7 server monitoring, security patching, and bug fixes.</p>
                            </div>
                            <div style={{ marginBottom: '1.25rem' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--voxlom-blue)' }}>Q: How do you ensure data security?</h3>
                                <p>A: Security is baked into our development lifecycle (DevSecOps) with industry-standard compliance protocols and regular audits.</p>
                            </div>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>3. Our Physical Presence</h2>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(29, 79, 145, 0.05)' }}>
                            <MapPin style={{ color: 'var(--voxlom-blue)', flexShrink: 0 }} size={32} />
                            <div>
                                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', color: 'var(--voxlom-blue)' }}>Regional Headquarters (India)</h4>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                                    Kamarajar Tech Campus, 39/A, Gandhi East Street,<br />
                                    Panagudi, Tirunelveli District,<br />
                                    Tamil Nadu, India - 627109
                                </p>
                                <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>Visitors by appointment only.</p>
                            </div>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>4. Business Hours</h2>
                        <p>Our standard operational hours for correspondence are as follows:</p>
                        <ul className="hours-list">
                            <li><strong>Monday - Friday:</strong> 09:00 AM - 06:00 PM IST</li>
                            <li><strong>Saturday:</strong> 09:00 AM - 01:00 PM IST</li>
                            <li><strong>Sunday:</strong> Closed (Emergency Technical Support Online 24/7)</li>
                        </ul>
                    </section>

                    <div className="legal-footer-cta" style={{ marginTop: '2.5rem', padding: '2rem', background: 'linear-gradient(to right, #eff6ff, #f8fafc)', borderRadius: '20px', border: '1px solid rgba(29, 79, 145, 0.1)', textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--voxlom-blue)', marginBottom: '0.5rem' }}>Need immediate project assistance?</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>Our engineers are standing by to help you scale your digital infrastructure.</p>
                        <a href="/contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', display: 'inline-block', borderRadius: '50px', backgroundColor: 'var(--voxlom-blue)', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Start a Conversation</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HelpCenter;
