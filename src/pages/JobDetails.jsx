import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { jobs } from "../data/jobData";
import "../styles/jobdetails.css";
import ApplyJobModal from "../components/ApplyJobModal";

export default function JobDetails() {
    const { id } = useParams();
    const job = jobs.find((j) => j.id === id);

    const [showApplyModal, setShowApplyModal] = useState(false);

    if (!job) {
        return (
            <div className="container" style={{ padding: "10rem 0", textAlign: "center" }}>
                <h2>Job not found</h2>
                <p>The position you are looking for might have been closed.</p>
            </div>
        );
    }

    return (
        <>
            {/* HERO */}
            <section className="job-details-hero">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>{job.title}</h1>
                    <p>Experience Required: {job.experience}</p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <motion.section
                className="job-details-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2>Job Description</h2>
                <p>{job.description}</p>

                <h2>Roles & Responsibilities</h2>
                <ul>
                    {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2>Eligibility</h2>
                <ul>
                    {job.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* APPLY BUTTON WRAPPER */}
                <div className="job-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowApplyModal(true)}
                    >
                        Apply Now
                    </button>
                </div>
            </motion.section>

            {/* APPLY MODAL */}
            {showApplyModal && (
                <ApplyJobModal
                    jobTitle={job.title}
                    onClose={() => setShowApplyModal(false)}
                />
            )}
        </>
    );
}
