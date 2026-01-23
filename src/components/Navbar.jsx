import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    const isSecondaryPage = location.pathname === '/contact' || location.pathname === '/services' || location.pathname.startsWith('/careers');

    return (
        <nav className={`navbar ${isScrolled || isSecondaryPage ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="Voxlom Logo" className="logo-img" />
                    <div className="logo-text">
                        <span className="logo-title">VOXLOM</span>
                        <span className="logo-subtitle">INNOVATIVE SOLUTIONS</span>
                    </div>
                </Link>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link></li>
                    <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMenu}>Services</Link></li>
                    <li><a href="/#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a></li>
                    <li><Link to="/careers" className={`nav-link ${location.pathname.startsWith('/careers') ? 'active' : ''}`} onClick={closeMenu}>Careers</Link></li>
                    <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
                </ul>

                <button className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
