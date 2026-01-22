import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../data/jobData";
import "../styles/careers.css";

export default function Careers() {
    return (
        <section className="careers-section">
            <div className="container">

                {/* HERO INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Careers at Voxlom</h1>
                    <p className="careers-intro">
                        Join Voxlom and build innovative solutions with a passionate team.
                    </p>
                </motion.div>

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
                        {[
                            { title: "Innovative Projects", desc: "Work on cutting-edge technologies and real-world projects that drive digital transformation." },
                            { title: "Career Growth", desc: "Continuous learning, mentorship, and clear growth paths help you advance your career." },
                            { title: "Collaborative Culture", desc: "Join a supportive team that values ideas, creativity, and teamwork." },
                            { title: "Work-Life Balance", desc: "We promote a healthy work-life balance with flexible and employee-friendly practices." },
                            { title: "Impactful Work", desc: "Your work directly contributes to solving meaningful business challenges." },
                            { title: "Diverse Opportunities", desc: "Explore roles across technology, design, data, and business domains." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="why-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* OPEN POSITIONS */}
                <motion.h2
                    className="open-positions-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
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
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </section>
    );
}
