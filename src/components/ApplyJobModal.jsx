import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import "../styles/apply-job.css";

const ApplyJobModal = ({ jobTitle, onClose }) => {
    const [candidateType, setCandidateType] = useState("fresher");
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ state: 'loading', message: 'Submitting application...' });

        // EmailJS Configuration
        // Replace these with your own IDs from EmailJS dashboard
        const SERVICE_ID = 'service_xxxxxxx';
        const TEMPLATE_ID = 'template_xxxxxxx';
        const PUBLIC_KEY = 'your_public_key';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setStatus({ state: 'success', message: 'Application submitted successfully! Our team will contact you soon.' });
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({ state: 'error', message: 'Something went wrong while uploading your application. Please check your internet and try again.' });
            });
    };

    return (
        <div className="apply-overlay">
            <motion.div
                className="apply-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
            >
                <button className="apply-close" onClick={onClose}>×</button>

                {status.state === 'success' ? (
                    <div className="apply-success-view">
                        <CheckCircle size={64} color="#FF9D2E" />
                        <h2>Success!</h2>
                        <p>{status.message}</p>
                        <button className="submit-btn" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <h2 className="apply-title">
                            Apply for {jobTitle}
                        </h2>

                        <form className="apply-form" onSubmit={handleSubmit}>
                            {/* Hidden field for EmailJS to know which job is being applied for */}
                            <input type="hidden" name="job_applied_for" value={jobTitle} />

                            {/* PERSONAL DETAILS */}
                            <h3>Personal Details</h3>
                            <div className="form-grid">
                                <input name="user_name" type="text" placeholder="Name *" required />
                                <input name="user_email" type="email" placeholder="Email *" required />
                                <input name="user_mobile" type="tel" placeholder="Mobile *" required />
                                <input name="user_location" type="text" placeholder="Native Place, City" />
                            </div>

                            {/* EXPERIENCE TYPE */}
                            <h3>Experience Level</h3>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="experience_level"
                                        value="fresher"
                                        checked={candidateType === "fresher"}
                                        onChange={() => setCandidateType("fresher")}
                                    />
                                    Fresher
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="experience_level"
                                        value="experienced"
                                        checked={candidateType === "experienced"}
                                        onChange={() => setCandidateType("experienced")}
                                    />
                                    Experienced
                                </label>
                            </div>

                            {/* JOB DETAILS */}
                            <h3>Job Details</h3>
                            <div className="form-grid">
                                {candidateType === "experienced" && (
                                    <>
                                        <input
                                            name="years_experience"
                                            type="number"
                                            placeholder="Years of Experience *"
                                            min="0"
                                            required
                                        />
                                        <input
                                            name="current_location"
                                            type="text"
                                            placeholder="Current Job Location *"
                                            required
                                        />
                                        <input
                                            name="current_ctc"
                                            type="number"
                                            placeholder="Current CTC (₹) *"
                                            min="0"
                                            required
                                        />
                                    </>
                                )}
                                <input
                                    name="expected_ctc"
                                    type="number"
                                    placeholder="Expected CTC (₹) *"
                                    min="0"
                                    required
                                />
                            </div>

                            {/* RESUME */}
                            <div className="resume-upload">
                                <label className="resume-label">Resume *</label>
                                <div className="upload-container">
                                    <input name="my_file" type="file" id="resume-upload" required className="file-input" />
                                    <div className="upload-placeholder">
                                        <span className="upload-icon">📄</span>
                                        <p>Click to upload or drag and drop</p>
                                        <span>PDF, DOC, DOCX (Max 5MB)</span>
                                    </div>
                                </div>
                            </div>

                            {status.state === 'error' && (
                                <div className="apply-error-message">
                                    <AlertCircle size={16} />
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`submit-btn ${status.state === 'loading' ? 'loading' : ''}`}
                                disabled={status.state === 'loading'}
                            >
                                {status.state === 'loading' ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default ApplyJobModal;
