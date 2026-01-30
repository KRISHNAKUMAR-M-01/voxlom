import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import skillIndia from '../assets/certifications/skill_india.png';
import isoCertified from '../assets/certifications/iso_certified.png';
import msmeLogo from '../assets/certifications/msme.png';
import ministryAffairs from '../assets/certifications/ministry_affairs.png';
import tnLogo from '../assets/certifications/tn.jpg';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, MessageCircle, X, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    {/* Left: Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Voxlom Logo" className="logo-img" />
                            <span className="brand-name">VOXLOM INNOVATIVE SOLUTION</span>
                        </Link>
                        <p className="footer-desc">Redefining the digital landscape through innovation and cutting-edge software solution.</p>
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
                            <li><Link to="/help-center">Help Center</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link to="/system-status">System Status</Link></li>
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
                        <img src={tnLogo} alt="Tamil Nadu Government" className="cert-img" />
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
    );
};

export default Footer;

