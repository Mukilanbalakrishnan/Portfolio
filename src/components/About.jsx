
import React from 'react';
import '../App.css';
import { services } from "../constants/constants";
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 text-blue-400'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px] text-gray-300'>
              👨‍💻 Hi, I'm <span className="text-blue-300 font-semibold">Mukilan Balakrishnan</span>, a 2026 graduate🎓 passionate about <span className="text-blue-300 font-semibold">Full-Stack Development</span> and <span className="text-blue-300 font-semibold">UI/UX Design</span>.  
              I specialize in <span className="text-blue-300 font-semibold">MERN Stack</span>🚀, creating dynamic, scalable, and efficient web applications.  
              <br />
              ✍️ Beyond coding, I love sharing knowledge through blogs on <a className='text-green-300 hover:text-green-500 duration-300' href='https://github.com/Mukilanbalakrishnan' target='_blank'>GitHub</a>.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1VX0XsuHFxF2wkZMHcbsbq3dPomy4BWin/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>

          {/* Skills Section */}
          <h3 className="text-3xl text-blue-400 font-bold mt-16 text-center">🚀 My Skills</h3>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mt-2">
            I specialize in Full-Stack Development, UI/UX, and problem-solving. Here are some of the technologies I work with:
          </p>

          {/* Skill Cards with Wave Animation */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-10">
  {services.map((service, index) => (
    <div key={index} className="skill-card">
      <ServiceCard service={service} />
    </div>
  ))}
</div>


          {/* My Journey Section */}
          <div className='sm:px-16 px-2 mt-16'>
            <h3 className='text-3xl text-blue-400 font-bold'>💡 My Journey</h3>
            <p className='mt-3 text-lg text-gray-300 max-w-3xl leading-[30px]'>
              From writing simple HTML and CSS to building full-fledged applications, my journey has been fueled by curiosity and determination.  
              I've participated in <span className="text-blue-300 font-semibold">hackathons</span>, led <span className="text-blue-300 font-semibold">team projects</span>, and continuously explored new technologies.
            </p>
          </div>

          {/* Beyond Coding Section */}
          <div className='sm:px-16 px-2 mt-12'>
            <h3 className='text-3xl text-blue-400 font-bold'>📌 Beyond Coding</h3>
            <p className='mt-3 text-lg text-gray-300 max-w-3xl leading-[30px]'>
              When I’m not coding, I enjoy exploring <span className="text-blue-300 font-semibold">new tech trends</span>, designing user-friendly interfaces, and engaging in community-driven projects.
            </p>
          </div>

          {/* Let's Connect Section */}
          <div className='sm:px-16 px-2 mt-12'>
            <h3 className='text-3xl text-blue-400 font-bold'>🔗 Let’s Connect!</h3>
            <p className='mt-3 text-lg text-gray-300 max-w-3xl leading-[30px]'>
              I'm open to collaborations, internships, and exciting projects.  
              Feel free to reach out, and let’s create something amazing together! 🚀
            </p>
          </div>

        </div>
      </div>

    
      {/* <Footer /> */}
    </div>
  );
};

export default About;

