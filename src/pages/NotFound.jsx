import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Page Not Found - 404 Error | Voxlom Innovative Solution",
        "description": "The page you are looking for could not be found. Return to Voxlom's homepage to explore our technology solutions and services.",
        "url": "https://voxlom.com/404",
        "mainEntity": {
            "@type": "Organization",
            "name": "Voxlom Innovative Solution",
            "url": "https://voxlom.com"
        }
    };

    return (
        <>
            <Helmet>
                <title>Page Not Found - 404 Error | Voxlom Innovative Solution</title>
                <meta name="description" content="The page you are looking for could not be found. Return to Voxlom's homepage to explore our AI/ML, cloud, and software development services." />
                <meta name="keywords" content="404 error, page not found, voxlom, technology solutions, AI services, cloud engineering" />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://voxlom.com/404" />

                {/* Open Graph */}
                <meta property="og:title" content="Page Not Found - 404 Error | Voxlom" />
                <meta property="og:description" content="The page you are looking for could not be found. Return to Voxlom's homepage." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/404" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Page Not Found - 404 Error | Voxlom" />
                <meta name="twitter:description" content="The page you are looking for could not be found. Return to Voxlom's homepage." />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <main className="not-found-page">
                <div className="not-found-container">
                    <motion.div
                        className="not-found-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="error-code"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            404
                        </motion.div>

                        <motion.h1
                            className="error-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Page Not Found
                        </motion.h1>

                        <motion.p
                            className="error-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            The page you're looking for doesn't exist or has been moved.
                            <br />
                            Let's get you back on track.
                        </motion.p>

                        <motion.div
                            className="error-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/" className="btn btn-primary">
                                <Home size={20} />
                                Go to Homepage
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-secondary"
                            >
                                <ArrowLeft size={20} />
                                Go Back
                            </button>
                        </motion.div>

                        <motion.div
                            className="helpful-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p>You might be looking for:</p>
                            <div className="links-grid">
                                <Link to="/about">About Us</Link>
                                <Link to="/services">Our Services</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default NotFound;
