import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { jobs } from "../data/jobData";
import "../styles/careers.css";

// Import images for proper Vite handling
import careerGrowthImg from '../assets/careergrowth.png';
import collaborativeImg from '../assets/Collaborative.jpg';
import workLifeBalanceImg from '../assets/Worklifebalance.png';
import opportunityImg from '../assets/opportunity1.jpg';
import voxVideo from '../assets/vox.mp4';

export default function Careers() {
    const whyItems = [
        {
            title: "Career Growth",
            desc: "Continuous learning, mentorship, and clear growth paths help you advance your career.",
            image: careerGrowthImg
        },
        {
            title: "Collaborative Culture",
            desc: "Join a supportive team that values ideas, creativity, and teamwork.",
            image: collaborativeImg
        },
        {
            title: "Work-Life Balance",
            desc: "We promote a healthy work-life balance with flexible and employee-friendly practices.",
            image: workLifeBalanceImg
        },
        {
            title: "Diverse Opportunities",
            desc: "Explore roles across technology, design, data, and business domains.",
            image: opportunityImg
        }
    ];

    return (
        <>
            <Helmet>
                <title>Careers - Join Our Team | Voxlom Innovative Solution</title>
                <meta name="description" content="Join Voxlom's passionate team and build Innovative Solution. Explore open positions in software development, design, and technology." />
                <meta name="keywords" content="voxlom careers, tech jobs, software engineer jobs, web developer careers, join voxlom" />
                <link rel="canonical" href="https://voxlom.com/careers" />
                <meta property="og:title" content="Careers at Voxlom - Join our Innovative Team" />
                <meta property="og:description" content="Explore exciting career opportunities at Voxlom and help build the future of technology." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com/careers" />
            </Helmet>
            <section className="careers-section">
                {/* HERO SECTION WITH VIDEO BG */}
                <div className="careers-hero">
                    <div className="careers-hero-bg">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="careers-video"
                        >
                            <source src={voxVideo} type="video/mp4" />
                        </video>
                        <div className="careers-video-overlay"></div>
                    </div>
                    <div className="container">
                        <motion.div
                            className="careers-hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Careers at Voxlom</h1>
                            <p className="careers-intro">
                                Join Voxlom and build Innovative Solution with a passionate team.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container">

                    {/* WHY WORK WITH US */}
                    <div className="why-work">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Why Work With Us</h2>
                            <p className="why-intro">
                                At Voxlom, we believe in empowering people to grow, innovate, and
                                make an impact. We foster a culture of collaboration, learning,
                                and excellence.
                            </p>
                        </motion.div>

                        <div className="why-grid">
                            {whyItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="why-card image-card"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="why-overlay">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div> {/* Close previous container */}

                {/* OPEN POSITIONS SECTION */}
                <div className="open-positions-section">
                    <div className="container">
                        <motion.h2
                            className="open-positions-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Open Positions
                        </motion.h2>

                        <div className="jobs-grid">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    className="job-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <h3>{job.title}</h3>
                                    <p className="job-desc">{job.description}</p>
                                    <p className="job-meta">Experience: {job.experience}</p>

                                    <Link to={`/careers/${job.id}`} className="btn-outline">
                                        Apply Now
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

