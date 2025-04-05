import React, { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState("");
    const [startAnimation, setStartAnimation] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prevText) => prevText + name[ref.current - 1]);
            } else {
                setStartAnimation(true);
                clearInterval(interval);
            }
        }, 300);
        return () => clearInterval(interval);
    }, [text]);

    // Play or Pause Music
    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Tech Logos
    const logos = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React", direction: "left", size: "w-16 h-16" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS", direction: "left", size: "w-16 h-16" },
        { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", alt: "Java", direction: "left", size: "w-16 h-16" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB", direction: "right", size: "w-24 h-24" }, 
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma", direction: "right", size: "w-16 h-16" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png", alt: "MERN Stack", direction: "right", size: "w-16 h-16" }
    ];

    return (
        <div className="relative z-0 bg-black w-screen min-h-screen flex flex-col justify-between items-center overflow-hidden">
            {/* Background Music */}
            <audio ref={audioRef} loop>
                <source src="/audio/background-music.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>

            {/* Music Toggle Button (Bottom Right) */}
            <button
                onClick={toggleMusic}
                className="fixed bottom-5 right-5 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition 
                           z-50 pointer-events-auto"
            >
                {isPlaying ? "🔊 Mute" : "🔇 Play Music"}
            </button>

            {/* Glowing Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.15),rgba(0,0,0,1))] blur-2xl opacity-50"></div>

            {/* Hero Section */}
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                {/* Moving Glowing Logos */}
                {logos.map((logo, index) => {
                    const isLeftToRight = logo.direction === "left";
                    const startX = isLeftToRight ? "-100vw" : "100vw";
                    const endX = isLeftToRight ? "100vw" : "-100vw";

                    return (
                        <motion.img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`absolute ${logo.size} logo-glow`}
                            initial={{
                                x: startX,
                                y: index % 2 === 0 ? -50 * index : 50 * index, 
                                opacity: 0
                            }}
                            animate={{
                                x: [startX, endX],
                                opacity: startAnimation ? 1 : 0
                            }}
                            transition={{
                                duration: 5 + index,
                                delay: startAnimation ? index * 0.2 : 0,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    );
                })}

                {/* Name Text with Gold Glow */}
                <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">
                    {text}
                </h1>

                {/* About Me Section */}
                <p className="mt-4 text-lg text-purple-400 text-center max-w-xl drop-shadow-[0_0_15px_rgba(128,0,128,0.8)]">
                    🚀 Passionate Full-Stack Developer | UI/UX Enthusiast | 
                    Always Learning & Innovating | Love Building Scalable Web Apps
                </p>
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;



