import React, { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const ServiceCard = ({ icon, title, shortText, fullText }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="service-box">
            <div className="service-icon">{icon}</div>

            <h3>{title}</h3>

            <p>
                {open ? fullText : shortText}
            </p>

            <button onClick={() => setOpen(!open)}>
                {open ? (
                    <>
                        Show less <ChevronUp size={16} />
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
