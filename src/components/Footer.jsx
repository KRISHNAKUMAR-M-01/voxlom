import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import skillIndia from '../assets/certifications/skill_india.png';
import isoCertified from '../assets/certifications/iso_certified.png';
import msmeLogo from '../assets/certifications/msme.png';
import ministryAffairs from '../assets/certifications/ministry_affairs.png';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, MessageCircle, X, Phone, Mail } from 'lucide-react';
import './Footer.css';

const LegalModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="legal-modal-overlay" onClick={onClose}>
                    <motion.div
                        className="legal-modal-content"
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="legal-modal-header">
                            <h2 className="legal-modal-title">{title}</h2>
                            <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="legal-modal-body">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const PrivacyPolicyContent = () => (
    <>
        <div className="legal-section">
            <p>At Voxlom Innovative Solution, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.</p>
        </div>

        <div className="legal-section">
            <h3>Information We Collect</h3>
            <p>We may collect personal information such as your name, email address, phone number, company details, and any information you voluntarily provide through contact forms or service inquiries. We may also collect non-personal data such as browser type, device information, IP address, and usage patterns to improve our website performance.</p>
        </div>

        <div className="legal-section">
            <h3>How We Use Your Information</h3>
            <p>The information we collect is used to respond to inquiries, deliver services, improve user experience, communicate updates, and maintain website security. We may also use data for internal analysis, service improvement, and compliance with legal obligations.</p>
        </div>

        <div className="legal-section">
            <h3>Data Protection & Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure. While we strive to safeguard your data, no method of transmission over the internet is completely secure.</p>
        </div>

        <div className="legal-section">
            <h3>Sharing of Information</h3>
            <p>We do not sell, trade, or rent personal information to third parties. Information may be shared only with trusted partners or service providers when required to deliver services or comply with legal requirements.</p>
        </div>

        <div className="legal-section">
            <h3>Your Rights</h3>
            <p>You have the right to access, update, or request deletion of your personal information. You may also choose to restrict or object to certain data processing activities.</p>
        </div>

        <div className="legal-section">
            <h3>Updates to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated effective date.</p>
        </div>
    </>
);

const TermsOfServiceContent = () => (
    <>
        <div className="legal-section">
            <p>Welcome to Voxlom Innovative Solution. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service.</p>
        </div>

        <div className="legal-section">
            <h3>Use of Website</h3>
            <p>You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the website. Unauthorized use of this website may give rise to legal claims.</p>
        </div>

        <div className="legal-section">
            <h3>Services</h3>
            <p>All services provided by Voxlom Innovative Solution are subject to agreed terms, timelines, and scope defined through proposals, contracts, or service agreements. We reserve the right to modify or discontinue services at any time.</p>
        </div>

        <div className="legal-section">
            <h3>Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Voxlom Innovative Solution unless otherwise stated. Unauthorized reproduction or distribution of content is prohibited.</p>
        </div>

        <div className="legal-section">
            <h3>Limitation of Liability</h3>
            <p>Voxlom Innovative Solution shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.</p>
        </div>

        <div className="legal-section">
            <h3>Third-Party Links</h3>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites.</p>
        </div>

        <div className="legal-section">
            <h3>Governing Law</h3>
            <p>These Terms of Service shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction of operation.</p>
        </div>

        <div className="legal-section">
            <h3>Changes to Terms</h3>
            <p>We reserve the right to update these Terms of Service at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
        </div>
    </>
);

const SystemStatusContent = () => (
    <>
        <div className="legal-section">
            <p>At Voxlom Innovative Solution, we are committed to delivering reliable and uninterrupted services. This page provides real-time updates on the operational status of our platforms, services, and infrastructure.</p>
        </div>

        <div className="legal-section">
            <h3>Current Status</h3>
            <div className="status-indicator">
                <span className="status-dot"></span>
                <span>All systems are operating normally. Our services are fully functional, and no incidents have been reported at this time.</span>
            </div>
        </div>

        <div className="legal-section">
            <h3>Service Availability</h3>
            <p>We continuously monitor our applications, servers, and cloud infrastructure to ensure high availability and optimal performance. Any scheduled maintenance or unexpected disruptions will be communicated promptly.</p>
        </div>

        <div className="legal-section">
            <h3>Incident Reporting</h3>
            <p>In the event of a service disruption, details including the affected services, impact level, and resolution progress will be updated on this page. Transparency and timely communication are our priorities.</p>
        </div>

        <div className="legal-section">
            <h3>Maintenance Updates</h3>
            <p>Planned maintenance activities will be announced in advance to minimize inconvenience. During maintenance windows, certain services may experience limited availability.</p>
        </div>

        <div className="legal-section">
            <h3>Support & Communication</h3>
            <p>If you experience any issues not listed here, please contact our support team. We are committed to resolving concerns quickly and efficiently.</p>
        </div>
    </>
);

