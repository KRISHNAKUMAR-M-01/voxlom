import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Voxlom Logo" className="logo-img" />
                            Voxlom Innovative Solution
                        </Link>
                        <p className="footer-desc">Redefining the digital landscape through innovation and cutting-edge software solutions.</p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/people/Voxlom-Innovative/pfbid02V1LwWnthEtk17snLNyXAHSgUmtozCMC1DmFKMVog7j65YUsGJJqbiUSPTXYLBqrsl/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.twitter.com/voxlom" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/company/voxlom-innovative-solution/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/voxlominnovative" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://youtube.com/@VoxlomInnovativesolution?si=qrxbeNBgyZv3Apz8" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                            <a href="http://wa.me/9092421284" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>
                    <div className="footer-links-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#home">Overview</a></li>
                            <li><a href="#services">Features</a></li>
                            <li><a href="#portfolio">Solutions</a></li>
                            <li><a href="#portfolio">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="#about">Careers</a></li>
                            <li><a href="#about">Press</a></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">System Status</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Voxlom Innovative Solution. All rights reserved.
                    </div>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
