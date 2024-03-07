import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="container mx-auto max-w-screen-lg py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="mt-8">
        <ul className="flex justify-center">
          <li
            onClick={() => {
              setEducationData(true);
              setExperienceData(false);
            }}
            className={`mx-4 px-6 py-2 rounded-lg cursor-pointer text-lg ${
              educationData ? "bg-gray-200 text-black" : "bg-transparent text-gray-600"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(true);
            }}
            className={`mx-4 px-6 py-2 rounded-lg cursor-pointer text-lg ${
              experienceData ? "bg-gray-200 text-black" : "bg-transparent text-gray-600"
            }`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume;
