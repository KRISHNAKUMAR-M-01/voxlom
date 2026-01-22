import { useState } from "react";
import "../styles/apply-job.css";

const ApplyJobModal = ({ jobTitle, onClose }) => {
    const [candidateType, setCandidateType] = useState("fresher");

    return (
        <div className="apply-overlay">
            <div className="apply-modal">
                <button className="apply-close" onClick={onClose}>×</button>

                <h2 className="apply-title">
                    Apply for {jobTitle}
                </h2>

                <form className="apply-form">

                    {/* PERSONAL DETAILS */}
                    <h3>Personal Details</h3>
                    <div className="form-grid">
                        <input type="text" placeholder="Name *" required />
                        <input type="email" placeholder="Email *" required />
                        <input type="tel" placeholder="Mobile *" required />
                        <input type="text" placeholder="Native Place, City" />
                    </div>

                    {/* EXPERIENCE TYPE */}
                    <h3>Experience Level</h3>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="experience"
                                value="fresher"
                                checked={candidateType === "fresher"}
                                onChange={() => setCandidateType("fresher")}
                            />
                            Fresher
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="experience"
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
                                    type="number"
                                    placeholder="Years of Experience *"
                                    min="0"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Current Job Location *"
                                    required
                                />

                                <input
                                    type="number"
                                    placeholder="Current CTC (₹) *"
                                    min="0"
                                    required
                                />
                            </>
                        )}

                        <input
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
                            <input type="file" id="resume-upload" required className="file-input" />
                            <div className="upload-placeholder">
                                <span className="upload-icon">📄</span>
                                <p>Click to upload or drag and drop</p>
                                <span>PDF, DOC, DOCX (Max 5MB)</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyJobModal;
