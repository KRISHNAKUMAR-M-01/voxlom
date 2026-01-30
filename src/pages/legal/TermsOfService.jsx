import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <Helmet>
                <title>Terms of Service | Voxlom Innovative Solution Digital Agreement</title>
                <meta name="description" content="View the official Terms of Service for Voxlom Innovative Solution. Learn about our service standards, user responsibilities, and the legal framework governing our AI and software consulting." />
                <meta name="keywords" content="terms of service, legal agreement, SaaS terms, voxlom agreement, usage policy India, software contract, digital service terms" />
            </Helmet>

            <header className="legal-header">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Standard terms and conditions for our digital ecosystem</p>
                </div>
            </header>

            <main className="container">
                <div className="legal-content-wrapper">
                    <section className="legal-section">
                        <h2>1. Agreement to Terms</h2>
                        <p>Welcome to Voxlom Innovative Solution. These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Voxlom Innovative Solution ("we," "us," or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.</p>
                        <p>If you do not agree with all of these terms of service, then you are expressly prohibited from using the site and you must discontinue use immediately.</p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.</p>
                        <p>Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. User Representations</h2>
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul>
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                            <li>Your use of the Site will not violate any applicable law or regulation.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Prohibited Activities</h2>
                        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                        <p>As a user of the Site, you agree not to:</p>
                        <ul>
                            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                            <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Service Modifications & Interruptions</h2>
                        <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>
                        <p>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.</p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Disclaimer of Warranties</h2>
                        <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Limitation of Liability</h2>
                        <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Governing Law</h2>
                        <p>These Terms shall be governed by and defined following the laws of India. Voxlom Innovative Solution and yourself irrevocably consent that the courts of Tirunelveli, Tamil Nadu shall have exclusive jurisdiction to resolve any dispute which may arise under these terms.</p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Contact Us</h2>
                        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <strong>iyappanvox3@gmail.com</strong>.</p>
                    </section>

                    <div className="legal-footer-cta" style={{ marginTop: '2.5rem', padding: '2rem', background: 'linear-gradient(to right, #f8fafc, #fff7ed)', borderRadius: '20px', textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--voxlom-blue)', marginBottom: '0.5rem' }}>Have questions about our service model?</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>Our team is ready to discuss your specific project requirements.</p>
                        <a href="/contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', display: 'inline-block', borderRadius: '50px', backgroundColor: 'var(--voxlom-orange)', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us Today</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsOfService;
