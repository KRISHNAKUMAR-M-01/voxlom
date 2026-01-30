import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const SystemStatus = () => {
    return (
        <div className="legal-page">
            <Helmet>
                <title>Real-time System Status & Infrastructure Health | Voxlom</title>
                <meta name="description" content="Monitor the real-time operational status of Voxlom's AI modeling engines, cloud clusters, and API gateways. We maintain a 99.9% uptime target for all software solutions." />
                <meta name="keywords" content="system status, uptime monitor, voxlom server health, API status, cloud reliability, SRE, service availability" />
            </Helmet>

            <header className="legal-header">
                <div className="container">
                    <h1>System Status</h1>
                    <p>Real-time reliability updates for our global infrastructure</p>
                </div>
            </header>

            <main className="container">
                <div className="legal-content-wrapper">
                    <section className="legal-section">
                        <h2>1. Real-Time Operational Status</h2>
                        <div className="status-card">
                            <div className="status-indicator-dot"></div>
                            <div className="status-text">
                                <h3>All Systems Operational</h3>
                                <p>We are currently experiencing no issues across our global infrastructure. All platforms, API services, and cloud nodes are performing within normal parameters (99.9% uptime target).</p>
                            </div>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>2. Service Metrics</h2>
                        <p>We monitor every component of our ecosystem 24/7. Below are the status indicators for our primary service categories:</p>
                        <ul>
                            <li><strong>Cloud Infrastructure (AWS/Azure/GCP):</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Active</span> — All regional clusters (US-East, EU-West, Asia-South) are fully operational.</li>
                            <li><strong>REST & GraphQL APIs:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Active</span> — Response times currently averaging 120ms.</li>
                            <li><strong>AI & Machine Learning Engines:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Active</span> — High availability across all model inference endpoints.</li>
                            <li><strong>Database Management Systems:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Active</span> — Replication and backup tasks are executing normally.</li>
                            <li><strong>Client Dashboard & Portals:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Active</span> — Web and Mobile interfaces are responsive.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Incident History & Reporting</h2>
                        <p>Transparency is core to our operations. We maintain a strict policy of reporting even the minor service degradations. In the last 90 days, we have maintained a 99.98% uptime rating.</p>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '1rem' }}>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Jan 15, 2026:</strong> Scheduled maintenance completed on EU server clusters. Duration: 15 minutes. No user impact.</p>
                            <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '1rem 0' }} />
                            <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Dec 22, 2025:</strong> Minor latency observed on API Gateway due to holiday traffic spike. Resolved within 8 minutes.</p>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>4. Monitoring Infrastructure</h2>
                        <p>Voxlom utilizes a combination of distributed monitoring tools including Prometheus, Grafana, and custom heartbeat scripts to ensure total visibility. Our Site Reliability Engineering (SRE) team receives near-instant alerts for any deviation from expected performance thresholds.</p>
                        <h3>Our Monitoring Layers:</h3>
                        <ul>
                            <li><strong>Layer 7 (Application):</strong> Content delivery and logic execution health.</li>
                            <li><strong>Layer 4 (Transport):</strong> TCP/UDP connectivity and throughput.</li>
                            <li><strong>Hardware Level:</strong> CPU, Memory, and Disk I/O monitoring for all physical and virtual nodes.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Maintenance Schedule</h2>
                        <p>To keep our systems at peak performance, we perform routine security patches and architectural updates. These are always performed during off-peak hours (Sunday 02:00 AM - 04:00 AM IST) and typically result in zero downtime for our end users.</p>
                    </section>

                    <div className="legal-footer-cta" style={{ marginTop: '2.5rem', padding: '2rem', background: '#0a192f', borderRadius: '24px', textAlign: 'center', color: 'white' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1.35rem' }}>Reliability is our Mission</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>We build systems that scale with your business without failing.</p>
                        <a href="/about" className="btn-secondary" style={{ padding: '0.75rem 1.75rem', display: 'inline-block', borderRadius: '50px', border: '2px solid #10b981', color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>Our Technical Vision</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SystemStatus;
