



import React, { useState } from "react";
import commingsoon1 from "../assets/commingsoon1.png";
import dashboard from "../assets/dashboard.png";
import Ecommerce from "../assets/Ecommerce.png";
import collabrative from "../assets/collabrative.png";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ title, description, git, technologies, isActive, onClick }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#ffffff"
      glarePosition="top"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className={`relative transition-all duration-500 
        ${isActive ? "w-[400px] sm:w-[450px] md:w-[500px]" : "w-[220px] sm:w-[250px] md:w-[280px]"}`}
    >
      <div
        className={`relative group p-[2px] rounded-lg border-[2px] border-transparent 
        ${isActive ? "shadow-[0_0_20px_#ffcc00] border-gold-500" : "shadow-[0_0_10px_#00bfff]"}
        transition-all duration-500 cursor-pointer`}
        onClick={onClick}
      >
        {/* Show image only when expanded */}
        {/* import digitalcanteen from "../assets/digitalcanteen.jpg"; */}

        {isActive && title === "Digital-Canteen" && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={commingsoon1} alt={title} />
          </a>
        )}

        {isActive && title === "Dashboard" && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={dashboard} alt={title} />
          </a>
        )}

        {isActive && title === "Bus Search System" && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={commingsoon1} alt={title} />
          </a>
        )}


        {isActive && title === "E-commerce for Cloth " && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={Ecommerce} alt={title} />
          </a>
        )}


        {isActive && title === "Online Assessment & Learning Platform" && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={commingsoon1} alt={title} />
          </a>
        )}
        {isActive && title === "Figma Collaborative Tool Clone" && (
          <a href="#">
            <img className="w-full h-[150px] object-cover rounded-t-lg" src={collabrative} alt={title} />
          </a>
        )}

        {/* Content */}
        <div className="p-3">
          <h5 className="text-lg font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
          <p className={`text-xs text-gray-300 transition-all duration-500 ${isActive ? "text-sm" : "line-clamp-2"}`}>
            {description}
          </p>
        </div>

        {/* Tags & GitHub */}
        <div className="m-2 flex justify-between">
          <div className="flex flex-wrap gap-2 pl-2">
            {technologies.map((tag, index) => (
              <p key={`${index}-${tag}`} className="text-xs text-blue-500">
                #{tag}
              </p>
            ))}
          </div>
          <a
            href={git}
            className="text-red-300 border border-gray-200 rounded mb-1 shadow p-1 hover:text-green-500 duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-black min-h-screen py-20 px-5">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        My Projects 🚀
      </h1>

      <div className="flex flex-wrap gap-10 justify-center items-center">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export const project = [
  {
    title: "Dashboard",
    description: "A fully interactive dashboard prototype designed in Figma, featuring dynamic variant pages for seamless navigation. Built with a user-friendly interface, it streamlines task management, financial tracking, and event scheduling. The design focuses on accessibility and responsiveness, ensuring an intuitive experience across different devices. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/Project-1-CoderOne.git", // Replace with your actual Figma prototype link
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
  },
  {
    title: "Digital-Canteen",
    description: "A ReactJS-based food ordering system with QR code login, admin management, and a subscription-based coin system. Users can authenticate quickly using QR codes, manage their orders, and track purchases seamlessly. The admin panel provides full control over user approvals, order management, and monthly sales reports. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/Digital-Canteen.git", // Replace with your actual GitHub link
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "xlsx"],
  },

  {
    title: "Bus Search System",
    description: "A user-friendly React-based application designed to help users search for buses between two locations in real-time. The system features intelligent dropdowns that auto-suggest and auto-fill locations, making the search faster and more intuitive. It filters bus options based on departure and arrival points and displays upcoming buses with relevant details. Powered by MongoDB Atlas, it ensures live data storage and smooth performance across devices. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/Bus-Search-System.git", // Replace with your actual GitHub link
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "MongoDB Atlas"]
  },



  {
    title: "E-commerce for Cloth ",
    description: "Developed a fully functional e-commerce platform for clothing using React, offering a smooth and responsive shopping experience. Integrated Node.js and Express.js for handling backend operations and API routing. Leveraged MongoDB Atlas for secure, cloud-based data management including product listings, user data, and orders. Designed with modern UI/UX principles and a component-based architecture, ensuring accessibility, performance, and cross-device compatibility. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/E-Commerce-Website.git", // Replace with your actual GitHub link
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "REST API", "Git"]
  },
  {
    title: "Online Assessment & Learning Platform",
    description: "An interactive and scalable e-learning platform that offers module-based learning in subjects like Python and JavaScript. Each module contains three progressive levels — Basic, Intermediate, and Advanced — with dynamic tests after each stage. Users can only unlock the next level upon passing the previous test. The app tracks user progress, stores it in localStorage, and gives intelligent feedback based on quiz performance. Designed using React.js and Tailwind CSS, the system integrates a Node.js + MongoDB backend to manage user data and content delivery. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/Online-Assesment.git", // Replace with your actual GitHub link
    technologies: ["ReactJS", "Tailwind CSS", "Axios", "Node.js", "Express.js", "MongoDB"]
  },

  {
    title: "Figma Collaborative Tool Clone",
    description: "Recreated a collaborative design platform inspired by Figma, supporting real-time multi-user interactions. The project replicates key UI components such as the canvas, toolbar, layers panel, and property editor with precise attention to design systems and user experience. Implemented smooth drag-and-drop functionality, responsive layouts, and intuitive navigation using Figma’s powerful design features. This clone showcases expertise in component structuring, auto layout, and prototyping within a scalable design framework. 🚀",
    git: "https://github.com/Mukilanbalakrishnan/Project-2-CoderOne.git", // Replace with your actual Figma prototype link
    technologies: ["Figma", "Auto Layout", "Components", "Prototyping"]
  }



];

export default Projects;
