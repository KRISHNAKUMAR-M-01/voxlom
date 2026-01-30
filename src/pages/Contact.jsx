import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone, Clock, Briefcase, Settings, Users, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import contactIllustration from '../assets/contact-illustration.jpg';
import contactImage from '../assets/contact.avif';
import careerImage from '../assets/careerimg.jpg';
import salesImage from '../assets/sales1.jpg';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ state: 'loading', message: 'Sending message...' });

        // EmailJS Configuration
        // Replace these with your own IDs from EmailJS dashboard
        const SERVICE_ID = 'service_xxxxxxx';
        const TEMPLATE_ID = 'template_xxxxxxx';
        const PUBLIC_KEY = 'your_public_key';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setStatus({ state: 'success', message: 'Thank you! Your message has been sent.' });
                e.target.reset();
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({ state: 'error', message: 'Oops! There was a problem sending your message. Please try again later.' });
            });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Get in Touch | Voxlom Innovative Solution</title>
                <meta name="description" content="Have a project in mind? Contact Voxlom today for expert AI/ML, cloud, and software solution. We're here to help you innovate." />
                <meta name="keywords" content="contact voxlom, technology consulting, hire developers, AI solution contact" />
                <link rel="canonical" href="https://voxlom.com/contact" />
                <meta property="og:title" content="Contact Voxlom - Let's Innovate Together" />
                <meta property="og:description" content="Reach out to Voxlom for cutting-edge technology solution and business consulting." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/contact" />
            </Helmet>
            <div className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="section-title">Get In Touch</h1>
                            <p className="section-subtitle">Have a project in mind? We'd love to hear from you.</p>
                        </motion.div>

                        <div className="contact-content">
                            <motion.form
                                className="contact-form"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <input name="from_name" type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input name="reply_to" type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <select name="service_interest" className="form-select">
                                        <option value="" disabled selected>Service of Interest</option>
                                        <option value="3d">3D Design & Animation</option>
                                        <option value="web">Web Development</option>
                                        <option value="branding">Branding & Strategy</option>
                                        <option value="uiux">UI/UX Design</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                                </div>

                                {status.state === 'success' ? (
                                    <motion.div
                                        className="status-message success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <CheckCircle size={20} />
                                        <span>{status.message}</span>
                                    </motion.div>
                                ) : (
                                    <button
                                        type="submit"
                                        className={`btn btn-primary ${status.state === 'loading' ? 'loading' : ''}`}
                                        disabled={status.state === 'loading'}
                                    >
                                        {status.state === 'loading' ? 'Sending...' : 'Send Message'}
                                    </button>
                                )}

                                {status.state === 'error' && (
                                    <div className="status-message error">
                                        <AlertCircle size={20} />
                                        <span>{status.message}</span>
                                    </div>
                                )}
                            </motion.form>

                            <motion.div
                                className="contact-info"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="info-item">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div>
                                        <h4>Head Office</h4>
                                        <p>Kamarajar Tech Campus,<br />39/A, Gandhi East Street, Panagudi<br />Tirunelveli District, Tamil Nadu<br />India - 627109</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div>
                                        <p>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iyappanvox3@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                iyappanvox3@gmail.com
                                            </a>
                                            <br />+91 9092421284
                                        </p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div>
                                        <h4>Inquiries</h4>
                                        <p>
                                            +91 04637-210268<br />
                                            +91 9092421284<br />
                                            +91 8939997569
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="contact-info-grid">
                            <div className="info-card sales-card service-box has-bg-image" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.45), rgba(10, 25, 47, 0.65)), url(${salesImage})` }}>
                                <div className="service-overlay"></div>
                                <div className="service-icon">
                                    <Briefcase className="service-icon-svg" />
                                </div>
                                <h4>Sales</h4>
                                <p>Interested in our services? Reach out to our sales team.</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iyappanvox3@gmail.com" target="_blank" rel="noopener noreferrer" className="read-more-link">iyappanvox3@gmail.com</a>
                            </div>
                            <div className="info-card support-card service-box has-bg-image" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.45), rgba(10, 25, 47, 0.65)), url(${contactImage})` }}>
                                <div className="service-overlay"></div>
                                <div className="service-icon">
                                    <Settings className="service-icon-svg" />
                                </div>
                                <h4>Support</h4>
                                <p>Existing client with a question? We're here to help.</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iyappanvox3@gmail.com" target="_blank" rel="noopener noreferrer" className="read-more-link">
                                    iyappanvox3@gmail.com
                                </a>
                            </div>
                            <div className="info-card career-card service-box has-bg-image" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.45), rgba(10, 25, 47, 0.65)), url(${careerImage})` }}>
                                <div className="service-overlay"></div>
                                <div className="service-icon">
                                    <Users className="service-icon-svg" />
                                </div>
                                <h4>Careers</h4>
                                <p>Want to join our innovative team? Check our openings.</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iyappanvox3@gmail.com" target="_blank" rel="noopener noreferrer" className="read-more-link">
                                    iyappanvox3@gmail.com
                                </a>
                            </div>
                        </div>

                        <motion.div
                            className="map-container"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.7976043856484!2d77.5813131!3d8.3229004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0460665ef6af7d%3A0xdd92a7c6fe1c9c70!2sVoxlom%20Innovative%20Solution!5e0!3m2!1sen!2sin!4v1768806704304!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '24px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Voxlom Location"
                            ></iframe>
                        </motion.div>
                    </div>
                    <motion.div
                        className="contact-illustration-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <img src={contactIllustration} alt="Team Illustration" />
                    </motion.div>
                </section>
            </div>
        </>
    );
};

export default Contact;