const HelpCenterContent = () => (
    <>
        <div className="legal-section">
            <p>Need assistance? We're here to help! Reach out to us through any of the following channels and our team will get back to you as soon as possible.</p>
        </div>

        <div className="legal-section">
            <h3>Contact Information</h3>
            <div className="contact-details">
                <div className="contact-detail-item">
                    <Phone size={20} />
                    <div>
                        <strong>Phone</strong>
                        <p>+91 9092421284</p>
                    </div>
                </div>
                <div className="contact-detail-item">
                    <Mail size={20} />
                    <div>
                        <strong>Email</strong>
                        <p>iyappanvox3@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="legal-section">
            <h3>Head Office</h3>
            <p>
                Kamarajar Tech Campus,<br />
                39/A, Gandhi East Street, Panagudi,<br />
                Zipcode - 627109<br />
                Tirunelveli District, Tamil Nadu, India
            </p>
        </div>

        <div className="legal-section">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                Saturday: 9:00 AM - 1:00 PM IST<br />
                Sunday: Closed</p>
        </div>

        <div className="legal-section">
            <h3>Quick Links</h3>
            <p>For immediate assistance, you can also visit our <Link to="/contact">Contact Page</Link> or connect with us on social media.</p>
        </div>
    </>
);

const Footer = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const openPrivacy = (e) => {
        e.preventDefault();
        setIsPrivacyOpen(true);
    };

    const openTerms = (e) => {
        e.preventDefault();
        setIsTermsOpen(true);
    };

    const openStatus = (e) => {
        e.preventDefault();
        setIsStatusOpen(true);
    };

    const openHelp = (e) => {
        e.preventDefault();
        setIsHelpOpen(true);
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-main">
                        {/* Left: Brand Section */}
                        <div className="footer-brand">
                            <Link to="/" className="logo">
                                <img src={logo} alt="Voxlom Logo" className="logo-img" />
                                <span>VOXLOM INNOVATIVE SOLUTION</span>
                            </Link>
                            <p className="footer-desc">Redefining the digital landscape through innovation and cutting-edge software solutions.</p>
                        </div>

                        {/* Company Links */}
                        <div className="footer-links-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><a href="#press">Press</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className="footer-links-col">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#" onClick={openHelp}>Help Center</a></li>
                                <li><a href="#" onClick={openPrivacy}>Privacy Policy</a></li>
                                <li><a href="#" onClick={openTerms}>Terms of Service</a></li>
                                <li><a href="#" onClick={openStatus}>System Status</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Certified By Section - Horizontal Row */}
                    <div className="footer-certifications">
                        <h4>Certified By</h4>
                        <div className="certification-grid">
                            <img src={skillIndia} alt="Skill India" className="cert-img large" />
                            <img src={isoCertified} alt="ISO Certified" className="cert-img large" />
                            <img src={msmeLogo} alt="MSME" className="cert-img" />
                            <img src={ministryAffairs} alt="Ministry of External Affairs" className="cert-img" />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="footer-divider"></div>

                    {/* Bottom: Social & Copyright */}
                    <div className="footer-bottom">
                        <div className="social-links">
                            <a href="https://www.facebook.com/people/Voxlom-Innovative/pfbid02V1LwWnthEtk17snLNyXAHSgUmtozCMC1DmFKMVog7j65YUsGJJqbiUSPTXYLBqrsl/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.twitter.com/voxlom" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/voxlom-innovative-solution/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/voxlominnovative" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://youtube.com/@VoxlomInnovativesolution?si=qrxbeNBgyZv3Apz8" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                            <a href="http://wa.me/9092421284" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <MessageCircle size={20} />
                            </a>
                        </div>

                        <div className="footer-copyright">
                            © {new Date().getFullYear()} VOXLOM INNOVATIVE SOLUTION. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

            <LegalModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
                title="Privacy Policy"
            >
                <PrivacyPolicyContent />
            </LegalModal>

            <LegalModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
                title="Terms of Service"
            >
                <TermsOfServiceContent />
            </LegalModal>

            <LegalModal
                isOpen={isStatusOpen}
                onClose={() => setIsStatusOpen(false)}
                title="System Status"
            >
                <SystemStatusContent />
            </LegalModal>

            <LegalModal
                isOpen={isHelpOpen}
                onClose={() => setIsHelpOpen(false)}
                title="Help Center"
            >
                <HelpCenterContent />
            </LegalModal>
        </>
    );
};

export default Footer;
