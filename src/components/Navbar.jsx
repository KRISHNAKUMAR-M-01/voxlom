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

    const isContactPage = location.pathname === '/contact';

    return (
        <nav className={`navbar ${isScrolled || isContactPage ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="Voxlom Logo" className="logo-img" />
                    Voxlom Innovative Solution
                </Link>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/#home" className="nav-link" onClick={closeMenu}>Home</a></li>
                    <li><a href="/#about" className="nav-link" onClick={closeMenu}>About</a></li>
                    <li><a href="/#services" className="nav-link" onClick={closeMenu}>Services</a></li>
                    <li><a href="/#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a></li>
                    <li><Link to="/contact" className={`nav-link ${isContactPage ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
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
