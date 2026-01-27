import React from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const ServiceCard = ({ icon, title, shortText, fullText, open = false, onToggle, image }) => {
    return (
        <div
            className={`service-box${open ? " is-expanded" : ""}${image ? " has-bg-image" : ""}`}
            aria-expanded={open}
            style={image ? { backgroundImage: `url(${image})` } : {}}
        >
            <div className="service-overlay"></div>
            <div className="service-icon">{icon}</div>

            <h3>{title}</h3>

            <p>
                {open ? fullText : shortText}
            </p>

            <button type="button" onClick={onToggle} aria-label={open ? "Read less" : "Read more"}>
                {open ? (
                    <>
                        Read less <ChevronUp size={16} />
                    </>
                ) : (
                    <>
                        Read more <ArrowRight size={16} />
                    </>
                )}
            </button>
        </div>
    );
};

export default ServiceCard;
