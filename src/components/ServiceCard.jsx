import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ id, icon, title, shortText, image }) => {
    return (
        <div
            className={`service-box${image ? " has-bg-image" : ""}`}
            style={image ? { backgroundImage: `url(${image})` } : {}}
        >
            <div className="service-overlay"></div>
            <div className="service-icon">{icon}</div>

            <h3>{title}</h3>

            <p>{shortText}</p>

            <Link
                to={`/services/${id}`}
                className="read-more-btn"
                aria-label={`Read more about ${title}`}
            >
                Read more <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ServiceCard;
