import React, { useState } from 'react';
import Title from '../layout/Titel';
import Education from './Education';
import Skill from './Skill';
import Experience from './Experience';

const About = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="About Me" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-10 gap-10">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false)
            }
          ></li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skill />}

      {experienceData && <Experience />}
    </section>
  );
};

export default About;
