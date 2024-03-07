import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30">
          <ResumeCard
            title="Software Engineer"
            subTitle="Semicolon Africa - (2023 - Present)"
            des={
              <ul className="list-disc pl-6 text-white-1000">
                <li>Built the Server-side of applications with Spring boot</li>
                <li>Enhanced applications and improved performance using testing and validations against requirements and performance standard.</li>
                <li>Met application goals with expert use of optimal development tools and frameworks.</li>
                <li>Produced high-quality, clean code projects.</li>
              </ul>
            }
            note="Experience gained while pursuing education at Semicolon Africa."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
