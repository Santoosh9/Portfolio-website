import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="Web Developer"
            subTitle=" RR Shree School of Technology (October 5 2023 – March 15 2024)"
            result="Kathmandu Jamal"
            des="Work with senior developer to manage large, complex design projects for corporate clients and real clients. 
Developed responsive websites using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and 
optimal performance. 
Stayed up-to-date with emerging web development technologies and best practices through self-learning and 
professional development resources. "
          />
          <AboutCard
            title=" Junior React Associative"
            subTitle=" Softechpark (December 17 2022 – March 10 2023)"
            result="Kathmandu Tinkuney"
            des="Cooperate with designers create clean interfaces.
 Work with senior developer to manage large, complex 
design projects for corporate clients.
Learning opportunity of new technology and framework 
like Next JS 13, and Tailwind CSS.
Collaboration with team using Git and Jira for 
teamwork."
          />
          <AboutCard
            title="React JS Internship "
            subTitle="GrayCode Technology - (September 19 2021 – January 20 2022)"
            result="Pulchowk Lalitpur"
            des="Understanding the real time work environment.Cooperate and taking responsibility with team members.Making website responsive using media-quires.Learn different concept with technical term and 
condition and  Understanding the workflow of React JS"
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <AboutCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <AboutCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
