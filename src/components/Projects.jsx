



// // import React from "react";
// import vpn from '../assets/vpn.png';
// import dashboard from '../assets/dashboard.png';
// // import Footer from './Footer';
// import Tilt from 'react-parallax-tilt';
// import React, { useState } from "react";


// const ProjectCard = ({ title, description, git, technologies }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
  
//     return (
//       <Tilt
//         glareEnable={true}
//         glareMaxOpacity={0.4}
//         glareColor="#ffffff"
//         glarePosition="top"
//         tiltMaxAngleX={10}
//         tiltMaxAngleY={10}
//         className={`relative transition-all duration-500 
//         ${isExpanded ? "w-[400px] sm:w-[450px] md:w-[500px]" : "w-[220px] sm:w-[250px] md:w-[280px]"}`}
//       >
//         <div 
//           className={`relative group p-[2px] rounded-lg border-[2px] border-transparent 
//           ${isExpanded ? "shadow-[0_0_20px_#ffcc00] border-gold-500" : "shadow-[0_0_10px_#00bfff]"}
//           transition-all duration-500`}
//           onClick={() => setIsExpanded(!isExpanded)}
//         >
          
//           {/* Show image only when expanded */}
//           {isExpanded && title === "Digital Canteen" && (
//             <a href="#">
//               <img className="w-full h-[150px] object-cover rounded-t-lg" src={vpn} alt={title} />
//             </a>
//           )}
//           {isExpanded && title === "Dashboard" && (
//             <a href="#">
//               <img className="w-full h-[150px] object-cover rounded-t-lg" src={dashboard} alt={title} />
//             </a>
//           )}
  
//           {/* Content */}
//           <div className="p-3">
//             <h5 className="text-lg font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
//               {title}
//             </h5>
//             <p className={`text-xs text-gray-300 transition-all duration-500 ${isExpanded ? "text-sm" : "line-clamp-2"}`}>
//               {description}
//             </p>
//           </div>
  
//           {/* Tags & GitHub */}
//           <div className="m-2 flex justify-between">
//             <div className="flex flex-wrap gap-2 pl-2">
//               {technologies.map((tag, index) => (
//                 <p key={`${index}-${tag}`} className="text-xs text-blue-500">
//                   #{tag}
//                 </p>
//               ))}
//             </div>
//             <a
//               href={git}
//               className="text-red-300 border border-gray-200 rounded-lg shadow p-1 hover:text-green-500 duration-300"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </Tilt>
//     );
//   };
  
// //   export default ProjectCard;
  
  


// const Projects = () => {
//     return (
//         <div className="bg-black min-h-screen py-20 px-5">
//             <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//                 My Projects 🚀
//             </h1>

//             <div className="flex flex-wrap gap-10 justify-center items-center">
//                 {project.map((item, index) => (
//                     <ProjectCard
//                         key={index}
//                         image={item.image}
//                         title={item.title}
//                         description={item.description}
//                         git={item.git}
//                         technologies={item.technologies}
//                     />
//                 ))}
//             </div>

//             {/* <Footer />   */}
//         </div>
//     );
// };

// export const project = [
//     {
//         title: 'Dashboard',
//         description: 'A powerful dashboard designed to manage events, tasks, and finances seamlessly 🚀.',
//         image: dashboard,
//         git: 'https://github.com/nithingooud/CoPeople',
//         technologies: ['Figma']
//     },
//     {
//         title: 'Digital Canteen',
//         description: 'A shopping-like app for hostel students, enabling purchases through a coin-based system 🚀.',
//         image: vpn,
//         git: "https://github.com/Boopathy133/Shop.git",
//         technologies: ['React JS', 'Tailwind CSS', 'Node.js', 'MongoDB']
//     },
//     {
//         title: 'Task Manager',
//         description: 'An intuitive task management app to track and prioritize daily activities efficiently 🚀.',
//         image: vpn,
//         git: "https://github.com/example/task-manager",
//         technologies: ['React JS', 'Node.js', 'MongoDB']
//     },
//     {
//         title: 'Portfolio Website',
//         description: 'A modern portfolio showcasing my skills, projects, and experiences 🚀.',
//         image: dashboard,
//         git: "https://github.com/example/portfolio",
//         technologies: ['React JS', 'Tailwind CSS', 'Framer Motion']
//     },
//     {
//         title: 'Portfolio Website',
//         description: 'A modern portfolio showcasing my skills, projects, and experiences 🚀.',
//         image: dashboard,
//         git: "https://github.com/example/portfolio",
//         technologies: ['React JS', 'Tailwind CSS', 'Framer Motion']
//     }
// ];

// export default Projects;



import React, { useState } from "react";
import commingsoon1 from "../assets/commingsoon1.png";
import dashboard from "../assets/dashboard.png";
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
            className="text-red-300 border border-gray-200 rounded-lg shadow p-1 hover:text-green-500 duration-300"
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
    title: "AI-Based Assessment Tool",
    description: "An interactive online quiz platform that allows users to assess their knowledge in various subjects like Python and JavaScript. The tool provides real-time results, visualized through a pie chart, and adapts to different devices for a seamless experience. It's built with dynamic content loading, secure authentication, and an engaging interface. 🚀",
    git: "https://github.com/yourusername/AI-Assessment-Tool.git", // Replace with your actual GitHub link
    technologies: ["Flask", "JavaScript", "Chart.js", "Bootstrap",  "HTML5", "CSS3"]
},

  {
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my skills, projects, and experiences 🚀.",
    git: "https://github.com/example/portfolio",
    technologies: ["React JS", "Tailwind CSS", "Framer Motion"],
  },
];

export default Projects;
