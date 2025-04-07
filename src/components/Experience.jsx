
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
// import Footer from './Footer';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16 font-semibold text-[20px]'>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='font-light'
        >
          MY JOURNEY SO FAR.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='text-4xl sm:text-5xl font-extrabold mt-2'
        >
          Work Experience.
        </motion.h2>
      </div>

      <VerticalTimeline animate={true} className='mt-9'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a
                className='flex justify-center items-center w-full h-full'
                href={experience.url}
                target='_blank'
                rel="noreferrer"
              >
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                {experience.company}
              </p>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, idx) => (
                  <li key={`experience-point-${idx}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* <Footer /> */}
    </div>
  );
};

export default Experience;


