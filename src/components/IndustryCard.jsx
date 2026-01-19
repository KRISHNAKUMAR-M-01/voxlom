import React from 'react';

const IndustryCard = ({ title, image }) => {
    return (
        <div
            className="industry-box"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="industry-overlay">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default IndustryCard;
