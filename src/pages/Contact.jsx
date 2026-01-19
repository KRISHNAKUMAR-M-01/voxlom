import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Briefcase, Settings, Users } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
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
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <select className="form-select">
                                    <option value="" disabled selected>Service of Interest</option>
                                    <option value="3d">3D Design & Animation</option>
                                    <option value="web">Web Development</option>
                                    <option value="branding">Branding & Strategy</option>
                                    <option value="uiux">UI/UX Design</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea rows="6" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
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
                                    <h4>Direct Contact</h4>
                                    <p>hello@voxlom.com<br />+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Clock size={24} /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Monday — Friday<br />9:00 AM — 6:00 PM EST</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="contact-info-grid">
                        <div className="info-card">
                            <Briefcase className="card-icon" />
                            <h4>Sales</h4>
                            <p>Interested in our services? Reach out to our sales team.</p>
                            <a href="mailto:sales@voxlom.com">sales@voxlom.com</a>
                        </div>
                        <div className="info-card">
                            <Settings className="card-icon" />
                            <h4>Support</h4>
                            <p>Existing client with a question? We're here to help.</p>
                            <a href="mailto:support@voxlom.com">support@voxlom.com</a>
                        </div>
                        <div className="info-card">
                            <Users className="card-icon" />
                            <h4>Careers</h4>
                            <p>Want to join our innovtive team? Check our openings.</p>
                            <a href="mailto:careers@voxlom.com">careers@voxlom.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
