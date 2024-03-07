import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  // Define list of items for each feature
  const backEndItems = ["Java", "Spring Boot", "Node.js","Python","GO","Restful APIs"];
  const frontEndItems = ["HTML", "CSS", "JavaScript","React"];
  const otherItems = ["Git", "SQL", "MongoDB","MicroServices","Unit Testing","Agile methodology"];

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="My Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Back End"
          des={backEndItems}
        />
        <Card
          title="Front End"
          des={frontEndItems}
          icon={<AiFillAppstore />}
        />
        <Card
          title="Other"
          des={otherItems}
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features;
