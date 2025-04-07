
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="skill-card">
      <div className="card-inner">
        {/* Front Side (Skill Name & Logo) */}
        <div className="card-front">
        <img
  src={service.icon}
  alt={service.title}
  className="service-card"
/>


          <h3 className="text-white text-sm font-bold">{service.title}</h3>  {/* Reduced text size */}
        </div>

        {/* Back Side (Stars) */}
        <div className="card-back">
          {"★".repeat(service.stars)}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

