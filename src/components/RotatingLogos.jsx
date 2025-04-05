import React from "react";
import { motion } from "framer-motion";

// Logo Images
const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
    { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", alt: "Java" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/74/DaVinci_Resolve_Studio_logo.png", alt: "DaVinci Resolve" }, // New DaVinci Resolve Logo
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png", alt: "MERN Stack" } // MERN Stack Logo
];


const RotatingLogos = () => {
    return (
        <motion.div
            className="absolute w-[300px] h-[300px] flex justify-center items-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
            {logos.map((logo, index) => {
                const angle = (index / logos.length) * (2 * Math.PI); // Evenly distribute around the circle
                const radius = 150; // Distance from the center

                return (
                    <motion.img
    key={index}
    src={logo.src}
    alt={logo.alt}
    className="absolute w-12 h-12"
    style={{
        top: `${50 + Math.sin(angle) * radius}px`,
        left: `${50 + Math.cos(angle) * radius}px`,
        transform: "translate(-50%, -50%)",
        filter: logo.alt === "MERN Stack" ? "invert(1)" : "none", // Invert white logos
        border: logo.alt === "MERN Stack" ? "1px solid white" : "none" // Add border if needed
    }}
    whileHover={{ scale: 1.3 }}
/>

                );
            })}
        </motion.div>
    );
};

export default RotatingLogos;
