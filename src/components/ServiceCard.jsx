// import React, { useState } from "react";
// import "../App.css";

// const ServiceCard = ({ service }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className="card-container" onClick={() => setFlipped(!flipped)}>
//       <div className={`card ${flipped ? "flipped" : ""}`}>
//         {/* Front Side */}
//         <div className="card-face front">
//           <img src={service.image} alt={service.title} className="card-icon" />
//           <h3 className="card-title">{service.title}</h3>
//         </div>

//         {/* Back Side */}
//         <div className="card-face back">
//           <h3 className="card-title">{service.title}</h3>
//           <div className="stars">{service.stars}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;



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

